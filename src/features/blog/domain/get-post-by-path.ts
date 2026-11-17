import fs from 'fs';
import html from 'remark-html';
import matter from 'gray-matter';
import { remark } from 'remark';

import { Post } from '@/features/blog/domain/post-types';

/**
 * Gets a single investment post (with conversion from Markdown to HTML!)
 */
export async function getPostByPath(path: string): Promise<Post | null> {
    if (!fs.existsSync(path)) return null;

    const fileContents = fs.readFileSync(path, 'utf8');
    const { data, content } = matter(fileContents);

    const { slug, title, publicationDate, author, cover, photos } = data;

    // Conversion to HTML
    const processedContent = await remark().use(html).process(content);
    const contentHtml = processedContent.toString();

    return {
        slug,
        title,
        publicationDate,
        author,
        cover,
        content: contentHtml,
        photos,
    } as Post;
}
