import { ThemeType } from '@/types/Theme';

// REVIEW: zmienic (dodac i uporzadkowac typy/interfejsy)
export interface Theme {
    id: ThemeType;
    label: string;
}

export const themes: Theme[] = [
    { id: 'default', label: 'Domyślny' },
    { id: 'spring', label: 'Wiosna' },
    { id: 'summer', label: 'Lato' },
    { id: 'autumn', label: 'Jesień' },
    { id: 'winter', label: 'Zima' },
] as const;

export function setTheme(theme?: ThemeType) {
    let themeClassName:
        | 'theme-default'
        | 'theme-spring'
        | 'theme-summer'
        | 'theme-autumn'
        | 'theme-winter';

    if (!theme) {
        const season = getSeason();
        themeClassName = `theme-${season}`;
    } else {
        themeClassName = `theme-${theme}`;
    }

    const html = document.documentElement;
    html.classList.remove(
        'theme-default',
        'theme-spring',
        'theme-summer',
        'theme-autumn',
        'theme-winter'
    );
    html.classList.add(themeClassName);
}

export function getSeason(): 'spring' | 'summer' | 'autumn' | 'winter' {
    const now = new Date();
    const year = now.getFullYear();

    const springStart = new Date(year, 2, 21); // 21 marca
    const summerStart = new Date(year, 5, 22); // 22 czerwca
    const autumnStart = new Date(year, 8, 23); // 23 września
    const winterStart = new Date(year, 11, 22); // 22 grudnia

    if (now >= springStart && now < summerStart) return 'spring';
    if (now >= summerStart && now < autumnStart) return 'summer';
    if (now >= autumnStart && now < winterStart) return 'autumn';
    return 'winter';
}
