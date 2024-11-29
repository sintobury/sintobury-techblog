import './postList.css'
import { getPostList } from "@/utils/post";
import PostCard from "./postCard";
import CategotyList from './categoryList';

interface postListProps {
  category?:string;
}

export default async function PostList ({category}:postListProps) {
  const postList = await getPostList(category);

  return (
    <section>
      <CategotyList/>
      <ul className="postlist">
        {postList.map((post)=> (
          <PostCard key={post.slug} post={post}/>
        ))}
      </ul>
    </section>
  )
}