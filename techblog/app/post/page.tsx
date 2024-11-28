import { getPost } from "@/utils/parsePost"
import { MDXRemote } from "next-mdx-remote/rsc";

type props = {
  searchParams : {category: string, slug:string}
}

export default async function Post({searchParams}:props) {
  const post = await getPost(searchParams.category,searchParams.slug);
  console.log(post)
  return (
    <div>
      <div>
        <h2>{post.title}</h2>
        <h4>{post.category}</h4>
        <h4>{post.date.toString()}</h4>
      </div>
      <div>
        <MDXRemote source={post.content}/>
      </div>
    </div>
  )
}