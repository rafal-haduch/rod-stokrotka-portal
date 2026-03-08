'use client';

import { Power, PowerOff } from 'lucide-react';

import { cn } from '@/shared/utils/cn';

import { useTheme } from './theme-provider';
import { THEME_OPTIONS } from '../domain/theme.constants';

export function ThemeSwitcher() {
    const { activeTheme, setActiveTheme, seasonalThemesEnabled, toggleSeasonalThemesPreference } =
        useTheme();

    const showSeasonalTheme = process.env.NEXT_PUBLIC_SHOW_SEASONAL_THEME === 'true';

    return (
        <div className="flex flex-col items-center gap-2">
            {/* Toggle Seasonal Theme Preference */}
            <div className="flex gap-2">
                <p>Motywy sezonowe</p>

                <button
                    type="button"
                    title={
                        seasonalThemesEnabled ? 'Wyłącz motywy sezonowe' : 'Włącz motywy sezonowe'
                    }
                    onClick={() => toggleSeasonalThemesPreference(!seasonalThemesEnabled)}
                    className={cn(
                        'relative inline-flex h-6 w-12 items-center rounded-full',
                        'transition-colors hover:cursor-pointer',
                        'ring-theme-txt ring-2',
                        seasonalThemesEnabled ? 'bg-color-theme-medium' : 'bg-color-theme-light'
                    )}
                >
                    <span
                        className={cn(
                            'absolute top-0 left-0 flex h-6 w-6 items-center justify-center rounded-full',
                            'bg-white',
                            'transition-transform',
                            seasonalThemesEnabled ? 'translate-x-6' : 'translate-x-0'
                        )}
                    >
                        {seasonalThemesEnabled ? (
                            <Power aria-hidden="true" className="h-4 w-4" />
                        ) : (
                            <PowerOff aria-hidden="true" className="h-4 w-4 text-gray-600" />
                        )}
                    </span>
                </button>
            </div>

            {/* Theme selector */}
            {showSeasonalTheme && (
                <div className="flex gap-3">
                    {THEME_OPTIONS.filter((t) => t.id !== 'default').map((t) => (
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
            )}
        </div>
    );
}
