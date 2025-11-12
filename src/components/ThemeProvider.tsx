'use client';

import { createContext, useContext, useEffect, useState } from 'react';

import { ThemeType } from '@/types/Theme';

import { setTheme, getSeason } from '@/lib/hooks/setTheme';
import ThemePrompt from './ThemePrompt';

interface ThemeContextValue {
    activeTheme: ThemeType;
    seasonalThemesEnabled: boolean;
    setActiveTheme: (theme: ThemeType) => void;
    toggleSeasonalThemes: (enabled: boolean) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [seasonalThemesEnabled, setSeasonalThemesEnabled] = useState(true);
    const [activeTheme, setActiveThemeState] = useState<ThemeType>('default');

    // Inicjalizacja
    useEffect(() => {
        const pref = localStorage.getItem('seasonalThemesEnabled');
        if (pref === null) {
            localStorage.setItem('seasonalThemesEnabled', 'true');
        }
        const enabled = pref === null ? true : pref === 'true';
        setSeasonalThemesEnabled(enabled);

        const theme = enabled ? getSeason() : 'default';
        setActiveThemeState(theme);
        setTheme(theme);
    }, []);

    // Synchronizacja przy zmianie
    useEffect(() => {
        setTheme(activeTheme);
    }, [activeTheme]);

    const toggleSeasonalThemes = (enabled: boolean) => {
        setSeasonalThemesEnabled(enabled);
        localStorage.setItem('seasonalThemesEnabled', String(enabled));
        const theme = enabled ? getSeason() : 'default';
        setActiveThemeState(theme);
        setTheme(theme);
    };

    const setActiveTheme = (theme: ThemeType) => {
        setActiveThemeState(theme);
    };

    return (
        <>
            <ThemeContext.Provider
                value={{ activeTheme, seasonalThemesEnabled, setActiveTheme, toggleSeasonalThemes }}
            >
                <ThemePrompt />
                {children}
            </ThemeContext.Provider>
        </>
    );
}

export function useTheme() {
    const ctx = useContext(ThemeContext);
    if (!ctx) throw new Error('useTheme must be used inside ThemeProvider');
    return ctx;
}
