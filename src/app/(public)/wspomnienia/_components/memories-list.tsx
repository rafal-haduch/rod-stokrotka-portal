import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

import { ROUTES } from '@/shared/config/routes';

import { getAllMemories, MemoryInList } from '@/content/memories/memories';

import { formatDate } from '@/shared/utils/format-date';
import { cn } from '@/shared/utils/cn';

import { NotFoundContent } from '@/components/not-found-content';

export default function MemoriesList() {
    const memories = getAllMemories();

    if (memories.length === 0) return <NotFoundContent />;

    return (
        <div
            className={cn(
                memories.length === 1
                    ? 'grid grid-cols-1 justify-items-center'
                    : 'grid grid-cols-1 justify-items-center gap-14 lg:grid-cols-2'
            )}
        >
            {memories.map((post, i) => (
                <article key={i} className="w-full max-w-xl">
                    <MemoryCard memory={post} />
                </article>
            ))}
        </div>
    );
}

function MemoryCard({ memory }: { memory: MemoryInList }) {
    return (
        <Link
            href={`${ROUTES.MEMORIES.path}/${memory.slug}`}
            className="group post-card surface mx-auto block max-w-xl overflow-hidden"
        >
            <div className="relative h-64">
                <Image src={memory.cover} alt={memory.title} fill className="object-cover" />
                <div className="absolute inset-0 hidden items-center justify-center bg-black/50 transition-all duration-300 group-hover:flex">
                    <p className="tracking-wide text-white">Zobacz więcej</p>
                    <ArrowRight color="white" />
                </div>
            </div>
            <div className="p-4 text-center">
                <p className="text-lg">{formatDate(memory.date)}</p>
                <h3 className="text-theme-on-surface text-xl font-semibold group-hover:underline">
                    {memory.title}
                </h3>
            </div>
        </Link>
    );
}
