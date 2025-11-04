'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { cn } from '@/lib/utils/cn';
import { useInView } from '@/lib/hooks/useInView';

import ImageSeparator from '@/components/ImageSeparator';
import MainHeaderLineSeparator from '@/components/MainHeaderLineSeparator';
import LineSeparator from '@/components/LineSeparator';

import CommunityGardenPhotosPreview from './components/CommunityGardenPhotosPreview';
import MemoriesList from './components/MemoriesList';

export default function GalleryPage() {
    const { ref: ref1, inView: visible1 } = useInView<HTMLHeadingElement>(0.3);
    const { ref: ref2, inView: visible2 } = useInView<HTMLHeadingElement>(0.3);

    return (
        <article>
            <header>
                <h1>Galeria</h1>
                <MainHeaderLineSeparator />
            </header>

            <section>
                <h2 ref={ref1} className={cn('h2-animate', visible1 ? 'visible' : '')}>
                    Zdjęcia z naszego ogrodu
                </h2>
                <CommunityGardenPhotosPreview />
                <Link href="/gallery/community-garden-photos" className="button-icon mx-auto">
                    <span>Zobacz wszystkie</span>
                    <ArrowRight />
                </Link>
            </section>

            <LineSeparator />

            <section>
                <h2 ref={ref2} className={cn('h2-animate', visible2 ? 'visible' : '')}>
                    Wspomnienia z naszego ogrodu
                </h2>
                <MemoriesList />
            </section>

            <ImageSeparator />
        </article>
    );
}
