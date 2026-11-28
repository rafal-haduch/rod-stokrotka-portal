import { Flower } from 'lucide-react';

import { cn } from '@/shared/utils/cn';

interface DecorativeLineProps {
    variant: 'forHeading' | 'forContent';
}

export default function DecorativeLine({ variant }: DecorativeLineProps) {
    if (variant === 'forHeading')
        return (
            <div
                aria-hidden="true"
                className="border-decorative-line-color mx-auto mt-4 mb-12 w-2/3 max-w-sm border-t-4"
            />
        );

    return (
        <div
            aria-hidden="true"
            className={cn(
                'mx-auto my-20 flex h-auto w-4/5 max-w-lg items-center justify-between gap-2 sm:gap-4 md:max-w-xl md:gap-6'
            )}
        >
            <div className="border-decorative-line-color w-full border-t-3" />
            <Flower className="text-decorative-line-color" width={64} height={64} />
            <div className="border-decorative-line-color w-full border-t-3" />
        </div>
    );
}
