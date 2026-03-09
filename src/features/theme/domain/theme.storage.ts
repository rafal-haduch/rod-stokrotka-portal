import { STORAGE_KEY } from '@/features/theme/domain/theme.constants';

/**
 * Reads the user's seasonal theme preference from localStorage.
 *
 * NOTE: Returns `undefined` during SSR.
 *
 * @returns
 * - `true`  → seasonal themes enabled
 * - `false` → seasonal themes disabled
 * - `null`  → preference not yet set (first visit)
 */
export function getSeasonalThemePreference(): boolean | null | undefined {
    if (typeof window === 'undefined') return undefined;

    const value = localStorage.getItem(STORAGE_KEY);
    if (value === null) return null;

    return value === 'true';
}

/**
 * Save the user's seasonal theme preference in localStorage.
 *
 * NOTE: Does nothing during SSR.
 *
 * @param enabled - Whether seasonal themes should be enabled.
 */
export function setSeasonalThemePreference(enabled: boolean) {
    if (typeof window === 'undefined') return;

    localStorage.setItem(STORAGE_KEY, String(enabled));
}
