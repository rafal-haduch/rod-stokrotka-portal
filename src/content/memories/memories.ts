//TODO: change file name into index.ts and improve imports
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

import { PhotoWithoutTitle } from '@/types/photo';

export interface Memory {
    slug: string;
    title: string;
    date: string;
    cover: string;
    content: string;
    photos: PhotoWithoutTitle[];
}

export type MemoryInList = {
    slug: string;
    title: string;
    date: string;
    cover: string;
};

const memoriesDir = path.join(process.cwd(), 'src/content/memories');

// Gets a list of all posts (without Markdown to HTML conversion)
export function getAllMemories(): MemoryInList[] {
    const fileNames = fs.readdirSync(memoriesDir);

    const memories = fileNames
        .filter((fileName) => fileName.endsWith('.md'))
        .map((fileName) => {
            const slug = fileName.replace(/\.md$/, '');
            const fullPath = path.join(memoriesDir, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');
            const { data } = matter(fileContents);

            return {
                slug,
                title: data.title,
                date: data.date,
                cover: data.cover,
            } as MemoryInList;
        });

    // Sort by date descending
    return memories.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Gets a single posts (with Markdown to HTML conversion)
export async function getMemoryBySlug(slug: string): Promise<Memory | null> {
    const fullPath = path.join(memoriesDir, `${slug}.md`);
    if (!fs.existsSync(fullPath)) return null;

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const processedContent = await remark().use(html).process(content);
    const contentHtml = processedContent.toString();

    return {
        slug,
        title: data.title,
        date: data.date,
        cover: data.cover,
        content: contentHtml,
        photos: data.photos || [],
    } as Memory;
}
