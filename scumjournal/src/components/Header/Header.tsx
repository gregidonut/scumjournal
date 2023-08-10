import {component$, useStyles$} from "@builder.io/qwik";
import {Link} from "@builder.io/qwik-city";
import styles from "./styles.css?inline";
import HambergerIcon from "~/components/HambergerIcon/HambergerIcon";

export default component$(() => {
    useStyles$(styles)
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li><h1><Link href={"/"}>ScumJournal</Link></h1></li>
                        <li>
                            <HambergerIcon/>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
});
