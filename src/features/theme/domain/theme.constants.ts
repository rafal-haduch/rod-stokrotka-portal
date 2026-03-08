import { SEASONS } from '@/shared/utils/get-season';

import { ThemeClasses, ThemeOption } from './theme.types';

export const THEME_CLASSES: ThemeClasses[] = [
    'theme-default',
    'theme-spring',
    'theme-summer',
    'theme-autumn',
    'theme-winter',
];

export const THEME_OPTIONS: ThemeOption[] = [
    { id: 'default', label: 'Domyślny' },
    ...SEASONS.map((s) => ({
        id: s,
        label:
            s === 'spring'
                ? 'Wiosna'
                : s === 'summer'
                  ? 'Lato'
                  : s === 'autumn'
                    ? 'Jesień'
                    : 'Zima',
    })),
];
