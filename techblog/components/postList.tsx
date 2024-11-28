import { getPostList } from "@/utils/parsePost";
import PostCard from "./postCard";

export default async function PostList () {

  const postList = await getPostList();
  console.log(postList)

  return (
    <section>
      <ul>
        {postList.map((post)=> (
          <PostCard key={post.slug} post={post}/>
        ))}
      </ul>
    </section>
  )
}