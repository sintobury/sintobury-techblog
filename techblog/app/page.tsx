import { getPostList } from "@/utils/parsePost"


export default async function Home() {
  const postList = await getPostList();
  console.log(postList)

  return (
    <>
      <div className="recentPostlist">
      </div>
    </>
  )
}
