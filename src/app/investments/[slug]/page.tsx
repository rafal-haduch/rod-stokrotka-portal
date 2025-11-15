import { notFound } from 'next/navigation';

import { getInvestmentBySlug } from '@/utils/investments';

import PhotoGallery from '@/components/PhotoGallery';
import MainHeaderLineSeparator from '@/components/MainHeaderLineSeparator';
import AnimateOnView from '@/components/AnimatedH2';

export default async function InvestmentPage({ params }: { params: { slug: string } }) {
    const { slug } = await params;
    const post = await getInvestmentBySlug(slug);
    if (!post) return notFound();

    return (
        <article className="prose mx-auto my-8">
            <h1>{post.title}</h1>
            <MainHeaderLineSeparator />
            <section>
                <AnimateOnView className="h2-animate">
                    <h2>{post.date}</h2>
                </AnimateOnView>
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
                {post.photos.length > 0 && <PhotoGallery photos={post.photos} />}
            </section>
        </article>
    );
}
