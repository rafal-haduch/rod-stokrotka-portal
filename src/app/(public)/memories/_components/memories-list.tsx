import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

import { getAllMemories, MemoryInList } from '@/content/memories/memories';
import { formatDate } from '@/utils/format-date';

import NotFoundContent from '@/components/not-found-content';
import { cn } from '@/utils/cn';

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
                <div key={i} className="w-full max-w-xl">
                    <MemoryCard memory={post} />
                </div>
            ))}
        </div>
    );
}

function MemoryCard({ memory }: { memory: MemoryInList }) {
    return (
        <Link
            href={`/memories/${memory.slug}`}
            className="group mx-auto block max-w-xl overflow-hidden rounded-xl shadow transition hover:shadow-lg"
        >
            <div className="relative h-64">
                <Image
                    src={memory.cover}
                    alt={memory.title}
                    fill
                    className="object-cover transition group-hover:scale-105"
                />
                <div className="absolute inset-0 hidden items-center justify-center bg-black/50 transition-all duration-300 group-hover:flex group-hover:scale-105">
                    <p className="tracking-wide text-white">Zobacz więcej</p>
                    <ArrowRight color="white" />
                </div>
            </div>
            <div className="bg-theme-bg-secondary group-hover:bg-theme-200 p-4 text-center">
                <p className="text-theme-txt text-lg">{formatDate(memory.date)}</p>
                <h3 className="text-theme-txt text-xl font-semibold">{memory.title}</h3>
            </div>
        </Link>
    );
}
