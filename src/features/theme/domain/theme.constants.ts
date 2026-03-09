import { Season, SEASONS } from '@/shared/utils/get-season';

import { SeasonalThemeOption, ThemeClasses } from '@/features/theme/domain/theme.types';

/**
 * Key used in localStorage to store seasonal theme preference.
 */
export const STORAGE_KEY = 'seasonalThemesEnabled';

/**
 * All CSS theme classes that may be applied to the `<html>` element.
 */
export const THEME_CLASSES: ThemeClasses[] = [
    'theme-default',
    'theme-spring',
    'theme-summer',
    'theme-autumn',
    'theme-winter',
];

const SEASON_LABELS: Record<Season, string> = {
    spring: 'Wiosna',
    summer: 'Lato',
    autumn: 'Jesień',
    winter: 'Zima',
} as const;

/**
 * List of selectable seasonal theme options with polish label used by UI components.
 */
export const SEASONAL_THEME_OPTIONS: SeasonalThemeOption[] = [
    ...SEASONS.map((s) => ({
        id: s,
        label: SEASON_LABELS[s],
    })),
];
