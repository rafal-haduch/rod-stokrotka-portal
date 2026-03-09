import { getSeason } from '@/shared/utils/get-season';

import { THEME_CLASSES } from '@/features/theme/domain/theme.constants';
import { ThemeClasses, ThemeType } from '@/features/theme/domain/theme.types';

/**
 * Resolves the active theme based on the seasonal themes preference.
 *
 * If seasonal themes are enabled, the theme is determined
 * from the current season. Otherwise the default theme is used.
 *
 * @param enabled - Whether seasonal themes are enabled.
 * @returns The theme that should be applied.
 */

/** Returns the appropriate theme based on whether seasonal themes are enabled. */
export function resolveThemeFromPreference(enabled: boolean): ThemeType {
    return enabled ? getSeason() : 'default';
}

/**
 * Applies the given theme class to the root `<html>` element.
 *
 * Behaviour:
 * - Removes all previously applied theme classes.
 * - Adds the class corresponding to the provided theme.
 *
 * This function mutates the DOM by modifying `document.documentElement.classList`.
 *
 * @param theme - Theme that should be applied.
 */
export function applyThemeToDocument(theme: ThemeType) {
    const themeClassName: ThemeClasses = `theme-${theme}`;

    const html = document.documentElement;

    html.classList.remove(...THEME_CLASSES);
    html.classList.add(themeClassName);
}
