import Link from 'next/link';

export default function Hero() {
    return (
        <section className=" bg-gray-50 max-w-7xl mx-auto">
            <Link href="/">
                <img src="/hero.jpg" alt="Grafika sekcji hero." />
            </Link>
        </section>
    );
}
