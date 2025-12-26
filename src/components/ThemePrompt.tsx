import { useEffect, useState } from 'react';
import { useTheme } from './ThemeProvider';

export default function ThemePrompt() {
    const [showPrompt, setShowPrompt] = useState(false);
    const { toggleSeasonalThemes } = useTheme();

    useEffect(() => {
        const pref = localStorage.getItem('seasonalThemesEnabled');
        if (pref === null) {
            setShowPrompt(true);
        }
    }, []);

    if (!showPrompt) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="max-w-4xl rounded-xl bg-white p-6 text-center shadow-lg">
                <p className="mb-4 text-lg">
                    Kolory tej strony są dopasowywane automatycznie do aktualnej pory roku. Czy
                    chcesz pozostawić ten wygląd, czy przełączyć na jeden stały domyślny motyw?
                </p>
                <div className="mb-4 flex justify-center gap-4">
                    <button
                        onClick={() => {
                            //NOTE: seasonal themes is enable default
                            setShowPrompt(false);
                        }}
                        className="button-text rounded-lg px-4 py-2"
                    >
                        Zostaw
                    </button>
                    <button
                        onClick={() => {
                            toggleSeasonalThemes(false);
                            setShowPrompt(false);
                        }}
                        className="rounded-lg bg-gray-300 px-4 py-2 text-black hover:cursor-pointer hover:bg-gray-200"
                    >
                        Przełącz
                    </button>
                </div>
                <p className="text-md">
                    *To ustawienie możesz zmienić w każdej chwili na dole strony.
                </p>
            </div>
        </div>
    );
}
