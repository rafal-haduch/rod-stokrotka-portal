import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { PhotoWithoutTitle } from '@/types/PhotoWithoutTitle';

const investmentsDir = path.join(process.cwd(), 'src/content/investments');

export interface Investment {
    slug: string;
    title: string;
    date: string;
    cover: string;
    photos: PhotoWithoutTitle[];
    content: string;
}

// Pobiera listę wszystkich wpisów (bez konwersji Markdown do HTML)
export function getAllInvestments() {
    const fileNames = fs.readdirSync(investmentsDir);
    const investments = fileNames.map((fileName) => {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(investmentsDir, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data } = matter(fileContents);

        return {
            slug,
            title: data.title,
            date: data.date,
            cover: data.cover,
        };
    });

    // Sortowanie po dacie malejąco
    return investments.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Pobiera pojedynczy wpis i konwertuje treść Markdown do HTML
export async function getInvestmentBySlug(slug: string): Promise<Investment | null> {
    const fullPath = path.join(investmentsDir, `${slug}.md`);
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
        photos: data.photos || [], // tutaj lista zdjęć
        content: contentHtml,
    };
}
