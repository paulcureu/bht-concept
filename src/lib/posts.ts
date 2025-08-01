import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

export type Post = {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  author: string;
  tags: string[];
};

export type PostWithContent = Post & {
  contentHtml: string;
};

async function readPost(fileName: string): Promise<Post> {
  const id = fileName.replace(/\.md$/, '');
  const fullPath = path.join(postsDirectory, fileName);
  const fileContents = await fs.readFile(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  return {
    id,
    ...(matterResult.data as { title: string; date: string; excerpt: string; image: string; author: string; tags: string[] }),
  };
}

export async function getSortedPostsData(): Promise<Post[]> {
  const fileNames = await fs.readdir(postsDirectory);
  const allPostsData = await Promise.all(fileNames.map(readPost));

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostData(id: string): Promise<PostWithContent> {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = await fs.readFile(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  const processedContent = await remark().use(html).process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...(matterResult.data as { title: string; date: string; excerpt: string; image: string; author: string; tags: string[] }),
  };
}

export async function getAllPostIds() {
  const fileNames = await fs.readdir(postsDirectory);
  return fileNames.map((fileName) => ({
    params: { id: fileName.replace(/\.md$/, '') },
  }));
}

export async function getAllTags() {
  const allPosts = await getSortedPostsData();
  const allTags = allPosts.flatMap(post => post.tags);
  return [...new Set(allTags)];
}

export async function getPostsByTag(tag: string) {
  const allPosts = await getSortedPostsData();
  return allPosts.filter(post => post.tags.includes(tag));
}
