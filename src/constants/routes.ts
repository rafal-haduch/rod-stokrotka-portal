export type AppRoute = {
    path: string;
    title: string;
    mainNav?: {
        label: string;
        order: number;
    };
    userNav?: {
        label: string;
        order: number;
    };
    dashboardNav?: {
        label: string;
        order: number;
    };
    hero: boolean;
};

export const ROUTES = {
    HOME: {
        path: '/',
        title: 'STRONA GŁÓWNA',
        mainNav: { label: 'STRONA GŁÓWNA', order: 1 },
        hero: true,
    },
    ABOUT_US: {
        path: '/about-us',
        title: 'O NAS',
        mainNav: { label: 'O NAS', order: 2 },
        hero: true,
    },
    GARDEN_MAP: {
        path: '/garden-map',
        title: 'MAPA OGRODU',
        mainNav: { label: 'MAPA', order: 3 },
        hero: true,
    },
    GALLERY: {
        path: '/gallery',
        title: 'GALERIA OGRODU',
        mainNav: { label: 'GALERIA', order: 4 },
        hero: true,
    },
    STRUCTURE_ASSOCIATION: {
        path: '/structure-association',
        title: 'WŁADZE STOWARZYSZENIA',
        mainNav: { label: 'WŁADZE', order: 5 },
        hero: true,
    },
    CONTACT: {
        path: '/contact',
        title: 'DANE KONTAKTOWE',
        mainNav: { label: 'KONTAKT', order: 6 },
        hero: true,
    },
    DOCUMENTS: {
        path: '/documents',
        title: 'DOKUMENTY',
        mainNav: { label: 'DOKUMENTY', order: 7 },
        hero: true,
    },
    FEES: {
        path: '/fees',
        title: 'OPŁATY',
        mainNav: { label: 'OPŁATY', order: 8 },
        hero: true,
    },
    INFORMATIONS: {
        path: '/informations',
        title: 'INFORMACJE ORGANIZACYJNE',
        mainNav: { label: 'INFORMACJE', order: 9 },
        hero: true,
    },
    ANNOUNCEMENTS: {
        path: '/announcements',
        title: 'OGŁOSZENIA ZARZĄDU',
        mainNav: { label: 'OGŁOSZENIA', order: 10 },
        hero: true,
    },
    MEMORIES: {
        path: '/memories',
        title: 'WSPOMNIENIA',
        mainNav: { label: 'WSPOMNIENIA', order: 11 },
        hero: true,
    },
    INVESTMENTS: {
        path: '/investments',
        title: 'INWESTYCJE W OGRODZIE',
        mainNav: { label: 'INWESTYCJE', order: 12 },
        hero: true,
    },
    GARDENING_GUIDE: {
        path: '/gardening-guide',
        title: 'PORADY OGRODOWE',
        mainNav: { label: 'PORADY OGRODOWE', order: 13 },
        hero: true,
    },
    SIGN_IN: {
        path: '/sign-in',
        title: 'ZALOGUJ SIĘ',
        hero: false,
    },
    PRIVACY_POLICY: {
        path: '/privacy-policy',
        title: 'POLITYKA PRYWATNOŚCI',
        hero: false,
    },
    MY_PROFILE: {
        path: '/my-profile',
        title: 'MÓJ PROFIL',
        userNav: { label: 'Mój profil', order: 1 },
        hero: false,
    },
    MY_PAYMENTS: {
        path: '/my-profile/payments',
        title: 'PŁATNOŚCI',
        userNav: { label: 'Płatności', order: 2 },
        hero: false,
    },
    MY_SURVEYS: {
        path: '/my-profile/surveys',
        title: 'MOJE ANKIETY',
        userNav: { label: 'Ankiety', order: 3 },
        hero: false,
    },
    CHANGE_PASSWORD: {
        path: '/my-profile/change-password',
        title: 'ZMIEŃ HASŁO',
        hero: false,
    },
    DASHBOARD: {
        path: '/dashboard',
        title: 'PANEL ZARZĄDU',
        hero: false,
    },
    DASHBOARD_USERS: {
        path: '/dashboard/users',
        title: 'TABELA DZIAŁKOWCÓW',
        dashboardNav: { label: 'Tabela działkowców', order: 1 },
        hero: false,
    },
    DASHBOARD_CREATE_USER: {
        path: '/dashboard/users/create',
        title: 'DODAJ NOWE KONTO DZIAŁKOWCA',
        hero: false,
    },
    DASHBOARD_PLOTS: {
        path: '/dashboard/plots',
        title: 'TABELA DZIAŁEK',
        dashboardNav: { label: 'Tabela działek', order: 2 },
        hero: false,
    },
    DASHBOARD_CREATE_PLOT: {
        path: '/dashboard/plots/create',
        title: 'DODAJ NOWĄ DZIAŁKĘ',
        hero: false,
    },
    DASHBOARD_FEES: {
        path: '/dashboard/fees',
        title: 'TABELA OPŁAT',
        dashboardNav: { label: 'Tabela opłat', order: 3 },
        hero: false,
    },
    DASHBOARD_CREATE_FEES: {
        path: '/dashboard/fees/create',
        title: 'DODAJ NOWĄ OPŁATĘ',
        hero: false,
    },
    DASHBOARD_PAYMENTS: {
        path: '/dashboard/payments',
        title: 'TABELA PŁATNOŚCI',
        dashboardNav: { label: 'Płatności', order: 4 },
        hero: false,
    },
    DASHBOARD_ANNOUNCEMENTS: {
        path: '/dashboard/announcements',
        title: 'OGŁOSZENIA',
        dashboardNav: { label: 'Ogłoszenia', order: 5 },
        hero: false,
    },
    DASHBOARD_CREATE_ANNOUNCEMENTS: {
        path: '/dashboard/announcements/create',
        title: 'DODAJ NOWE OGŁOSZENIE',
        hero: false,
    },
    DASHBOARD_DOCUMENTS: {
        path: '/dashboard/documents',
        title: 'DOKUMENTY',
        dashboardNav: { label: 'Dokumenty', order: 6 },
        hero: false,
    },
    DASHBOARD_SURVEYS: {
        path: '/dashboard/surveys',
        title: 'ANKIETY',
        dashboardNav: { label: 'Ankiety', order: 7 },
        hero: false,
    },
} satisfies Record<string, AppRoute>;

export const ROUTE_LIST = Object.values(ROUTES);
