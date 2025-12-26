import { cn } from '@/utils/cn';

export default function LineSeparator({ my = 'my-20' }: { my?: string }) {
    return (
        <hr
            className={cn(my, 'mx-auto w-4/5 max-w-lg md:max-w-xl', 'border-theme-hr border-t-3')}
            aria-hidden="true"
        />
    );
}
