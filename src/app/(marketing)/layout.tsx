import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { PreFooter } from '@/components/pre-footer';
import { Footer } from '@/components/footer';
import { ImageSeparator } from '@/components/image-separator';

export default function MarketingLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Navbar />
            <Hero />
            <main className="overflow-x-hidden px-4 sm:px-6 lg:px-8">
                {children}
                <ImageSeparator />
            </main>
            <PreFooter />
            <Footer />
        </>
    );
}
