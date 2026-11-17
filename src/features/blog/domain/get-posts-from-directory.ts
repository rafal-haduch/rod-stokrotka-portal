import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';

import { PostListItem } from '@/features/blog/domain/post-types';

/**
 * Gets a list of all investment posts from markdown files.
 */
export function getPostsFromDirectory(pathToDirectoryPostFiles: string): PostListItem[] {
    const fileNames = fs.readdirSync(pathToDirectoryPostFiles);
    const posts = fileNames
        .filter((fileName) => fileName.endsWith('.md'))
        .map((fileName) => {
            const slug = fileName.replace(/\.md$/, '');
            const fullPath = path.join(pathToDirectoryPostFiles, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');
            const { data } = matter(fileContents);
            const { title, publicationDate, author, cover } = data;

            return {
                slug,
                title,
                publicationDate,
                author,
                cover,
            } as PostListItem;
        });

    return posts;
}
