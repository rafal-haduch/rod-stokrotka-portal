import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export default function PublicLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Navbar />
            <main className="overflow-x-hidden px-4 pb-24">{children}</main>
            <Footer />
        </>
    );
}
