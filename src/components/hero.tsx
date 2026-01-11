import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
    return (
        <section aria-label="Baner z logo ogrodu" className="mx-auto max-w-7xl bg-gray-50">
            <Link href="/" title="Powrót na stronę główną">
                <Image
                    src="/assets/hero.jpg"
                    alt="Baner ogrodu ROD Stokrotka w Sanoku."
                    width={1920}
                    height={600}
                    priority
                    className="h-auto w-full object-cover"
                />
            </Link>
        </section>
    );
}
