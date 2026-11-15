import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

import { Photo } from '@/shared/models/photo';

const investmentsDir = path.join(process.cwd(), 'src/content/investments');

export interface InvestmentInList {
    slug: string;
    title: string;
    date: string;
    cover: string;
}

/**
 * Gets a list of all investment posts (without conversion from Markdown to HTML!)
 */
export function getAllInvestments(): InvestmentInList[] {
    const fileNames = fs.readdirSync(investmentsDir);
    const investments = fileNames
        .filter((fileName) => fileName.endsWith('.md'))
        .map((fileName) => {
            const slug = fileName.replace(/\.md$/, '');
            const fullPath = path.join(investmentsDir, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');
            const { data } = matter(fileContents);

            return {
                slug,
                title: data.title,
                date: data.date,
                cover: data.cover,
            } as InvestmentInList;
        });

    // Sort by date descending
    return investments.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export interface Investment {
    slug: string;
    title: string;
    date: string;
    cover: string;
    content: string;
    photos: Photo[];
}

/**
 * Gets a single investment post (with conversion from Markdown to HTML!)
 */
export async function getInvestmentBySlug(slug: string): Promise<Investment | null> {
    const fullPath = path.join(investmentsDir, `${slug}.md`);
    if (!fs.existsSync(fullPath)) return null;

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    // Conversion to HTML
    const processedContent = await remark().use(html).process(content);
    const contentHtml = processedContent.toString();

    return {
        slug,
        title: data.title,
        date: data.date,
        cover: data.cover,
        content: contentHtml,
        photos: data.photos || [],
    } as Investment;
}
