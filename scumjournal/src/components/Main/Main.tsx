import {component$, useStyles$} from "@builder.io/qwik";
import styles from "./styles.css?inline";
import displayPicture from "../BlogArticles/portrait-pixelate-4.png?inline"
import BlogArticle from "~/components/BlogArticles/BlogArticle";


export default component$(() => {
    useStyles$(styles)
    return (
        <>
            <main>
                <BlogArticle/>
            </main>
        </>
    );
});
