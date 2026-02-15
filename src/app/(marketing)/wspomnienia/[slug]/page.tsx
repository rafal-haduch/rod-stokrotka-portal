import { notFound } from 'next/navigation';

import { getMemoryBySlug } from '@/content/memories/memories';

import { formatDate } from '@/utils/format-date';

import { MainHeadingLineSeparator } from '@/components/main-heading-line-separator';
import { PhotoGallery } from '@/components/photo-gallery';
import { AnimateOnView } from '@/components/animated-h2';

export default async function MemoryPage({ params }: { params: { slug: string } }) {
    const { slug } = await params;
    const post = await getMemoryBySlug(slug);
    if (!post) return notFound();

    return (
        <article className="prose mx-auto">
            <h1>{post.title}</h1>
            <MainHeadingLineSeparator />

            <AnimateOnView className="h2-animate">
                <p className="mb-4 text-center">
                    <time
                        className="text-2xl font-semibold"
                        dateTime={new Date(post.date).toISOString()}
                    >
                        {formatDate(post.date)}
                    </time>
                </p>
            </AnimateOnView>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
            {post.photos.length > 0 && <PhotoGallery photos={post.photos} />}
        </article>
    );
}
