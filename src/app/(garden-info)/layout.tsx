import type { ReactNode } from 'react';

import { ImageSeparator } from '@/components/image-separator';

export default function GardenInfoLayout({ children }: { children: ReactNode }) {
    return (
        <>
            {children}
            <ImageSeparator />
        </>
    );
}
