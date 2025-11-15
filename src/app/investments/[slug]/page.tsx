import { notFound } from 'next/navigation';
import Image from 'next/image';

import { getInvestmentBySlug } from '@/utils/investments';

import PhotoGallery from '@/components/PhotoGallery';
import MainHeaderLineSeparator from '@/components/MainHeaderLineSeparator';

export default async function InvestmentPage({ params }: { params: { slug: string } }) {
    const { slug } = await params;
    const post = await getInvestmentBySlug(slug);
    if (!post) return notFound();

    return (
        <article className="prose mx-auto my-8">
            {post.cover && (
                <Image
                    src={post.cover}
                    alt={post.title}
                    width="64"
                    height={'64'}
                    className="mb-4 rounded"
                />
            )}
            <h1>{post.title}</h1>
            <MainHeaderLineSeparator />
            <section>
                <h2>{post.date}</h2>
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
                {post.photos.length > 0 && <PhotoGallery photos={post.photos} />}
            </section>
        </article>
    );
}
