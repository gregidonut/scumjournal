import {component$, useStyles$} from "@builder.io/qwik";
import styles from "./styles.css?inline";
import displayPicture from "./portrait-pixelate-4.png?inline"


export default component$(() => {
    useStyles$(styles)
    return (
        <>
            <main>
                <article>
                    <section>
                        <img width="300" height="300" src={displayPicture} alt="Display Picture"/>
                    </section>
                    <section>
                        <h3>starting a blog</h3>
                        <p>
                            trying to anchor myself into creating more
                        </p>
                    </section>
                </article>
            </main>
        </>
    );
});
