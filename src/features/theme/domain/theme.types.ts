import { Season } from '@/shared/utils/get-season';

export type ThemeType = Season | 'default';

export type ThemeClasses = `theme-${ThemeType}`;

type SeasonalTheme = Exclude<ThemeType, 'default'>;

/**
 * Represents a selectable seasonal theme option used in UI components.
 */
export interface SeasonalThemeOption {
    id: SeasonalTheme;
    label: string;
}
