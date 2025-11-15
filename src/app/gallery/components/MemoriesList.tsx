'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

import { MemoryInList } from '@/types/Memory';

import NotFoundContent from '@/components/NotFoundContent';

export default function MemoriesList() {
    return <NotFoundContent />;
}

// TODO: poprawić typ
function MemoryCard({ memory }: { memory: MemoryInList }) {
    return (
        <Link
            href={`/gallery/memory/${memory.id}`}
            className="group block overflow-hidden rounded-xl shadow transition hover:shadow-lg"
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
            <div className="bg-lime-100 p-4 text-center group-hover:bg-lime-200">
                <p className="text-lg text-lime-600">{memory.date}</p>
                <h3 className="text-xl font-semibold text-lime-500">{memory.title}</h3>
            </div>
        </Link>
    );
}
