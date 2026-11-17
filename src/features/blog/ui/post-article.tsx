import { formatDate } from '@/shared/utils/format-date';

import { MainHeadingLineSeparator } from '@/components/main-heading-line-separator';
import { PhotoGallery } from '@/components/photo-gallery';

import { Post } from '@/features/blog/domain/post-types';

interface PostArticleProps {
    post: Post;
}

export default function PostArticle({ post }: PostArticleProps) {
    return (
        <article className="mx-auto px-4 py-8">
            <h1>{post.title}</h1>
            <MainHeadingLineSeparator />
            <div className="mb-4 flex justify-between gap-8 text-xl font-semibold sm:mb-8">
                <p>
                    <time dateTime={new Date(post.publicationDate).toISOString()}>
                        Data publikacji: {formatDate(post.publicationDate)}
                    </time>
                </p>
                <p className="text-right sm:text-left">Autor: {post.author}</p>
            </div>
            <div
                dangerouslySetInnerHTML={{ __html: post.content }}
                className="mx-auto max-w-2xl text-justify"
            ></div>
            {post.photos ? post.photos.length > 0 && <PhotoGallery photos={post.photos} /> : ''}
        </article>
    );
}
