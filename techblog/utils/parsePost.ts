import fs from 'fs'
import path from 'path'
import { sync } from 'glob'
import matter from 'gray-matter'

const basepath = '/posts'
const postpath = path.join(process.cwd(),basepath)

export const parsePost = async (postPath:string) => {
    const mdx = fs.readFileSync(postPath, 'utf8');
    const { data, content } = matter(mdx);
    const category = await parsePostCategory(postPath)
    return { ...data, content, category}
};

export const parsePostCategory = async (path:string) => {
    const category = path.slice(path.indexOf(basepath)).split('/')[2];
    return category;
}

export const getPostPath = (category?:string) => {
    const boundary = category || '*'
    const paths:string[] = sync(`${postpath}/${boundary}/**/*.mdx`)
    return paths;
} 

export const getPostList = async (category?:string) => {
    const paths = getPostPath(category)
    const posts = Promise.all(paths.map((postpath)=>parsePost(postpath)))
    return posts
}

