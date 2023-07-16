import {component$, useStyles$} from "@builder.io/qwik";
import {Link} from "@builder.io/qwik-city";
import styles from "./styles.css?inline";

export default component$(() => {
    useStyles$(styles)
    return (
        <>
            <footer>
                <p> <Link href="/about">Greg Osilaja</Link>
                    <span>|</span>
                    <Link href="https://github.com/gregidonut">Github</Link>
                </p>
            </footer>
        </>
    );
});
