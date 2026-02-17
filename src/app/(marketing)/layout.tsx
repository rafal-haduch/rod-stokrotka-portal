import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { PreFooter } from '@/components/pre-footer';
import { Footer } from '@/components/footer';

export default function MarketingLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Navbar />
            <Hero />
            <main className="overflow-x-hidden px-4">{children}</main>
            <PreFooter />
            <Footer />
        </>
    );
}
