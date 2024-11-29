import fs from 'fs'
import path from 'path'
import { sync } from 'glob'
import matter from 'gray-matter'

type postMatter = {
    title:string;
    date:Date;
    description:string;
    slug:string;
}

const basepath = '/posts'
const postpath = path.join(process.cwd(),basepath)

export const parsePost = async (postPath:string) => {
    const mdx = fs.readFileSync(postPath, 'utf8');
    const { data, content } = matter(mdx);
    const category = await parsePostCategory(postPath)
    const frontMatter = data as postMatter
    //data 타입 지정해줘야 함 ->typescript error 유발
    return {content, category, ...frontMatter}
};

const parsePostCategory = async (path:string) => {
    const category = path.slice(path.indexOf(basepath)).split('/')[2];
    return category;
}

const getPostPath = (category?:string) => {
    const boundary = category || '**'
    const paths:string[] = sync(`${postpath}/${boundary}/**/*.mdx`)
    return paths;
} 

export const getPostList = async (category?:string) => {
    const paths = getPostPath(category)
    const posts = await Promise.all(paths.map((postpath)=>parsePost(postpath)))
    const sortedPosts = (posts).sort((a,b) => {
        if(a.date < b.date) {
            return 1; 
        } else {
            return -1;
        }
    })
    return sortedPosts
}

export const getPost = async (category:string,slug:string) => {
    const file = `${postpath}/${category}/${slug}.mdx`
    const post = parsePost(file);
    return post
}