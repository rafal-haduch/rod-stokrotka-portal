import type { ReactNode } from 'react';

import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import AppUI from '@/components/layout/app-ui';

export default function AppShell({ children }: { children: ReactNode }) {
    return (
        <>
            <Navbar />
            <main className="overflow-x-hidden px-4 sm:px-6 lg:px-8">{children}</main>
            <Footer />
            <AppUI />
        </>
    );
}
