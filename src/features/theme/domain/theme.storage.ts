const STORAGE_KEY = 'seasonalThemesEnabled';

export function getSeasonalThemesPreference(): boolean | null {
    const value = localStorage.getItem(STORAGE_KEY);

    if (value === null) return null;

    return value === 'true';
}

export function setSeasonalThemesPreference(enabled: boolean) {
    localStorage.setItem(STORAGE_KEY, String(enabled));
}
