import { cn } from '@/lib/cn';

export default function SectionLineSeparator({ my = 'my-20' }: { my?: string }) {
    return (
        <hr className={cn(my, `mx-auto w-4/5 max-w-lg border-t-3 border-green-500 md:max-w-xl`)} />
    );
}
