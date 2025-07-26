import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export type PostMeta = {
  slug: string;
  title: string;
  date: string; 
  author: string;
  imageUrl: string;
  tags: string[];
};

export type Post = PostMeta & { content: string };

const postsDirectory = path.join(process.cwd(), 'content', 'posts');

export function getAllPosts(): Post[] {
  const filenames = fs.readdirSync(postsDirectory);

  return filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    const slug = filename.replace(/\.md$/, '');

    return {
      slug,
      title: data.title,
      date: data.date,
      author: data.author,
      imageUrl: data.imageUrl,
      content,
    } as Post;
  });
}
