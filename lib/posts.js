import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';
import rehypeHighlight from 'rehype-highlight';
import { rehype } from 'rehype';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getPosts() {
  const files = fs.readdirSync(postsDirectory);
  return files.map((file) => {
    const fileID = file.replace(/\.md$/, '');
    const filePath = path.join(postsDirectory, file);
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    const { data } = matter(fileContent);

    return {
      id: fileID,
      date: data.date,
      title: data.title,
      description: data.description,
    };
  });
}

export function sortPosts(posts) {
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostIDs() {
  const files = fs.readdirSync(postsDirectory);
  return files.map((file) => ({
    params: {
      id: file.replace(/\.md$/, ''),
    },
  }));
}

export function getSortedPosts() {
  return sortPosts(getPosts());
}

export async function getPostData(id) {
  const filePath = path.join(postsDirectory, `${id}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  const processed = await unified()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeStringify)
    .process(content);
  const syntaxHighlighted = await rehype().use(rehypeHighlight, { detect: true }).process(processed);
  const processedHTML = syntaxHighlighted.toString();

  return {
    id,
    date: data.date,
    title: data.title,
    description: data.description,
    content: processedHTML,
  };
}
