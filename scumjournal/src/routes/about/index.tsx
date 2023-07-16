import {component$} from "@builder.io/qwik";
import type {DocumentHead, RequestHandler} from "@builder.io/qwik-city";
import {Link} from "@builder.io/qwik-city";

export default component$(() => {
    return (
        <>
            <h2>about</h2>
            <p>check out my <Link href="https://github.com/gregidonut">github</Link></p>
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