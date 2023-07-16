import {component$, useStyles$} from "@builder.io/qwik";
import type {DocumentHead} from "@builder.io/qwik-city";
import {Link} from "@builder.io/qwik-city";
import styles from "./styles.css?inline";

export default component$(() => {
    useStyles$(styles)
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li><h1><Link href={"/"}>ScumJournal</Link></h1></li>
                    </ul>
                </nav>
            </header>
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
