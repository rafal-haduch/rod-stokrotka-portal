'use client';

import { ReactNode } from 'react';

import { useInView } from '@/hooks/useInView';
import { cn } from '@/utils/cn';

interface AnimatedHeadingProps {
    children: ReactNode;
    className?: string;
}

export default function AnimatedH2({ children, className = '' }: AnimatedHeadingProps) {
    const { ref, inView } = useInView<HTMLHeadingElement>();

    return (
        <h2 ref={ref} className={cn(className, `h2-animate`, inView ? 'visible' : '')}>
            {children}
        </h2>
    );
}
