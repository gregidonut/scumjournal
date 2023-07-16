import {component$} from "@builder.io/qwik";
import type {DocumentHead} from "@builder.io/qwik-city";

export default component$(() => {
    return (
        <>
            <main>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad at commodi dicta distinctio, expedita
                    fugit in laudantium quidem recusandae tempore. Adipisci cupiditate esse, fugiat mollitia provident
                    quis reiciendis sunt voluptas.
                </p>
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
