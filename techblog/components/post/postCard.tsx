import { transferCategoryName } from "@/utils/post";
import Link from "next/link";

type Props = {
    post:post
}

interface post {
    category:string;
    content:string;
    title:string;
    date:Date;
    description:string;
    slug:string;
}

export default function PostCard({post}: Props) {
    return (
        <Link href={`/post?category=${post.category}&slug=${post.slug}`}>
            <li className="postCard_container">
                <div className="thumbnail_container">
                    <img className="thumbnail"></img>
                </div>
                <div className="postCard_abstract">
                    <h3 className="postCard_title">{post.title}</h3>
                    <h4 className="postCard_category">{transferCategoryName(post.category)}</h4>
                    <h5 className="postCard_posting_date">{post.date.toLocaleDateString('ko-KR')}</h5>
                </div>
            </li>
        </Link>
    )
}
