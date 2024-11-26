import Link from "next/link";
import { navMenu } from "@/mock/mockdata";

export default function Nav() {
    return (
        <nav>
            {navMenu.map((menu) => (
                <Link href={menu.link} key={menu.name}>
                    <h2>{menu.name}</h2>
                </Link>
            ))}
        </nav>
    )
}