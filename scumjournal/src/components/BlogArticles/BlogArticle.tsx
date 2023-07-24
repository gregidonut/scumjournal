import { component$, Resource, useResource$, useStore, useStylesScoped$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";
// import {Link} from "@builder.io/qwik-city";
import styles from "./styles.css?inline";
import * as datefns from "date-fns";

interface vote {
    upvotes: string | null;
    downvotes: string | null;
    lastVoteDate: Date | null;
}

interface img {
    alt: string;
    handle: string;
}

interface microBlogArticle {
    id: string;
    date: string | null;
    title: string | null;
    images: img[] | null;
    content: string[] | null;
    votes: vote | null;
}

export default component$(() => {
    useStylesScoped$(styles);
    const microBlogArticles: microBlogArticle[] = useStore([]); // intializing empty array

    const microBlogArticlesResource = useResource$<microBlogArticle[]>(({ track, cleanup }) => {
        // We need a way to re-run fetching data whenever the `github.org` changes.
        // Use `track` to trigger re-running of the this data fetching function.
        track(() => microBlogArticles);

        // A good practice is to use `AbortController` to abort the fetching of data if
        // new request comes in. We create a new `AbortController` and register a `cleanup`
        // function which is called when this function re-runs.
        const controller = new AbortController();
        cleanup(() => controller.abort());

        // Fetch the data and return the promises.
        return getArticles(controller);
    });

    // const articlesReverse = useStore([...articlesRaw].reverse());

    function timeElement(dateString: string) {
        const dateFromString = new Date(dateString);

        const formattedDateString = datefns.format(dateFromString, "MMM do, yyyy | K:mm aaa XX");

        const dateAttrVal = datefns.format(dateFromString, "yyyy-LL-dd");
        const timeAttrVal = datefns.format(dateFromString, "HH:mm:ss.SSSXX");

        return <time dateTime={`${dateAttrVal}T${timeAttrVal}`}>{formattedDateString}</time>;
    }

    return (
        <Resource
            value={microBlogArticlesResource}
            onPending={() => <div>Loading..</div>}
            onRejected={(error) => <p>Error: {error.message}</p>}
            onResolved={(mba: microBlogArticle[]) => (
                <>
                    {mba.map((article) => (
                        <article key={article.id}>
                            {article.date ? (
                                <div class="date-container">
                                    <p class="date">{timeElement(article.date)}</p>
                                </div>
                            ) : null}
                            {article.images ? (
                                <section>
                                    {article.images.map((image) => (
                                        <Image
                                            key={image.alt}
                                            src={image.handle}
                                            layout="fixed"
                                            width={300}
                                            height={300}
                                            alt={image.alt}
                                        />
                                    ))}
                                </section>
                            ) : null}
                            {article.title ? <h3>{article.title}</h3> : null}
                            {article.content ? (
                                <section>
                                    {article.content.map((paragraph) => (
                                        <p>{paragraph}</p>
                                    ))}
                                </section>
                            ) : null}
                        </article>
                    ))}
                </>
            )}
        />
    );
});

export async function getArticles(controller?: AbortController): Promise<microBlogArticle[]> {
    const url = `https://yo25a0gvf3.execute-api.us-east-1.amazonaws.com/microBlogArticlesDatabase `;
    const resp = await fetch(url, {
        signal: controller?.signal,
    });
    const json = await resp.json();

    return Array.isArray(json) ? json : Promise.reject(json);
}
