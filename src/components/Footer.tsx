'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

import { cn } from '@/lib/utils/cn';

//TODO: dodac tytuły polskie
const themes = ['spring', 'summer', 'autumn', 'winter'] as const;

export default function Footer() {
    const startYear = 2025;
    const currentYear = new Date().getFullYear();
    const yearDisplay = currentYear > startYear ? `${startYear}–${currentYear}` : `${startYear}`;

    const [activeTheme, setActiveTheme] = useState<string>('autumn');

    useEffect(() => {
        const html = document.documentElement;
        html.classList.remove(...themes.map((t) => `theme-${t}`));
        html.classList.add(`theme-${activeTheme}`);
    }, [activeTheme]);

    return (
        <footer
            className={cn(
                'from-color-theme-light to-color-theme-medium border-color-theme-dark text-color-theme-txt-dark',
                'w-full border-t-4 bg-gradient-to-t'
            )}
        >
            {/* Checklista motywów */}
            <div className="flex flex-col items-center gap-2">
                Motyw:
                <div className="flex flex-row items-center gap-4">
                    {themes.map((theme) => (
                        <label
                            key={theme}
                            className="flex cursor-pointer flex-col items-center select-none"
                        >
                            <input
                                type="checkbox"
                                checked={activeTheme === theme}
                                onChange={() => setActiveTheme(theme)}
                                className={cn(
                                    'hover:cursor-pointer',
                                    'border-color-theme-dark h-5 w-5 appearance-none rounded-sm border-3',
                                    'checked:border-color-theme-dark checked:bg-white',
                                    'transition-colors'
                                )}
                            />
                            <span className="capitalize">{theme}</span>
                        </label>
                    ))}
                </div>
            </div>

            <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-4 py-2 text-center text-lg lg:flex-row lg:py-8">
                <Link
                    href="/privacy-policy"
                    className={cn(
                        'text-color-theme-txt-dark hover:text-color-theme-txt-extra-dark',
                        'hover:underline'
                    )}
                >
                    Polityka prywatności
                </Link>

                <span>© {yearDisplay} Stowarzyszenie Ogrodowe „Stokrotka” w Sanoku</span>

                <span>Realizacja: Rafał Haduch</span>
            </div>
        </footer>
    );
}
