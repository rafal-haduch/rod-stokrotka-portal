import type { ReactNode } from 'react';

import { Hero } from '@/components/hero';
import { ImageSeparator } from '@/components/image-separator';
import { PreFooter } from '@/components/pre-footer';

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
