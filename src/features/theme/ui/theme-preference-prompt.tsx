import { useEffect, useState } from 'react';
import { useTheme } from './theme-provider';
import { getSeasonalThemesPreference } from '@/features/theme/domain/theme.storage';

/**
 * Popup shown on the user's first visit asking whether seasonal themes
 * should be enabled or disabled.
 *
 * Behaviour:
 * - Appears only if `seasonalThemesEnabled` is not set in localStorage.
 * - "Zostaw" keeps seasonal themes (default behaviour).
 * - "Przełącz" disables seasonal themes via ThemeProvider.
 *
 * After a decision the popup will not appear again.
 */
export function ThemePreferencePrompt() {
    const [showPrompt, setShowPrompt] = useState(false);
    const { toggleSeasonalThemesPreference } = useTheme();

    useEffect(() => {
        const pref = getSeasonalThemesPreference();
        if (pref === null) {
            setShowPrompt(true);
        }
    }, []);

    if (!showPrompt) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="max-w-4xl rounded-xl bg-white p-6 text-center shadow-lg">
                <p className="mb-4 text-lg">
                    Kolory na stronie są dopasowywane automatycznie do aktualnej pory roku. To
                    ustawienie możesz zmienić w każdej chwili na samym dole strony{' '}
                    <strong>"Motywy Sezonowe" </strong>, aby przełączyć na stałe kolory.
                </p>
                <div className="mb-4 flex justify-center gap-4">
                    <button
                        onClick={() => {
                            //NOTE: We only close the prompt because seasonal themes preference in local storage are set to true by default in first visit.
                            setShowPrompt(false);
                        }}
                        className="button-text rounded-lg px-4 py-2"
                    >
                        Zostawiam kolory sezonowe
                    </button>

                    <button
                        onClick={() => {
                            toggleSeasonalThemesPreference(false);
                            setShowPrompt(false);
                        }}
                        className="rounded-lg bg-gray-300 px-4 py-2 text-black hover:cursor-pointer hover:bg-gray-200"
                    >
                        Przełączam na stałe kolory
                    </button>
                </div>
                <p className="text-md">
                    *Zalecamy mieć włączone motywy sezonowe, dla lepszego oddania klimatu jaki
                    panuje aktualnie w naszym ogrodzie.
                </p>
            </div>
        </div>
    );
}
