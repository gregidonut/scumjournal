import {component$} from "@builder.io/qwik";
import type {DocumentHead, RequestHandler} from "@builder.io/qwik-city";

export const onGet: RequestHandler = async ({cacheControl}) => {
    // Control caching for this request for best performance and to reduce hosting costs:
    // https://qwik.builder.io/docs/caching/
    cacheControl({
        // Always serve a cached response by default, up to a week stale
        staleWhileRevalidate: 60 * 60 * 24 * 7,
        // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
        maxAge: 5,
    });
};

export default component$(() => {
    return (
        <>
            <h1>Hi 👋</h1>
            <p>
                Can't wait to see what you build with qwik!
                <br/>
                Happy coding.
            </p>
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
