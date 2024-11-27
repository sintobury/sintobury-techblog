import { getPostList } from "@/utils/parsePost";
import PostCard from "./postCard";

export default async function PostList () {

  const postList = await getPostList();
  console.log(postList[0])

  return (
    <section>
      <ul>
        {postList.map((post)=> (
          <PostCard key={post.title} post={post}/>
        ))}
      </ul>
    </section>
  )
}