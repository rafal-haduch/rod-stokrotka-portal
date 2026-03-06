import { notFound } from 'next/navigation';

import { getInvestmentBySlug } from '@/content/investments/investments';

import { formatDate } from '@/shared/utils/format-date';

import { PhotoGallery } from '@/components/photo-gallery';
import { MainHeadingLineSeparator } from '@/components/main-heading-line-separator';
import { AnimateOnView } from '@/components/animated-h2';
import { ImageSeparator } from '@/components/image-separator';

type Props = {
    params: Promise<{ slug: string }>;
};

export default async function InvestmentPage({ params }: Props) {
    const { slug } = await params;
    const post = await getInvestmentBySlug(slug);
    if (!post) return notFound();

    return (
        <article className="prose mx-auto">
            <header>
                <h1>{post.title}</h1>
                <MainHeadingLineSeparator />
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
