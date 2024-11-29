import { categoryList } from "@/mock/mockdata"
import Link from "next/link"

export default function CategotyList () {

    return (
        <ul className="categorylist">
            {categoryList.map((category:string)=> (
                <Link href={category === 'All' ? '/blog' :`/blog/${category}`} key={category}>
                    <li className="category_button">{category}</li>
                </Link>
            ))}
        </ul>
    )
}