import {component$, useStyles$} from "@builder.io/qwik";
import styles from "./styles.css?inline";
import displayPicture from "./portrait-pixelate-4.png?inline"


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