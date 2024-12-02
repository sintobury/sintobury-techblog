import './categoryList.css'
import { getCategoryListData, getCategoryList, getPostQuantity, transferCategoryName } from '@/utils/post'
import Link from "next/link"

export default async function CategotyList () {
    const categorylist = getCategoryList();
    const categoryData = await getCategoryListData();
    const allPostQuantity = await getPostQuantity();
    return (
        <ul className="categorylist">
            <Link href={'/blog'}>
                <li className='category_button'>{`All (${allPostQuantity})`}</li>
            </Link>
            {categorylist.map((category:string)=> (
                <Link href={`/blog/${category}`} key={category}>
                    <li className="category_button">{`${transferCategoryName(category)} (${categoryData[category]})`}</li>
                </Link>
            ))}
        </ul>
    )
}