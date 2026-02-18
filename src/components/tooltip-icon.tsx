'use client';

import { cn } from '@/utils/cn';
import { Info } from 'lucide-react';
import { ReactNode, useState } from 'react';

interface Props {
    helperText: string;
    example?: string;
    icon?: ReactNode;
    position?: 'top' | 'bottom' | 'left' | 'right';
}

export function TooltipIcon({
    helperText: text,
    example,
    icon = <Info />,
    position = 'left',
}: Props) {
    const [visible, setVisible] = useState(false);

    const positionClasses = {
        top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
        bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
        left: 'right-full top-1/2 -translate-y-1/2 mr-2',
        right: 'left-full top-1/2 -translate-y-1/2 ml-2',
    };

    return (
        <div
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
            className="relative z-50 items-center justify-center"
        >
            {icon}
            {visible && (
                <div
                    className={cn(
                        positionClasses[position],
                        'absolute z-1 flex flex-col gap-2 rounded-md bg-white p-4 shadow-lg sm:max-w-sm sm:min-w-xs'
                    )}
                >
                    <p className="wrap-break-word whitespace-pre-line text-black">{text}</p>
                    {example && (
                        <div className="flex flex-col">
                            <mark className="w-fit">Przykład:</mark>
                            <i className="wrap-break-word whitespace-pre-line">{example}</i>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
