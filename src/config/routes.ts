// Base type
export type AppRouteBase = {
    path: string;

    meta?: {
        title?: string;
        description?: string;
        noIndex?: boolean;
    };

    auth?: {
        required?: boolean;
        roles?: ('USER' | 'ADMIN')[];
    };

    mainNav?: {
        label: string;
        order: number;
    };
    profileNav?: {
        label: string;
        order: number;
    };
    dashboardNav?: {
        label: string;
        order: number;
    };
};

// Routes
export const ROUTES = {
    // ==============
    // === PUBLIC ===
    // ==============
    HOME: {
        path: '/',
        mainNav: { label: 'Strona główna', order: 1 },
    },
    ABOUT_US: {
        path: '/o-nas',
        meta: {
            title: 'O nas',
        },
        mainNav: { label: 'O nas', order: 2 },
    },
    GARDEN_MAP: {
        path: '/mapa-ogrodu',
        meta: {
            title: 'Mapa ogrodu',
        },
        mainNav: { label: 'Mapa', order: 3 },
    },
    GALLERY: {
        path: '/galeria',
        meta: {
            title: 'Galeria',
        },
        mainNav: { label: 'Galeria', order: 4 },
    },
    GOVERNANCE: {
        path: '/wladze',
        meta: {
            title: 'Władze stowarzyszenia',
        },
        mainNav: { label: 'Władze', order: 5 },
    },
    CONTACT: {
        path: '/kontakt',
        meta: {
            title: 'Dane kontaktowe',
        },
        mainNav: { label: 'Kontakt', order: 6 },
    },
    DOCUMENTS: {
        path: '/dokumenty',
        meta: {
            title: 'DOKUMENTY',
        },
        mainNav: { label: 'Dokumenty', order: 7 },
    },
    FEES: {
        path: '/oplaty',
        meta: {
            title: 'Opłaty',
        },
        mainNav: { label: 'Opłaty', order: 8 },
    },
    INFORMATIONS: {
        path: '/informacje',
        meta: {
            title: 'Informacje organizacyjne',
        },
        mainNav: { label: 'Informacje', order: 9 },
    },
    ANNOUNCEMENTS: {
        path: '/ogloszenia',
        meta: {
            title: 'Ogłoszenia zarządu',
        },
        mainNav: { label: 'Ogłoszenia', order: 10 },
    },
    MEMORIES: {
        path: '/wspomnienia',
        meta: {
            title: 'Wspomnienia',
        },
        mainNav: { label: 'Wspomnienia', order: 11 },
    },
    INVESTMENTS: {
        path: '/inwestycje',
        meta: {
            title: 'Inwestycje w ogrodzie',
        },
        mainNav: { label: 'Inwestycje', order: 12 },
    },
    GARDENING_GUIDE: {
        path: '/porady-ogrodowe',
        meta: {
            title: 'Porady ogrodowe',
        },
        mainNav: { label: 'Porady ogrodowe', order: 13 },
    },
    LOGIN: {
        path: '/logowanie',
        meta: {
            title: 'Logowanie',
        },
    },
    PRIVACY_POLICY: {
        path: '/polityka-prywatnosci',
        meta: {
            title: 'Polityka prywatności',
        },
    },
    // ============
    // === AUTH ===
    // ============
    MY_PROFILE: {
        path: '/moj-profil',
        profileNav: { label: 'Mój profil', order: 1 },
    },
    MY_PLOTS: {
        path: '/moj-profil/dzialki',
        parent: 'MY_PROFILE',
        meta: {
            title: 'Działki',
        },
        profileNav: { label: 'Działki', order: 2 },
    },
    MY_PAYMENTS: {
        path: '/moj-profil/platnosci',
        parent: 'MY_PROFILE',
        meta: {
            title: 'Płatności',
        },
        profileNav: { label: 'Płatności', order: 3 },
    },
    MY_SURVEYS: {
        path: '/moj-profil/ankiety',
        parent: 'MY_PROFILE',
        meta: {
            title: 'Ankiety',
        },
        profileNav: { label: 'Ankiety', order: 4 },
    },
    CHANGE_PASSWORD: {
        path: '/moj-profil/zmiana-hasla',
        parent: 'MY_PROFILE',
        meta: {
            title: 'Zmiana hasła',
        },
    },
    // =================
    // === DASHBOARD ===
    // =================
    DASHBOARD: {
        path: '/dashboard',
        meta: {
            title: 'PANEL ZARZĄDU',
        },
    },
    DASHBOARD_USERS: {
        path: '/dashboard/users',
        parent: 'DASHBOARD',
        meta: {
            title: 'TABELA DZIAŁKOWCÓW',
        },
        dashboardNav: { label: 'Tabela działkowców', order: 1 },
    },
    DASHBOARD_CREATE_USER: {
        path: '/dashboard/users/create',
        parent: 'DASHBOARD_USERS',
        meta: {
            title: 'DODAJ NOWE KONTO DZIAŁKOWCA',
        },
    },
    DASHBOARD_PLOTS: {
        path: '/dashboard/plots',
        parent: 'DASHBOARD',
        meta: {
            title: 'TABELA DZIAŁEK',
        },
        dashboardNav: { label: 'Tabela działek', order: 2 },
    },
    DASHBOARD_CREATE_PLOT: {
        path: '/dashboard/plots/create',
        parent: 'DASHBOARD_PLOTS',
        meta: {
            title: 'DODAJ NOWĄ DZIAŁKĘ',
        },
    },
    DASHBOARD_FEES: {
        path: '/dashboard/fees',
        parent: 'DASHBOARD',
        meta: {
            title: 'TABELA OPŁAT',
        },
        dashboardNav: { label: 'Tabela opłat', order: 3 },
    },
    DASHBOARD_CREATE_FEES: {
        path: '/dashboard/fees/create',
        parent: 'DASHBOARD_FEES',
        meta: {
            title: 'DODAJ NOWĄ OPŁATĘ',
        },
    },
    DASHBOARD_PAYMENTS: {
        path: '/dashboard/payments',
        parent: 'DASHBOARD',
        meta: {
            title: 'TABELA PŁATNOŚCI',
        },
        dashboardNav: { label: 'Płatności', order: 4 },
    },
    DASHBOARD_ANNOUNCEMENTS: {
        path: '/dashboard/announcements',
        parent: 'DASHBOARD',
        meta: {
            title: 'OGŁOSZENIA',
        },
        dashboardNav: { label: 'Ogłoszenia', order: 5 },
    },
    DASHBOARD_CREATE_ANNOUNCEMENTS: {
        path: '/dashboard/announcements/create',
        parent: 'DASHBOARD_ANNOUNCEMENTS',
        meta: {
            title: 'DODAJ NOWE OGŁOSZENIE',
        },
    },
    DASHBOARD_DOCUMENTS: {
        path: '/dashboard/documents',
        parent: 'DASHBOARD',
        meta: {
            title: 'DOKUMENTY',
        },
        dashboardNav: { label: 'Dokumenty', order: 6 },
    },
    DASHBOARD_SURVEYS: {
        path: '/dashboard/surveys',
        parent: 'DASHBOARD',
        meta: {
            title: 'ANKIETY',
        },
        dashboardNav: { label: 'Ankiety', order: 7 },
    },
} as const satisfies Record<string, AppRouteBase & { parent?: string }>;

// Validator
type ValidateRouteParents<T extends Record<string, any>> = {
    [K in keyof T]: T[K] extends { parent: infer P }
        ? P extends keyof T
            ? T[K]
            : '❌ INVALID PARENT'
        : T[K];
};
const _validateRoutes: ValidateRouteParents<typeof ROUTES> = ROUTES;

// Final types
export type RouteKey = keyof typeof ROUTES;

export type AppRoute = AppRouteBase & {
    parent?: RouteKey;
};

export const ROUTE_LIST = Object.values(ROUTES);
