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
                    handle: "https://scumjournal.b-cdn.net/microblogarticles/portrait-pixelate-4.png",
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
                    handle: "https://scumjournal.b-cdn.net/microblogarticles/favicon.svg",
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
                    handle: "https://scumjournal.b-cdn.net/microblogarticles/monster-meat-bat-200fps-300px.webp",
                },
            ],
            title: "monster meat bat",
            content: null,
        },
        {

            id: 5,
            date: {
                date: "2023-07-20",
                time: "08:01",
            },
            images: null,
            title: null,
            content: [
                "you ever think maybe life just happens. and we're all just watching everything unfold?",
                "a back seat through your own eyes.",
            ],
        }
    ])

    const articlesReverse = useStore([...articlesRaw].reverse());

    function dateToString(date: string, time: string) {
        const months = [
            "Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"
        ]
        const dateFromString = new Date(`${date}T${time}:00.000+08:00`);
        return `${months[dateFromString.getMonth()]} ${dateFromString.getDate()}, ${dateFromString.getFullYear()}`
    }

    function timeToString(date: string, time: string) {
        const timeFromString = new Date(`${date}T${time}:00.000+08:00`);
        return `${(timeFromString.getHours() >= 12 ? timeFromString.getHours() - 12 :
            timeFromString.getHours())}:${(timeFromString.getMinutes() < 10 ? `0${timeFromString.getMinutes()}` :
            timeFromString.getMinutes())} ${(timeFromString.getHours() >= 12) ? "PM" : "AM"}`
    }

    function timeElements(date: string, time: string) {
        return (
            <>
                <time dateTime={date}>
                    {dateToString(date, time)}</time>
                {" "}
                <time dateTime={time}>
                    {timeToString(date, time)}</time>
            </>
        )
    }

    return (
        <>
            {articlesReverse.map((article) => (
                <article key={article.id}>
                    {article.date ? (
                        <div class="date-container">
                            <p class="date">
                                {timeElements(article.date.date, article.date.time)}
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
