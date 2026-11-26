'use client';

import { Palette, Power, PowerOff, SunSnow } from 'lucide-react';

import { cn } from '@/shared/utils/cn';

import { useTheme } from '@/features/theme/ui/theme-provider';

/**
 * Toggle button for enabling or disabling seasonal themes.
 *
 * Displays a switch with an icon indicating the current state.
 * Interacts with ThemeProvider to update seasonal theme preference.
 */
export default function SeasonalThemesToggle() {
    const {
        seasonalThemeEnabled: seasonalThemesEnabled,
        toggleSeasonalThemePreference: toggleSeasonalThemesPreference,
    } = useTheme();

    return (
        <div className="flex flex-col items-center gap-2">
            <div title="Motywy wyglądu strony: domyślny lub sezonowe.">
                <Palette size={32} className="text-white" />
            </div>
            <button
                type="button"
                title={seasonalThemesEnabled ? 'Wyłącz motyw sezonowy' : 'Włącz motyw sezonowy'}
                onClick={() => toggleSeasonalThemesPreference(!seasonalThemesEnabled)}
                className={cn(
                    'relative inline-flex h-5 w-10 items-center rounded-full',
                    'transition-colors hover:cursor-pointer',
                    'ring-2 ring-white',
                    seasonalThemesEnabled ? 'bg-white' : ''
                )}
            >
                <div
                    className={cn(
                        'absolute top-0 left-0 flex h-5 w-5 items-center justify-center rounded-full',
                        'bg-white',
                        'transition-transform',
                        seasonalThemesEnabled
                            ? 'border-color-surface-border translate-x-5 border-2'
                            : 'translate-x-0'
                    )}
                >
                    {seasonalThemesEnabled ? (
                        <SunSnow aria-hidden="true" className="h-4 w-4" />
                    ) : (
                        <PowerOff
                            aria-hidden="true"
                            className="text-foreground-brand-primary-accent h-4 w-4"
                        />
                    )}
                </div>
            </button>
        </div>
    );
}
