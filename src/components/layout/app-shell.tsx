import type { ReactNode } from 'react';

import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import AppUI from '@/components/layout/app-ui';

/**
 * Main application layout wrapper.
 *
 * Provides shared page structure including navigation,
 * main content area, footer and global UI elements
 *  supplied by the `AppUI` component.
 */
export default function AppShell({ children }: { children: ReactNode }) {
    return (
        <>
            <Navbar />
            <main className="mx-auto min-h-screen max-w-7xl">{children}</main>
            <Footer />
            <AppUI />
        </>
    );
}
