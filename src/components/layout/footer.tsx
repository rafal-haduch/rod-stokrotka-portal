'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import { cn } from '@/shared/utils/cn';
import { ROUTES } from '@/shared/config/routes';

import { SeasonalThemesToggle } from '@/features/theme/ui/seasonal-themes-toggle';
import { SeasonalThemeSelector } from '@/features/theme/ui/seasonal-theme-selector';

export default function Footer() {
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
                    <div className="order-1 flex flex-col items-center gap-2 md:order-3">
                        <SeasonalThemesToggle />
                        <SeasonalThemeSelector />
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
