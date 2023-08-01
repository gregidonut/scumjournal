import {component$, useStylesScoped$} from "@builder.io/qwik";
import styles from "./styles.css?inline";
// import displayPicture from "../MicroBlogArticles/portrait-pixelate-4.png?inline"
import MicroBlogArticle from "~/components/MicroBlogArticles/MicroBlogArticles";


export default component$(() => {
    useStylesScoped$(styles)
    return (
        <>
            <main class="blog-page">
                <MicroBlogArticle/>
            </main>
        </>
    );
});
