import {component$} from "@builder.io/qwik";
import type {DocumentHead} from "@builder.io/qwik-city";
import Header from "~/components/Header/Header";
import Main from "~/components/Main/Main";
import Footer from "~/components/Footer/Footer";

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
            content: "anchoring myself to create more",
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