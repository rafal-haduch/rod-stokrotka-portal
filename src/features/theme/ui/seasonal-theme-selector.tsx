'use client';

import { cn } from '@/shared/utils/cn';

import { SEASONAL_THEME_OPTIONS } from '@/features/theme/domain/theme.constants';
import { useTheme } from '@/features/theme/ui/theme-provider';

export function SeasonalThemeSelector() {
    const { activeTheme, setActiveTheme, seasonalThemeEnabled: seasonalThemesEnabled } = useTheme();

    const showSeasonalTheme = process.env.NEXT_PUBLIC_SHOW_SEASONAL_THEME === 'true';
    if (!showSeasonalTheme) return null;

    return (
        <div className="flex gap-3">
            {SEASONAL_THEME_OPTIONS.map((t) => (
                <div
                    key={t.id}
                    className={cn(
                        'flex flex-col items-center',
                        !seasonalThemesEnabled && 'opacity-50'
                    )}
                >
                    <input
                        type="radio"
                        name="theme"
                        checked={activeTheme === t.id}
                        onChange={() => setActiveTheme(t.id)}
                        disabled={!seasonalThemesEnabled}
                        title={
                            seasonalThemesEnabled
                                ? 'Wybierz ten motyw sezonowy'
                                : 'Motywy sezonowe są wyłączone'
                        }
                        className="cursor-pointer disabled:cursor-not-allowed"
                    />
                    <span>{t.label}</span>
                </div>
            ))}
        </div>
    );
}
