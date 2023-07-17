import {component$, useStyles$} from "@builder.io/qwik";
// import {Link} from "@builder.io/qwik-city";
import styles from "./styles.css?inline";
import favicon from "../../../public/favicon.svg?inline"
import hambat from "./monster_hambat(3)_copy(2)_final_old(2).gif"
import portrait from "./portrait-pixelate-4.png?inline"

export default component$(() => {
    useStyles$(styles)

    let articles = [
        (
            <article>
                <p class="date">
                    <time dateTime="2023-07-16">July 16</time>
                    {" "}
                    <time dateTime="07:35">07:35</time>
                </p>
                <section>
                    <img width="300" height="300" src={portrait} alt="Display Picture"/>
                </section>
                <section>
                    <h3>starting a blog</h3>
                    <p>anchoring my self into creating more</p>
                </section>
            </article>
        ),
        (

            <article>
                <section>
                    <img width="300" height="300" src={favicon} alt="logo"/>
                </section>
            </article>
        ),
        (
            <article>
                <section>
                    <p>
                        kapag ba dinoble yung puto tawag ba dun putocopy?
                    </p>
                </section>
            </article>
        ),
        (
            <article>
                <section>
                    <img width="300" height="300" src={hambat} alt="monster meat bat"/>
                </section>
                <section>
                    <h3>monster meat bat</h3>
                </section>
            </article>
        ),
    ]

    articles.reverse();

    return (
        <>
            {articles.map((article) => article)}
        </>
    );
});
