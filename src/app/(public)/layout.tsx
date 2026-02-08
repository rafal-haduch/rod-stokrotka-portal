import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import PreFooter from '@/components/pre-footer';
import Hero from '@/components/hero';

export default function PublicLayout({
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
