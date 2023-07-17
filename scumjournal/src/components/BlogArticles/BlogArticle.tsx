import {component$, useStore, useStyles$} from "@builder.io/qwik";
// import {Link} from "@builder.io/qwik-city";
import styles from "./styles.css?inline";
import favicon from "./favicon.svg?inline"
import hambat from "./monster_hambat(3)_copy(2)_final_old(2).gif"
import portrait from "./portrait-pixelate-4.png?inline"

export default component$(() => {
    useStyles$(styles)

    const articlesRaw = useStore([
        {
            id: 1,
            date: {
                date: "2023-07-16",
                time: "07:35",
            },
            images: [
                {
                    alt: "Display Picture",
                    handle: portrait,
                },
            ],
            title: "starting a blog",
            content: [
                "anchoring my self into creating more",
            ],
        },
        {
            id: 2,
            date: null,
            images: [
                {
                    alt: "logo",
                    handle: favicon,
                },
            ],
            title: null,
            content: null,
        },
        {
            id: 3,
            date: null,
            content: [
                "kapag ba dinoble yung puto tawag ba dun putocopy?",
            ],
        },
        {
            id: 4,
            date: null,
            images: [
                {
                    alt: "monster meat bat",
                    handle: hambat,
                },
            ],
            title: "monster meat bat",
            content: null,
        },
    ])

    const articlesReverse = useStore([...articlesRaw].reverse());

    return (
        <>
            {articlesReverse.map((article) => (
                <article key={article.id}>
                    {article.date ? (
                        <div class="date-container">
                            <p class="date">
                                <time dateTime={article.date.date}>July 16</time>
                                {" "}
                                <time dateTime={article.date.time}>07:35</time>
                            </p>
                        </div>
                    ) : null}
                    {article.images ? (
                        <section>
                            <img width="300" height="300" src={article.images[0].handle} alt={article.images[0].alt}/>
                        </section>
                    ) : null}
                    {article.title ? (
                        <h3>{article.title}</h3>
                    ) : null}
                    {article.content ? (
                        <section>
                            <p>{article.content[0]}</p>
                        </section>
                    ) : null}
                </article>
            ))}
        </>
    );
});
