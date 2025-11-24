import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

import { getAllMemories, MemoryInList } from '@/utils/memories';

import NotFoundContent from '@/components/NotFoundContent';

export default function MemoriesList() {
    const memories = getAllMemories();

    if (memories.length === 0) return <NotFoundContent />;

    return (
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
            {memories.map((post, i) => (
                <div key={i}>
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
                    <p className="tracking-wide text-amber-50">Zobacz więcej</p>
                    <ArrowRight color="white" />
                </div>
            </div>
            <div className="bg-color-theme-100 group-hover:bg-color-theme-light p-4 text-center">
                <p className="text-color-theme-txt-medium text-lg">{memory.date}</p>
                <h3 className="text-color-theme-txt-medium text-xl font-semibold">
                    {memory.title}
                </h3>
            </div>
        </Link>
    );
}
