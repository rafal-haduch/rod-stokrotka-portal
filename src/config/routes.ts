/**
 * Navigation item links.
 */
interface NavItem {
    /** Sort order in navigation (ascending). */
    order: number;
}

/**
 * Application route definition.
 */
interface AppRoute {
    path: string;
    /** Display text in navigation menu or link buttons. */
    label: string;

    parent?: string; //TODO: change to key of const ROUTES

    mainNav?: NavItem;
    authNav?: NavItem;
    cmsNav?: NavItem;
}

/**
 * Route with required navigation metadata.
 * Used for type-safe filtering of navigable routes.
 */
interface MainNavRoute extends AppRoute {
    mainNav: NavItem;
}

interface AuthNavRoute extends AppRoute {
    authNav: NavItem;
}

interface CMSNavRoute extends AppRoute {
    cmsNav: NavItem;
}

// Routes
export const ROUTES = {
    // --- Public ---
    HOME: {
        path: '/',
        label: 'Strona główna',
        mainNav: { order: 1 },
    },
    ABOUT_US: {
        path: '/o-nas',
        label: 'O nas',
        mainNav: { order: 2 },
    },
    GARDEN_MAP: {
        path: '/mapa-ogrodu',
        label: 'Mapa',
        mainNav: { order: 3 },
    },
    GALLERY: {
        path: '/galeria',
        label: 'Galeria',
        mainNav: { order: 4 },
    },
    CONTACT: {
        path: '/kontakt',
        label: 'Kontakt',
        mainNav: { order: 5 },
    },
    GARDENING_GUIDE: {
        path: '/porady-ogrodowe',
        label: 'Porady ogrodowe',
        mainNav: { order: 6 },
    },
    GOVERNANCE: {
        path: '/wladze',
        label: 'Władze',
        mainNav: { order: 7 },
    },
    DOCUMENTS: {
        path: '/dokumenty',
        label: 'Dokumenty',
        mainNav: { order: 8 },
    },
    FEES: {
        path: '/oplaty',
        label: 'Opłaty',
        mainNav: { order: 9 },
    },
    INFORMATIONS: {
        path: '/informacje',
        label: 'Informacje',
        mainNav: { order: 10 },
    },
    ANNOUNCEMENTS: {
        path: '/ogloszenia',
        label: 'Ogłoszenia',
        mainNav: { order: 11 },
    },
    MEMORIES: {
        path: '/wspomnienia',
        label: 'Wspomnienia',
        mainNav: { order: 12 },
    },
    INVESTMENTS: {
        path: '/inwestycje',
        label: 'Inwestycje',
        mainNav: { order: 13 },
    },
    PRIVACY_POLICY: {
        path: '/polityka-prywatnosci',
        label: 'Polityka prywatności',
    },
    LOGIN: {
        path: '/logowanie',
        label: 'Logowanie',
    },
    // --- Auth ---
    MY_PROFILE: {
        path: '/moj-profil',
        label: 'Profil',
        authNav: { order: 1 },
    },
    MY_PLOTS: {
        path: '/moj-profil/dzialki',
        label: 'Działki',
        authNav: { order: 2 },
        parent: 'MY_PROFILE',
    },
    MY_PAYMENTS: {
        path: '/moj-profil/platnosci',
        label: 'Płatności',
        authNav: { order: 3 },
        parent: 'MY_PROFILE',
    },
    MY_SURVEYS: {
        path: '/moj-profil/ankiety',
        label: 'Ankiety',
        authNav: { order: 4 },
        parent: 'MY_PROFILE',
    },
    CHANGE_PASSWORD: {
        path: '/moj-profil/zmiana-hasla',
        label: 'Zmień hasło',
        parent: 'MY_PROFILE',
    },
    // --- CMS ---
    CMS: {
        path: '/cms',
        label: 'Panel zarządzania',
    },
    DASHBOARD: {
        path: '/cms/dashboard',
        label: 'Panel zarządzania',
        parent: 'CMS',
    },
    CMS_USERS: {
        path: '/cms/users',
        label: 'Tabela działkowców',
        cmsNav: { order: 1 },
        parent: 'CMS',
    },
    CMS_PLOTS: {
        path: '/cms/plots',
        label: 'Tabela działek',
        cmsNav: { order: 2 },
        parent: 'CMS',
    },
    CMS_FEES: {
        path: '/cms/fees',
        label: 'Tabela opłat',
        cmsNav: { order: 3 },
        parent: 'CMS',
    },
    CMS_PAYMENTS: {
        path: '/cms/payments',
        label: 'Tabela płatności',
        cmsNav: { order: 4 },
        parent: 'CMS',
    },
    CMS_ANNOUNCEMENTS: {
        path: '/cms/announcements',
        label: 'Ogłoszenia',
        cmsNav: { order: 5 },
        parent: 'CMS',
    },
    CMS_DOCUMENTS: {
        path: '/cms/documents',
        label: 'Dokumenty',
        cmsNav: { order: 6 },
        parent: 'CMS',
    },
    CMS_SURVEYS: {
        path: '/cms/surveys',
        label: 'Ankiety',
        cmsNav: { order: 7 },
        parent: 'CMS',
    },
} as const satisfies Record<string, AppRoute>;

/**
 * Union type of all route keys.
 * Use in: Type-safe route references, SEO metadata mapping with `Record<PageKey, Metadata>`.
 */
export type PageKey = keyof typeof ROUTES;

/**
 * Flat list of all routes.
 * Use in: SEO metadata mapping, loop-based metadata generation.
 */
export const ROUTE_LIST: AppRoute[] = Object.values(ROUTES);

/**
 * Routes from the site's main navigation menu.
 * For use in the main navigation components.
 */
export const MAIN_NAV_ITEMS: MainNavRoute[] = ROUTE_LIST.filter(
    (r): r is MainNavRoute => r.mainNav != null
).sort((a, b) => a.mainNav.order - b.mainNav.order);

/**
 * Routes from the navigation menu in auth section.
 * For use in the auth navigation.
 */
export const AUTH_NAV_ITEMS: AuthNavRoute[] = ROUTE_LIST.filter(
    (r): r is AuthNavRoute => r.authNav != null
).sort((a, b) => a.authNav.order - b.authNav.order);

/**
 * Routes from the navigation menu in CMS.
 * For use in the CMS navigation.
 */
export const CMS_NAV_ITEMS: CMSNavRoute[] = ROUTE_LIST.filter(
    (r): r is CMSNavRoute => r.cmsNav != null
).sort((a, b) => a.cmsNav.order - b.cmsNav.order);
