import { notFound } from 'next/navigation';

import { SlugPagesProps } from '@/types/SlugePagesProps';
import { memoriesDataById } from '@/data/memories';

import MemoryPageWrapper from './MemoryPageWrapper';

export default async function MemoryPage({ params }: SlugPagesProps) {
    const { id } = await params;
    const memory = memoriesDataById[id];

    if (!memory) notFound();

    return <MemoryPageWrapper memory={memory} />;
}
