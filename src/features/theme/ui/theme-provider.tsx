'use client';

import { createContext, useContext, useEffect, useState } from 'react';

import { ThemeType } from '@/features/theme/domain/theme.types';

import { applyTheme } from '@/features/theme/domain/theme.helpers';
import { ThemePreferencePrompt } from './theme-preference-prompt';
import { getSeason } from '@/shared/utils/get-season';
import {
    getSeasonalThemesPreference,
    setSeasonalThemesPreference,
} from '@/features/theme/domain/theme.storage';

interface ThemeContextValue {
    activeTheme: ThemeType;
    seasonalThemesEnabled: boolean;
    setActiveTheme: (theme: ThemeType) => void;
    toggleSeasonalThemesPreference: (enabled: boolean) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [seasonalThemesEnabled, setSeasonalThemesEnabled] = useState(true);
    const [activeTheme, setActiveThemeState] = useState<ThemeType>('default');

    useEffect(() => {
        const pref = getSeasonalThemesPreference();
        const enabled = pref ?? true;

        setSeasonalThemesEnabled(enabled);

        const theme = enabled ? getSeason() : 'default';

        setActiveThemeState(theme);
        applyTheme(theme);
    }, []);

    useEffect(() => {
        applyTheme(activeTheme);
    }, [activeTheme]);

    const toggleSeasonalThemesPreference = (enabled: boolean) => {
        setSeasonalThemesPreference(enabled);

        setSeasonalThemesEnabled(enabled);

        const theme = enabled ? getSeason() : 'default';

        setActiveThemeState(theme);
        applyTheme(theme);
    };

    const setActiveTheme = (theme: ThemeType) => {
        setActiveThemeState(theme);
    };

    return (
        <ThemeContext.Provider
            value={{
                activeTheme,
                seasonalThemesEnabled,
                setActiveTheme,
                toggleSeasonalThemesPreference,
            }}
        >
            <ThemePreferencePrompt />
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const ctx = useContext(ThemeContext);
    if (!ctx) throw new Error('useTheme must be used inside ThemeProvider');
    return ctx;
}
