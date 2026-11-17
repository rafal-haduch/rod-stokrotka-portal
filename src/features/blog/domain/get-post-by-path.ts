import fs from 'fs';
import html from 'remark-html';
import matter from 'gray-matter';
import { remark } from 'remark';

import { Post } from '@/features/blog/domain/blog-types';

/**
 * Reads a post from a Markdown file and converts its content to HTML.
 */
export async function getPostByPath(postFilePath: string): Promise<Post | null> {
    if (!fs.existsSync(postFilePath)) return null;

    const fileContents = fs.readFileSync(postFilePath, 'utf8');
    const { data, content } = matter(fileContents);
    const { slug, title, publicationDate, author, cover, photos } = data;

    const processedContent = await remark().use(html).process(content);
    const htmlContent = processedContent.toString();

    return {
        slug,
        title,
        publicationDate,
        author,
        cover,
        htmlContent,
        photos,
    } as Post;
}
