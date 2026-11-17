/**
 * Navigation menu links.
 */
interface NavItem {
    /** Sort order in navigation (ascending). */
    order: number;
}

/**
 * Application route definition.
 */
interface AppRoute {
    /** URL path for the route. */
    path: string;
    /** Display text in navigation menu or link buttons. */
    label: string;

    parent?: string; //TODO: change to key of const ROUTES

    publicNav?: NavItem;
    accountNav?: NavItem;
    panelNav?: NavItem;
}

/** Route included in the public menu. */
interface PublicNavRoute extends AppRoute {
    publicNav: NavItem;
}

/** Route included in the account menu. */
interface AccountNavRoute extends AppRoute {
    accountNav: NavItem;
}

/** Route included in the panel menu. */
interface PanelNavRoute extends AppRoute {
    panelNav: NavItem;
}

/** Central routing configuration for the application. */
export const ROUTES = {
    // --- Public ---
    HOME: {
        path: '/',
        label: 'Strona główna',
        publicNav: { order: 1 },
    },
    ABOUT_US: {
        path: '/o-nas',
        label: 'O nas',
        publicNav: { order: 2 },
    },
    GARDEN_MAP: {
        path: '/mapa-ogrodu',
        label: 'Mapa',
        publicNav: { order: 3 },
    },
    GALLERY: {
        path: '/galeria',
        label: 'Galeria',
        publicNav: { order: 4 },
    },
    CONTACT: {
        path: '/kontakt',
        label: 'Kontakt',
        publicNav: { order: 5 },
    },
    GARDENING_GUIDE: {
        path: '/porady-ogrodowe',
        label: 'Porady ogrodowe',
        publicNav: { order: 6 },
    },
    GOVERNANCE: {
        path: '/wladze',
        label: 'Władze',
        publicNav: { order: 7 },
    },
    DOCUMENTS: {
        path: '/dokumenty',
        label: 'Dokumenty',
        publicNav: { order: 8 },
    },
    FEES: {
        path: '/oplaty',
        label: 'Opłaty',
        publicNav: { order: 9 },
    },
    INFORMATIONS: {
        path: '/informacje',
        label: 'Informacje',
        publicNav: { order: 10 },
    },
    ANNOUNCEMENTS: {
        path: '/ogloszenia',
        label: 'Ogłoszenia',
        publicNav: { order: 11 },
    },
    MEMORIES: {
        path: '/wspomnienia',
        label: 'Wspomnienia',
        publicNav: { order: 12 },
    },
    INVESTMENTS: {
        path: '/inwestycje',
        label: 'Inwestycje',
        publicNav: { order: 13 },
    },
    PRIVACY_POLICY: {
        path: '/polityka-prywatnosci',
        label: 'Polityka prywatności',
    },
    LOGIN: {
        path: '/logowanie',
        label: 'Logowanie',
    },
    // --- Account ---
    MY_ACCOUNT: {
        path: '/moje-konto',
        label: 'Profil',
        accountNav: { order: 1 },
    },
    MY_PLOTS: {
        path: '/moje-konto/dzialki',
        label: 'Działki',
        accountNav: { order: 2 },
        parent: 'MY_ACCOUNT',
    },
    MY_PAYMENTS: {
        path: '/moje-konto/platnosci',
        label: 'Płatności',
        accountNav: { order: 3 },
        parent: 'MY_ACCOUNT',
    },
    MY_SURVEYS: {
        path: '/moje-konto/ankiety',
        label: 'Ankiety',
        accountNav: { order: 4 },
        parent: 'MY_ACCOUNT',
    },
    CHANGE_PASSWORD: {
        path: '/moje-konto/zmiana-hasla',
        label: 'Zmień hasło',
        parent: 'MY_ACCOUNT',
    },
    // --- Panel ---
    PANEL: {
        path: '/panel',
        label: 'Panel zarządzania',
    },
    PANEL_USERS: {
        path: '/panel/czlonkowie',
        label: 'Działkowcy',
        panelNav: { order: 1 },
        parent: 'PANEL',
    },
    PANEL_PLOTS: {
        path: '/panel/dzialki',
        label: 'Działki',
        panelNav: { order: 2 },
        parent: 'PANEL',
    },
    PANEL_FEES: {
        path: '/panel/oplaty',
        label: 'Opłaty',
        panelNav: { order: 3 },
        parent: 'PANEL',
    },
    PANEL_PAYMENTS: {
        path: '/panel/platnosci',
        label: 'Płatności',
        panelNav: { order: 4 },
        parent: 'PANEL',
    },
    PANEL_ANNOUNCEMENTS: {
        path: '/panel/ogloszenia',
        label: 'Ogłoszenia',
        panelNav: { order: 5 },
        parent: 'PANEL',
    },
    PANEL_DOCUMENTS: {
        path: '/panel/dokumenty',
        label: 'Dokumenty',
        panelNav: { order: 6 },
        parent: 'PANEL',
    },
    PANEL_SURVEYS: {
        path: '/panel/ankiety',
        label: 'Ankiety',
        panelNav: { order: 7 },
        parent: 'PANEL',
    },
} as const satisfies Record<string, AppRoute>;

/**
 * Union type of all route keys.
 */
export type RouteNames = keyof typeof ROUTES;

/**
 * JSDoc
 */
export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES]['path'];

/**
 * List of all routes.
 */
const ROUTE_LIST: AppRoute[] = Object.values(ROUTES);

/** Items for the public navigation menu. */
export const PUBLIC_NAV_ITEMS: PublicNavRoute[] = ROUTE_LIST.filter(
    (r): r is PublicNavRoute => r.publicNav != null
).sort((a, b) => a.publicNav.order - b.publicNav.order);

/** Items for the account navigation menu. */
export const ACCOUNT_NAV_ITEMS: AccountNavRoute[] = ROUTE_LIST.filter(
    (r): r is AccountNavRoute => r.accountNav != null
).sort((a, b) => a.accountNav.order - b.accountNav.order);

/** Items for the panel navigation menu. */
export const PANEL_NAV_ITEMS: PanelNavRoute[] = ROUTE_LIST.filter(
    (r): r is PanelNavRoute => r.panelNav != null
).sort((a, b) => a.panelNav.order - b.panelNav.order);
