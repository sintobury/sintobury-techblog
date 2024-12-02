import PostList from "@/components/post/postList";

export default async function CategoryPage({params}:{params:Promise<{category:string}>}) {
    const { category } = await params

    return (
        <div className="recentPostlist">
          <PostList category={category}/>
        </div>
    )

}