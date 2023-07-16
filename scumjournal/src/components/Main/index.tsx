import {component$, useStyles$} from "@builder.io/qwik";
import type {DocumentHead} from "@builder.io/qwik-city";
import styles from "./styles.css?inline";
import displayPicture from "./portrait-pixelate-3.png?inline"


export default component$(() => {
    useStyles$(styles)
    return (
        <>
            <main>
                <section>
                    <img width="300" height="300" src={displayPicture} alt="Display Picture"/>
                </section>
                <article>
                    <h2>starting a blog</h2>
                    <p>
                        trying to anchor myself into creating more
                    </p>
                </article>
            </main>
        </>
    );
});

export const head: DocumentHead = {
    title: "Welcome to Qwik",
    meta: [
        {
            name: "description",
            content: "Qwik site description",
        },
    ],
};
