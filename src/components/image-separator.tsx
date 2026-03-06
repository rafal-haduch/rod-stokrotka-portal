import Image from 'next/image';

// TODO: change name
export function ImageSeparator() {
    return (
        <div className="flex w-full justify-center py-10 sm:py-16" aria-hidden="true">
            <Image
                src="/assets/image-separator.png"
                alt=""
                width={450}
                height={80}
                className="h-auto object-cover"
                priority={false}
            />
        </div>
    );
}
