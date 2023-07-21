import {component$, useStore, useStylesScoped$} from "@builder.io/qwik";
import {Image} from '@unpic/qwik';
// import {Link} from "@builder.io/qwik-city";
import styles from "./styles.css?inline";
import * as datefns from "date-fns";

export default component$(() => {
    useStylesScoped$(styles)

    const articlesRaw = useStore([
        {
            id: 1,
            date: "2023-07-15T23:35:00Z",
            images: [
                {
                    alt: "Display Picture",
                    handle: "https://scumjournal.b-cdn.net/microblogarticles/portrait-pixelate-4.png",
                },
            ],
            title: "starting a blog",
            content: [
                "anchoring my self into creating more",
            ],
            votes: {
                upvotes: 0,
                downvotes: 0,
                lastVoteDate: null,
            }
        },
        {
            id: 2,
            date: null,
            images: [
                {
                    alt: "logo",
                    handle: "https://scumjournal.b-cdn.net/microblogarticles/favicon.svg",
                },
            ],
            title: null,
            content: null,
            votes: {
                upvotes: 0,
                downvotes: 0,
                lastVoteDate: null,
            }
        },
        {
            id: 3,
            date: null,
            images: null,
            title: null,
            content: [
                "kapag ba dinoble yung puto tawag ba dun putocopy?",
            ],
            votes: {
                upvotes: 0,
                downvotes: 0,
                lastVoteDate: null,
            }
        },
        {
            id: 4,
            date: null,
            images: [
                {
                    alt: "monster meat bat",
                    handle: "https://scumjournal.b-cdn.net/microblogarticles/monster-meat-bat-200fps-300px.webp",
                },
            ],
            title: "monster meat bat",
            content: null,
            votes: {
                upvotes: 0,
                downvotes: 0,
                lastVoteDate: null,
            }
        },
        {

            id: 5,
            date: "2023-07-20T00:01:00Z",
            images: null,
            title: null,
            content: [
                "you ever think maybe life just happens. and we're all just watching everything unfold?",
                "a back seat through your own eyes.",
            ],
            votes: {
                upvotes: 0,
                downvotes: 0,
                lastVoteDate: null,
            }
        }
    ])

    const articlesReverse = useStore([...articlesRaw].reverse());


    function timeElement(dateString: string) {
        const dateFromString = new Date(dateString);

        const formattedDateString = datefns.format(dateFromString, "MMM do, yyyy | K:mm aaa XX")

        const dateAttrVal = datefns.format(dateFromString, "yyyy-LL-dd")
        const timeAttrVal = datefns.format(dateFromString, "HH:mm:ss.SSSXX")

        return (
            <time dateTime={`${dateAttrVal}T${timeAttrVal}`}>{formattedDateString}</time>
        )
    }

    return (
        <>
            {articlesReverse.map((article) => (
                <article key={article.id}>
                    {article.date ? (
                        <div class="date-container">
                            <p class="date">
                                {timeElement(article.date)}
                            </p>
                        </div>
                    ) : null}
                    {article.images ? (
                        <section>
                            {
                                article.images.map((image) => (
                                    <Image
                                        key={image.alt}
                                        src={image.handle}
                                        layout="fixed"
                                        width={300}
                                        height={300}
                                        alt={image.alt}
                                    />
                                ))
                            }
                        </section>
                    ) : null}
                    {article.title ? (
                        <h3>{article.title}</h3>
                    ) : null}
                    {article.content ? (
                        <section>
                            {
                                article.content.map((paragraph) => (
                                    <p>{paragraph}</p>
                                ))
                            }
                        </section>
                    ) : null}
                </article>
            ))}
        </>
    );
});
