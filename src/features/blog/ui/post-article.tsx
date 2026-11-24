import { formatDate } from '@/shared/utils/format-date';

import { PhotoGallery } from '@/components/photo-gallery';

import { Post } from '@/features/blog/domain/blog-types';

interface PostArticleProps {
    post: Post;
}

export default function PostArticle({ post }: PostArticleProps) {
    return (
        <article className="mx-auto px-4 py-8">
            <h1>{post.title}</h1>
            <LineSeparator variant="forHeading" />
            <div className="mx-auto mb-4 flex max-w-2xl justify-between gap-8 text-xl font-semibold sm:mb-8">
                <p>
                    <time dateTime={new Date(post.publicationDate).toISOString()}>
                        Data: {formatDate(post.publicationDate)}
                    </time>
                </p>
                <p className="text-right sm:text-left">Autor: {post.author}</p>
            </div>
            <div
                dangerouslySetInnerHTML={{ __html: post.htmlContent }}
                className="mx-auto flex max-w-2xl flex-col gap-8 text-justify md:gap-10"
            ></div>
            {post.photos ? post.photos.length > 0 && <PhotoGallery photos={post.photos} /> : ''}
        </article>
    );
}
