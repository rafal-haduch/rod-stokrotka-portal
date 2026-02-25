import { cn } from '@/utils/cn';

export function LineSeparator({ my = 'my-20' }: { my?: string }) {
    return (
        <div
            aria-hidden="true"
            className={cn(
                my,
                'mx-auto w-4/5 max-w-lg md:max-w-xl',
                'border-theme-divider border-t-3'
            )}
        />
    );
}
