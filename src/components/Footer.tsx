import Link from 'next/link';

export default function Footer() {
    const startYear = 2025;
    const currentYear = new Date().getFullYear();
    const yearDisplay = currentYear > startYear ? `${startYear}–${currentYear}` : `${startYear}`;

    return (
        <footer className="w-full border-t-4 border-lime-400 bg-gradient-to-t from-lime-200 to-lime-300 text-green-700">
            <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-4 py-2 text-center text-lg lg:flex-row lg:py-8">
                <Link
                    href="/privacy-policy"
                    className="text-green-700 hover:text-green-900 hover:underline"
                >
                    Polityka prywatności
                </Link>

                <span>© {yearDisplay} Stowarzyszenie Ogrodowe „Stokrotka” w Sanoku</span>

                <span>Realizacja: Rafał Haduch</span>
            </div>
        </footer>
    );
}
