import { Season } from '@/shared/utils/get-season';

export type ThemeType = Season | 'default';

export type ThemeClasses = `theme-${ThemeType}`;

export interface ThemeOption {
    id: ThemeType;
    label: string;
}
