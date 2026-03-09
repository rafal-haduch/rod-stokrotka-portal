'use client';

import { useEffect, useState } from 'react';

import { CustomButton } from '@/components/custom-button';

import {
    getSeasonalThemePreference,
    setSeasonalThemePreference,
} from '@/features/theme/domain/theme.storage';
import { useTheme } from '@/features/theme/ui/theme-provider';

/**
 * Popup shown on the user's first visit asking whether seasonal themes should be enabled or disabled.
 *
 * Behaviour:
 * - Appears only if `seasonalThemesEnabled` is not set in localStorage.
 * - "Zostawiam kolory sezonowe" keeps seasonal themes enabled in ThemeProvider and set that preference in local storage.
 * - "Przełączam na stałe kolory" disables seasonal themes preference via ThemeProvider.
 *
 * After a decision the popup will not appear again.
 */
export function ThemePreferencePrompt() {
    const [showPrompt, setShowPrompt] = useState(false);
    const { toggleSeasonalThemePreference: toggleSeasonalThemesPreference } = useTheme();

    useEffect(() => {
        const pref = getSeasonalThemePreference();
        if (pref === null) {
            setShowPrompt(true);
        }
    }, []);

    if (!showPrompt) return null;

    return (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/50">
            <div className="max-w-4xl rounded-xl bg-white p-8 shadow-lg">
                <p className="mb-8 text-justify text-lg">
                    Kolory na stronie są dopasowywane automatycznie do aktualnej pory roku. To
                    ustawienie możesz zmienić w każdej chwili na samym dole strony przy opcji{' '}
                    <strong>"Motywy Sezonowe"</strong>. Zalecamy jednak mieć włączone motywy
                    sezonowe, dla lepszego oddania klimatu jaki panuje aktualnie w naszym ogrodzie.
                </p>
                <div className="flex justify-center gap-4">
                    <CustomButton
                        type="button"
                        title="Zapisz opcję włączonych motywów sezonowych"
                        onClick={() => {
                            setSeasonalThemePreference(true);
                            setShowPrompt(false);
                        }}
                        size="lg"
                        variant="primary"
                    >
                        Zostawiam kolory sezonowe
                    </CustomButton>

                    <CustomButton
                        type="button"
                        title="Zapisz opcję wyłączonych motywów sezonowych"
                        onClick={() => {
                            toggleSeasonalThemesPreference(false);
                            setShowPrompt(false);
                        }}
                        size="lg"
                        variant="secondary"
                    >
                        Przełączam na stałe kolory
                    </CustomButton>
                </div>
            </div>
        </div>
    );
}
