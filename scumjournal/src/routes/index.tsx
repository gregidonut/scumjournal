import {component$} from "@builder.io/qwik";
import type {DocumentHead, RequestHandler} from "@builder.io/qwik-city";
import Header from "~/components/Header/Header";
import Main from "~/components/Main/Main";
import Footer from "~/components/Footer/Footer";

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
            <Header/>
            <Main/>
            <Footer/>
        </>
    );
});

export const head: DocumentHead = {
    title: "ScumJournal",
    meta: [
        {
            name: "description",
            content: "achoring myself to create more",
        },
    ],
    links: [
        {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css?family=Montserrat",
        },
        {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css?family=Cedarville+Cursive",
        },
    ],
};