import { cn } from '@/lib/utils/cn';

export default function LineSeparator({ my = 'my-20' }: { my?: string }) {
    return (
        <hr
            className={cn(
                my,
                `border-color-theme-hr mx-auto w-4/5 max-w-lg border-t-3 md:max-w-xl`
            )}
            aria-hidden="true"
        />
    );
}
