'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

import { ThemeType } from '@/features/theme/domain/theme.types';
import {
    applyThemeToDocument,
    resolveThemeFromPreference,
} from '@/features/theme/domain/theme.helpers';
import {
    getSeasonalThemePreference,
    setSeasonalThemePreference,
} from '@/features/theme/domain/theme.storage';

interface ThemeContextValue {
    activeTheme: ThemeType;
    setActiveTheme: (theme: ThemeType) => void;
    seasonalThemeEnabled: boolean;
    toggleSeasonalThemePreference: (enabled: boolean) => void;
}

/**
 * React context used to share theme state and controls across the application.
 */
const ThemeContext = createContext<ThemeContextValue | null>(null);

/**
 * Provides theme state and theme management logic to the application.
 *
 * Responsibilities:
 * - Determines the initial theme based on stored preferences.
 * - Applies the active theme to the document.
 * - Exposes theme controls via React context.
 * - Displays the seasonal theme preference prompt on first visit.
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [seasonalThemeEnabled, setSeasonalThemeEnabled] = useState(true);
    const [activeTheme, setActiveTheme] = useState<ThemeType>('default');
    const [initialized, setInitialized] = useState(false);

    // Initializes theme state from stored user preference.
    useEffect(() => {
        const pref = getSeasonalThemePreference();
        const enabled = pref ?? true;

        setSeasonalThemeEnabled(enabled);
        setActiveTheme(resolveThemeFromPreference(enabled));

        setInitialized(true);
    }, []);

    useEffect(() => {
        applyThemeToDocument(activeTheme);
    }, [activeTheme]);

    /**
     * Enables or disables seasonal themes.
     *
     * Updates:
     * - localStorage preference
     * - internal state
     * - currently active theme
     */
    const toggleSeasonalThemePreference = useCallback((enabled: boolean) => {
        setSeasonalThemePreference(enabled);
        setSeasonalThemeEnabled(enabled);
        setActiveTheme(resolveThemeFromPreference(enabled));
    }, []);

    /**
     * Memoized context value to prevent unnecessary re-renders
     * of components consuming the ThemeContext.
     */
    const value = useMemo(
        () => ({
            activeTheme,
            setActiveTheme,
            seasonalThemeEnabled,
            toggleSeasonalThemePreference,
        }),
        [activeTheme, seasonalThemeEnabled]
    );

    if (!initialized) return null;

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

/**
 * Hook for accessing theme state and actions from ThemeContext.
 *
 * Must be used inside ThemeProvider.
 */
export function useTheme() {
    const ctx = useContext(ThemeContext);
    if (!ctx) throw new Error('useTheme() must be used inside ThemeProvider!');
    return ctx;
}
