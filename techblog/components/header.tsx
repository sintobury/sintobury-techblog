import { blogTitle } from "@/mock/mockdata";
import Nav from "./nav";

export default function Header() {

    return (
        <>
            <header>
                <h1>{blogTitle}</h1>
                <Nav/>
            </header>
        </>
    )
}