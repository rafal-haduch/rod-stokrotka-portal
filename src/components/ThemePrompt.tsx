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
            <div className="rounded-xl bg-white p-6 text-center shadow-lg">
                <p className="mb-4 text-lg">
                    Kolory strony są automatycznie dopasowywane na podstawie pory roku. Chcesz je
                    pozostawić, czy zmnienić na domyślny motyw?
                </p>
                <div className="flex justify-center gap-4">
                    <button
                        onClick={() => {
                            //NOTE: seasonal themes is enable default
                            setShowPrompt(false);
                        }}
                        className="rounded-lg bg-green-500 px-4 py-2 text-white hover:cursor-pointer hover:bg-green-600"
                    >
                        Zostaw
                    </button>
                    <button
                        onClick={() => {
                            toggleSeasonalThemes(false);
                            setShowPrompt(false);
                        }}
                        className="rounded-lg bg-gray-300 px-4 py-2 text-black hover:cursor-pointer hover:bg-gray-400"
                    >
                        Zmień
                    </button>
                </div>
                <p className="text-md">
                    *Możesz w dowolnej chwili zmienić to ustawienie na samym dole strony.
                </p>
            </div>
        </div>
    );
}
