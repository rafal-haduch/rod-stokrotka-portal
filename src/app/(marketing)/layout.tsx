import type { ReactNode } from 'react';

import { Hero } from '@/components/layout/hero';
import { ImageSeparator } from '@/components/layout/image-separator';
import { PreFooter } from '@/components/layout/pre-footer';

export default function MarketingLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <Hero />
            {children}
            <ImageSeparator />
            <PreFooter />
        </>
    );
}
