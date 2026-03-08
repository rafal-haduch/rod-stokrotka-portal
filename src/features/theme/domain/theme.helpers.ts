import { getSeason } from '@/shared/utils/get-season';

import { THEME_CLASSES } from '@/features/theme/domain/theme.constants';
import { ThemeType } from '@/features/theme/domain/theme.types';

export function applyTheme(theme?: ThemeType) {
    let themeClassName;

    if (!theme) {
        const season = getSeason();
        themeClassName = `theme-${season}`;
    } else {
        themeClassName = `theme-${theme}`;
    }

    const html = document.documentElement;

    html.classList.remove(...THEME_CLASSES);
    html.classList.add(themeClassName);
}
