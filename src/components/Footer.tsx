'use client';

import Link from 'next/link';
import { Power, PowerOff } from 'lucide-react';

import { cn } from '@/lib/utils/cn';
import { Theme } from '@/lib/hooks/setTheme';
import { useTheme } from './ThemeProvider';

const themeOptions: Theme[] = [
    { id: 'spring', label: 'Wiosna' },
    { id: 'summer', label: 'Lato' },
    { id: 'autumn', label: 'Jesień' },
    { id: 'winter', label: 'Zima' },
] as const;

export default function Footer() {
    const { activeTheme, setActiveTheme, seasonalThemesEnabled, toggleSeasonalThemes } = useTheme();

    const startYear = 2025;
    const currentYear = new Date().getFullYear();
    const yearDisplay = currentYear > startYear ? `${startYear}–${currentYear}` : `${startYear}`;

    return (
        <footer
            className={cn(
                'from-color-theme-light to-color-theme-medium border-color-theme-dark text-color-theme-txt-dark',
                'w-full border-t-4 bg-gradient-to-t'
            )}
        >
            {/* Themes */}
            <div className="flex flex-col items-center gap-2">
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
                <div className="flex gap-3">
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

            {/* Content */}
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
