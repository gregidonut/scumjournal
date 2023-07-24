import { component$, Resource, useResource$, useStore, useStylesScoped$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";
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
    date: string | null;
    title: string | null;
    images: img[] | null;
    content: string[] | null;
    votes: vote | null;
    postNumber: number;
}

export default component$(() => {
    useStylesScoped$(styles);
    const microBlogArticles: microBlogArticle[] = useStore([]); // intializing empty array

    const microBlogArticlesResource = useResource$<microBlogArticle[]>(({ track, cleanup }) => {
        track(() => microBlogArticles);

        const controller = new AbortController();
        cleanup(() => controller.abort());

        return getArticles(controller);
    });

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
            onPending={() => (
                <article>
                    <p>Loading..</p>
                </article>
            )}
            onRejected={(error) => (
                <article>
                    <p>Error: {error.message}</p>
                </article>
            )}
            onResolved={(mba: microBlogArticle[]) => (
                <>
                    {mba.map((article) => (
                        <article key={article.postNumber}>
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
    const url = `https://yo25a0gvf3.execute-api.us-east-1.amazonaws.com/microBlogArticlesDatabase`;
    const resp = await fetch(url, {
        signal: controller?.signal,
    });
    const json = await resp.json();

    return Array.isArray(json) ? json : Promise.reject(json);
}
