import './post.css'
import { getPost, transferCategoryName } from "@/utils/post"
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
        <h2 className='post_title'>{post.title}</h2>
        <h3 className='post_category'>{transferCategoryName(post.category)}</h3>
        <h4 className='post_posting_date'>{post.date.toLocaleDateString('ko-KR')}</h4>
      </div>
      <div className="post_body">
        <MDXRemote source={post.content}/>
      </div>
    </div>
  )
}