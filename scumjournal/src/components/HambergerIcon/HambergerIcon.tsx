import {component$, useStylesScoped$} from "@builder.io/qwik";
import styles from "./styles.css?inline";
import burger from "./hamberger_icon.webp?inline"


export default component$(() => {
    useStylesScoped$(styles)
    return (
        <>
            <button>
                <img key={burger} src={burger} alt="menu" width={30} height={30}/>
            </button>
        </>
    );
});
