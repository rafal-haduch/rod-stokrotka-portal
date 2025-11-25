'use client';

import Link from 'next/link';
import { Power, PowerOff } from 'lucide-react';

import { cn } from '@/utils/cn';
import { Theme } from '@/utils/setTheme';
import { useTheme } from './ThemeProvider';
import { useEffect, useState } from 'react';

const themeOptions: Theme[] = [
    { id: 'spring', label: 'Wiosna' },
    { id: 'summer', label: 'Lato' },
    { id: 'autumn', label: 'Jesień' },
    { id: 'winter', label: 'Zima' },
] as const;

export default function Footer() {
    const { activeTheme, setActiveTheme, seasonalThemesEnabled, toggleSeasonalThemes } = useTheme();

    const startYear = 2025;
    const [yearDisplay, setYearDisplay] = useState(`${startYear}`);

    useEffect(() => {
        const currentYear = new Date().getFullYear();
        setYearDisplay(currentYear > startYear ? `${startYear}–${currentYear}` : `${startYear}`);
    }, []);

    const showSeasonalTheme = process.env.NEXT_PUBLIC_SHOW_SEASONAL_THEME === 'true';

    return (
        <footer
            className={cn(
                'from-color-theme-light to-color-theme-medium border-color-theme-dark text-color-theme-txt-dark',
                'w-full gap-y-8 border-t-4 bg-gradient-to-t text-lg'
            )}
        >
            {/* First Row */}
            <div className="mx-auto mb-4 flex max-w-5xl flex-col items-center justify-between gap-2 px-4 text-center lg:flex-row">
                {/* Privacy Policy */}
                <Link
                    href="/privacy-policy"
                    className={cn(
                        'text-color-theme-txt-dark hover:text-color-theme-txt-extra-dark',
                        'order-2 hover:underline lg:order-1'
                    )}
                >
                    Polityka prywatności
                </Link>

                {/* Author */}
                <span className="order-3 lg:order-2">Realizacja: Rafał Haduch</span>

                {/* Themes */}
                <div className="order-1 flex flex-col items-center gap-2 lg:order-3">
                    {/* Toggle Seasonal Themes */}
                    <div className="flex gap-2">
                        <span>Motywy sezonowe</span>
                        <button
                            title={
                                seasonalThemesEnabled
                                    ? 'Wyłącz motywy sezonowe'
                                    : 'Włącz motywy sezonowe'
                            }
                            onClick={() => toggleSeasonalThemes(!seasonalThemesEnabled)}
                            className={cn(
                                'relative inline-flex h-6 w-12 items-center rounded-full transition-colors hover:cursor-pointer',
                                seasonalThemesEnabled
                                    ? 'bg-color-theme-medium'
                                    : 'bg-color-theme-light',
                                'ring-color-theme-txt-dark ring-2'
                            )}
                        >
                            <span
                                className={cn(
                                    'absolute top-0 left-0 flex h-6 w-6 items-center justify-center rounded-full bg-white transition-transform',
                                    seasonalThemesEnabled ? 'translate-x-6' : 'translate-x-0'
                                )}
                            >
                                {seasonalThemesEnabled ? (
                                    <Power className="text-color-theme-txt-dark h-4 w-4" />
                                ) : (
                                    <PowerOff className="h-4 w-4 text-gray-500" />
                                )}
                            </span>
                        </button>
                    </div>
                    {/* Set Seasonal Theme */}
                    <div className={cn('gap-3', showSeasonalTheme ? 'flex' : 'hidden')}>
                        {themeOptions.map((t) => (
                            <label
                                key={t.id}
                                className={cn(
                                    'flex flex-col items-center',
                                    !seasonalThemesEnabled && 'cursor-not-allowed opacity-50'
                                )}
                            >
                                <input
                                    type="radio"
                                    name="theme"
                                    checked={activeTheme === t.id}
                                    onChange={() => setActiveTheme(t.id)}
                                    disabled={!seasonalThemesEnabled}
                                    className="cursor-pointer disabled:cursor-not-allowed"
                                />
                                <span>{t.label}</span>
                            </label>
                        ))}
                    </div>
                </div>
            </div>
            {/* Second Row */}
            <div className="text-center">
                <span>© {yearDisplay} Stowarzyszenie Ogrodowe „Stokrotka” w Sanoku</span>
            </div>
        </footer>
    );
}
