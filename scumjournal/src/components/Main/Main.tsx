import {component$, useStylesScoped$} from "@builder.io/qwik";
import styles from "./styles.css?inline";
// import displayPicture from "../microBlogArticles/portrait-pixelate-4.png?inline"
import BlogArticle from "~/components/microBlogArticles/microBlogArticles";


export default component$(() => {
    useStylesScoped$(styles)
    return (
        <>
            <main id="blog-page">
                <BlogArticle/>
            </main>
        </>
    );
});
