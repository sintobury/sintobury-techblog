import './post.css'
import { getPost } from "@/utils/parsePost"
import { MDXRemote } from "next-mdx-remote/rsc";

type props = {
  searchParams : {category: string, slug:string}
}

export default async function Post({searchParams}:props) {
  const post = await getPost(searchParams.category,searchParams.slug);
  console.log(post)
  return (
    <div className="post_container">
      <div className="post_head">
        <h2>{post.title}</h2>
        <h3>{post.category}</h3>
        <h4>{post.date.toLocaleDateString('ko-KR')}</h4>
      </div>
      <div className="post_body">
        <MDXRemote source={post.content}/>
      </div>
    </div>
  )
}