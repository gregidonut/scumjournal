import {component$, useStyles$, useStylesScoped$} from "@builder.io/qwik";
import type {DocumentHead, RequestHandler} from "@builder.io/qwik-city";
import {Link} from "@builder.io/qwik-city";
import Header from "~/components/Header/Header";
import styles from "./styles.css?inline"

export default component$(() => {
    useStylesScoped$(styles)
    return (
        <>
            <Header />
            <main>
                <h2>about</h2>
                <p>check out my <Link href="https://github.com/gregidonut">github</Link></p>
            </main>
        </>
    );
});

export const head: DocumentHead = {
    title: "about greg",
    meta: [
        {
            name: "description",
            content: "standard blog about page",
        },
    ],
    links: [
    ],
};