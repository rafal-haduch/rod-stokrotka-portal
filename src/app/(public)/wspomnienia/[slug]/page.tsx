import { notFound } from 'next/navigation';

import { getMemoryBySlug } from '@/content/memories/memories';

import { formatDate } from '@/utils/format-date';

import PhotoGallery from '@/components/photo-gallery';
import MainHeaderLineSeparator from '@/components/main-header-line-separator';
import AnimateOnView from '@/components/animated-h2';
import ImageSeparator from '@/components/image-separator';

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
