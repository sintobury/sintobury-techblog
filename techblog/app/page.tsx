import PostList from "@/components/postList";


export default async function Home() {

  return (
    <>
      <div className="recentPostlist">
        <PostList />
      </div>
    </>
  )
}
