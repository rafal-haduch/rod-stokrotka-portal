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
        userRole?: ('USER' | 'ADMIN')[];
    };

    mainNav?: {
        label: string;
        order: number;
    };
    profileNav?: {
        label: string;
        order: number;
    };
    cmsNav?: {
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
        mainNav: { label: 'Mapa ogrodu', order: 3 },
    },
    GALLERY: {
        path: '/galeria',
        meta: {
            title: 'Galeria',
        },
        mainNav: { label: 'Galeria', order: 4 },
    },
    CONTACT: {
        path: '/kontakt',
        meta: {
            title: 'Dane kontaktowe',
        },
        mainNav: { label: 'Kontakt', order: 5 },
    },
    GARDENING_GUIDE: {
        path: '/porady-ogrodowe',
        meta: {
            title: 'Porady ogrodowe',
        },
        mainNav: { label: 'Porady ogrodowe', order: 6 },
    },
    GOVERNANCE: {
        path: '/wladze',
        meta: {
            title: 'Władze stowarzyszenia',
        },
        mainNav: { label: 'Władze', order: 7 },
    },
    DOCUMENTS: {
        path: '/dokumenty',
        meta: {
            title: 'DOKUMENTY',
        },
        mainNav: { label: 'Dokumenty', order: 8 },
    },
    FEES: {
        path: '/oplaty',
        meta: {
            title: 'Opłaty',
        },
        mainNav: { label: 'Opłaty', order: 9 },
    },
    INFORMATIONS: {
        path: '/informacje',
        meta: {
            title: 'Informacje organizacyjne',
        },
        mainNav: { label: 'Informacje', order: 10 },
    },
    ANNOUNCEMENTS: {
        path: '/ogloszenia',
        meta: {
            title: 'Ogłoszenia zarządu',
        },
        mainNav: { label: 'Ogłoszenia', order: 11 },
    },
    MEMORIES: {
        path: '/wspomnienia',
        meta: {
            title: 'Wspomnienia',
        },
        mainNav: { label: 'Wspomnienia', order: 12 },
    },
    INVESTMENTS: {
        path: '/inwestycje',
        meta: {
            title: 'Inwestycje w ogrodzie',
        },
        mainNav: { label: 'Inwestycje', order: 13 },
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
    // ==========
    // === CMS  ===
    //===========
    CMS: {
        path: '/cms',
        meta: {
            title: 'PANEL ZARZĄDZANIA',
        },
    },
    DASHBOARD: {
        path: '/cms/dashboard',
        parent: 'CMS',
        meta: {
            title: 'PANEL',
        },
    },
    CMS_USERS: {
        path: '/cms/users',
        parent: 'CMS',
        meta: {
            title: 'TABELA DZIAŁKOWCÓW',
        },
        cmsNav: { label: 'Tabela działkowców', order: 1 },
    },
    CMS_PLOTS: {
        path: '/cms/plots',
        parent: 'CMS',
        meta: {
            title: 'TABELA DZIAŁEK',
        },
        cmsNav: { label: 'Tabela działek', order: 2 },
    },
    CMS_FEES: {
        path: '/cms/fees',
        parent: 'CMS',
        meta: {
            title: 'TABELA OPŁAT',
        },
        cmsNav: { label: 'Tabela opłat', order: 3 },
    },
    CMS_PAYMENTS: {
        path: '/cms/payments',
        parent: 'CMS',
        meta: {
            title: 'TABELA PŁATNOŚCI',
        },
        cmsNav: { label: 'Płatności', order: 4 },
    },
    CMS_ANNOUNCEMENTS: {
        path: '/cms/announcements',
        parent: 'CMS',
        meta: {
            title: 'OGŁOSZENIA',
        },
        cmsNav: { label: 'Ogłoszenia', order: 5 },
    },
    CMS_DOCUMENTS: {
        path: '/cms/documents',
        parent: 'CMS',
        meta: {
            title: 'DOKUMENTY',
        },
        cmsNav: { label: 'Dokumenty', order: 6 },
    },
    CMS_SURVEYS: {
        path: '/cms/surveys',
        parent: 'CMS',
        meta: {
            title: 'ANKIETY',
        },
        cmsNav: { label: 'Ankiety', order: 7 },
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
