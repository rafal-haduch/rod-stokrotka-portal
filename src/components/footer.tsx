'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import { cn } from '@/shared/utils/cn';
import { ROUTES } from '@/shared/config/routes';

import { ThemeSwitcher } from '@/features/theme/ui/theme-switcher';

export function Footer() {
    const startYear = 2025;
    const [yearDisplay, setYearDisplay] = useState(`${startYear}`);

    useEffect(() => {
        const currentYear = new Date().getFullYear();
        setYearDisplay(currentYear > startYear ? `${startYear}–${currentYear}` : `${startYear}`);
    }, []);

    return (
        <footer className={cn('px-4 py-8', 'text-lg', 'footer')}>
            <div className="gap-y-8 contain-layout">
                {/* First Row */}
                <div
                    className={cn(
                        'mx-auto mb-4 flex max-w-5xl flex-col items-center justify-between md:flex-row',
                        'gap-2 px-4'
                    )}
                >
                    {/* Privacy Policy */}
                    <Link
                        href={ROUTES.PRIVACY_POLICY.path}
                        className={cn(
                            'text-theme-txt hover:text-theme-txt-h hover:underline',
                            'order-2 md:order-1'
                        )}
                    >
                        Polityka prywatności
                    </Link>
                    {/* Author */}
                    <p className="order-3 md:order-2">Realizacja: Rafał Haduch</p>
                    {/* Theme */}
                    <div
                        className={cn('flex flex-col', 'items-center gap-2', 'order-1 md:order-3')}
                    >
                        <ThemeSwitcher />
                    </div>
                </div>

                {/* Second Row */}
                <div>
                    <p className="text-center text-lg">
                        © {yearDisplay} Stowarzyszenie Ogrodowe „Stokrotka” w Sanoku
                    </p>
                </div>
            </div>
        </footer>
    );
}
