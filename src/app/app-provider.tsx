'use client';

import type { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';

import { ThemeProvider } from '@/features/theme/ui/theme-provider';

/**
 * Wraps the app with all providers.
 */
export default function AppProvider({ children }: { children: ReactNode }) {
    return (
        <SessionProvider>
            <ThemeProvider>{children}</ThemeProvider>
        </SessionProvider>
    );
}
