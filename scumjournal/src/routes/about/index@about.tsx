import {component$, useStylesScoped$} from "@builder.io/qwik";
import type {DocumentHead} from "@builder.io/qwik-city";
import {Link} from "@builder.io/qwik-city";
import Header from "~/components/Header/Header";
import styles from "./styles.css?inline"

export default component$(() => {
    useStylesScoped$(styles)
    return (
        <>
            <Header/>
            <main>
                <h2>about</h2>
                <p>check out my <Link href="https://github.com/gregidonut">github</Link></p>
                <p>I've been in tech support for a couple of years.</p>
                <p>but I develop for the web now.</p>
                <p><strong>LET'S ATTACK!!</strong></p>
                <section>
                    <h3>
                        want something like this? email me:
                    </h3>
                    <address>
                        <a href="mailto:gregosilaja@outlook.com">gregosilaja@outlook.com</a>
                    </address>
                </section>
            </main>
        </>
    );
});

export const head: DocumentHead = {
    title: "about greg",
    meta: [
        {
            name: "description",
            content: "about",
        },
    ],
    links: [
        {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css?family=Pangolin",
        },
    ],
};