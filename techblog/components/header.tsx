import { blogTitle } from "@/mock/mockdata";
import Link from "next/link";
// import Nav from "./nav";

export default function Header() {

    return (
        <>
            <header className="header">
                <Link href={'/'}>
                    <h1 className="blog_title">{blogTitle}</h1>
                </Link>
                {/* <Nav/> */}
            </header>
        </>
    )
}