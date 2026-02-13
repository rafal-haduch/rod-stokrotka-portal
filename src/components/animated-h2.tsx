'use client';

import { ReactNode } from 'react';

import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/utils/cn';

interface AnimateOnViewProps {
    children: ReactNode;
    className?: string; // initial animation state (before element enters viewport)
    visibleClassName?: string; // active animation class applied when element enters viewport
}

export function AnimateOnView({
    children,
    className = '',
    visibleClassName = 'in-view',
}: AnimateOnViewProps) {
    const { ref, inView } = useInView<HTMLDivElement>();

    return (
        <div ref={ref} className={cn(className, inView && visibleClassName)}>
            {children}
        </div>
    );
}
