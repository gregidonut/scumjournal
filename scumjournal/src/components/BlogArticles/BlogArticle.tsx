import {component$, useStore, useStylesScoped$} from "@builder.io/qwik";
import {Image} from '@unpic/qwik';
// import {Link} from "@builder.io/qwik-city";
import styles from "./styles.css?inline";

export default component$(() => {
    useStylesScoped$(styles)

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
                    handle: "https://res.cloudinary.com/dyvlgmh1w/image/upload/v1689704741/microBlogArticles/portrait-pixelate-4_hiqmtz.png",
                    priority: true,
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
                    handle: "https://res.cloudinary.com/dyvlgmh1w/image/upload/v1689704739/microBlogArticles/favicon_csqst2.svg",
                    priority: false,
                },
            ],
            title: null,
            content: null,
        },
        {
            id: 3,
            date: null,
            images: null,
            title: null,
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
                    handle: "https://res.cloudinary.com/dyvlgmh1w/image/upload/v1689704757/microBlogArticles/monster_hambat_3__copy_2__final_old_2_jduo0e.gif",
                    priority: false,
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
                            {
                                article.images.map((image) => (
                                    <Image
                                        src={image.handle}
                                        layout="constrained"
                                        width={300}
                                        height={300}
                                        alt={image.alt}
                                        priority={image.priority}
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
