import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

// Define the type for a post
export type PostData = {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  author: string;
  tags: string[];
  contentHtml?: string;
};

export function getSortedPostsData(): Omit<PostData, 'contentHtml'>[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      id,
      ...(matterResult.data as { title: string; date: string; excerpt: string; image: string; author: string; tags: string[] }),
    };
  });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostData(id: string): Promise<PostData> {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  
  if (!fs.existsSync(fullPath)) {
    throw new Error(`Post file not found for id: ${id} at path: ${fullPath}`);
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  const processedContent = await remark().use(html).process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...(matterResult.data as { title: string; date: string; excerpt: string; image: string; author: string; tags: string[] }),
  };
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => ({
    params: { id: fileName.replace(/\.md$/, '') },
  }));
}

export function getAllTags() {
  const allPosts = getSortedPostsData();
  const allTags = allPosts.flatMap(post => post.tags);
  return [...new Set(allTags)]; // Return unique tags
}

export function getPostsByTag(tag: string) {
  const allPosts = getSortedPostsData();
  return allPosts.filter(post => post.tags.includes(tag));
}