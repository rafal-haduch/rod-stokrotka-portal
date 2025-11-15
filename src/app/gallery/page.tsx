import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import ImageSeparator from '@/components/ImageSeparator';
import MainHeaderLineSeparator from '@/components/MainHeaderLineSeparator';
import LineSeparator from '@/components/LineSeparator';

import CommunityGardenPhotosPreview from './components/CommunityGardenPhotosPreview';
import MemoriesList from './components/MemoriesList';
import AnimateOnView from '@/components/AnimatedH2';

export default function GalleryPage() {
    return (
        <article>
            <header>
                <h1>Galeria</h1>
                <MainHeaderLineSeparator />
            </header>

            <section>
                <AnimateOnView className="h2-animate">
                    <h2>Zdjęcia z naszego ogrodu</h2>
                </AnimateOnView>
                <CommunityGardenPhotosPreview />
                <Link href="/gallery/community-garden-photos" className="button-icon mx-auto">
                    <span>Zobacz wszystkie</span>
                    <ArrowRight />
                </Link>
            </section>

            <LineSeparator />

            <section>
                <AnimateOnView className="h2-animate">
                    <h2>Wspomnienia z naszego ogrodu</h2>
                </AnimateOnView>
                <MemoriesList />
            </section>

            <ImageSeparator />
        </article>
    );
}
