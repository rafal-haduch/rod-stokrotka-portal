import Image from 'next/image';

export default function ImageSeparator() {
    return (
        <div className="flex w-full justify-center py-20" aria-hidden="true">
            <Image
                src="/images/ui/image-separator.png"
                alt=""
                width={450}
                height={80}
                priority={false}
                className="h-auto object-cover"
            />
        </div>
    );
}
