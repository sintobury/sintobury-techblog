
type Props = {
    post:post
}

interface post {
    category:string;
    content:string;
    title:string;
    date:Date;
    description:string;
}

export default function PostCard({post}: Props) {
    return (
        <li>
            <div>
                <img></img>
            </div>
            <div>
                <h4>{post.category}</h4>
                <h3>{post.title}</h3>
                <h5>{post.date.toString()}</h5>
            </div>
        </li>
    )
}
