import {component$, useStylesScoped$} from "@builder.io/qwik";
import styles from "./styles.css?inline";
import MicroBlogArticle from "~/components/MicroBlogArticles/MicroBlogArticles";
import burger from "./hamberger_icon.webp?inline"


export default component$(() => {
    useStylesScoped$(styles)
    return (
        <>
            <button>
                <img src={burger} alt="menu" width={30} height={30}/>
            </button>
        </>
    );
});
