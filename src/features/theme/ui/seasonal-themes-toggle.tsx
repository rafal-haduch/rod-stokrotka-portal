'use client';

import { Power, PowerOff } from 'lucide-react';

import { cn } from '@/shared/utils/cn';

import { useTheme } from '@/features/theme/ui/theme-provider';

/**
 * Toggle button for enabling or disabling seasonal themes.
 *
 * Displays a switch with an icon indicating the current state.
 * Interacts with ThemeProvider to update seasonal theme preference.
 */
export function SeasonalThemesToggle() {
    const {
        seasonalThemeEnabled: seasonalThemesEnabled,
        toggleSeasonalThemePreference: toggleSeasonalThemesPreference,
    } = useTheme();

    return (
        <div className="flex gap-2">
            <p>Motywy sezonowe</p>
            <button
                type="button"
                title={seasonalThemesEnabled ? 'Wyłącz motywy sezonowe' : 'Włącz motywy sezonowe'}
                onClick={() => toggleSeasonalThemesPreference(!seasonalThemesEnabled)}
                className={cn(
                    'relative inline-flex h-6 w-12 items-center rounded-full',
                    'transition-colors hover:cursor-pointer',
                    'ring-theme-txt ring-2'
                )}
            >
                <div
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
                        <PowerOff aria-hidden="true" className="h-4 w-4" />
                    )}
                </div>
            </button>
        </div>
    );
}
