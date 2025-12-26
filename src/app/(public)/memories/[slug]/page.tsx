import { notFound } from 'next/navigation';

import { getMemoryBySlug } from '@/utils/memories';

import { formatDate } from '@/utils/formatDate';

import PhotoGallery from '@/components/PhotoGallery';
import MainHeaderLineSeparator from '@/components/MainHeaderLineSeparator';
import AnimateOnView from '@/components/AnimatedH2';
import ImageSeparator from '@/components/ImageSeparator';

export default async function MemoryPage({ params }: { params: { slug: string } }) {
    const { slug } = await params;
    const post = await getMemoryBySlug(slug);
    if (!post) return notFound();

    return (
        <article className="prose mx-auto">
            <header>
                <h1>{post.title}</h1>
                <MainHeaderLineSeparator />
            </header>

            <section>
                <AnimateOnView className="h2-animate">
                    <h2>{formatDate(post.date)}</h2>
                </AnimateOnView>
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
                {post.photos.length > 0 && <PhotoGallery photos={post.photos} />}
            </section>

            <ImageSeparator />
        </article>
    );
}
