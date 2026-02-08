'use client';

import { Info } from 'lucide-react';
import { ReactNode, useState } from 'react';

interface Props {
    text: string;
    icon?: ReactNode;
    position?: 'top' | 'bottom' | 'left' | 'right';
}

//FIXME: 
export default function TooltipIcon({ text, icon = <Info size={16} />, position = 'left' }: Props) {
    const [visible, setVisible] = useState(false);

    const positionClasses = {
        top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
        bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
        left: 'right-full top-1/2 -translate-y-1/2 mr-2',
        right: 'left-full top-1/2 -translate-y-1/2 ml-2',
    };

    return (
        <span
            className="relative inline-flex h-6 w-6 items-center justify-center"
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
        >
            {icon}

            {visible && (
                <>
                    {/* MOBILE */}
                    <span className="fixed bottom-6 left-1/2 z-50 w-[90vw] -translate-x-1/2 rounded-md bg-white px-3 py-2 text-xs break-words whitespace-pre-line text-black shadow-lg sm:hidden">
                        {text}
                    </span>

                    {/* DESKTOP */}
                    <span
                        className={`absolute z-50 hidden w-max max-w-sm rounded-md bg-white px-3 py-2 text-xs break-words whitespace-pre-line text-black shadow-lg sm:block ${positionClasses[position]} `}
                    >
                        {text}
                    </span>
                </>
            )}
        </span>
    );
}
