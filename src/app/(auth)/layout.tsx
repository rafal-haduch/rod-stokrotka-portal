import { requireSession } from '@/shared/auth/guards';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export default async function LoggedLayout({ children }: { children: React.ReactNode }) {
    await requireSession();

    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}
