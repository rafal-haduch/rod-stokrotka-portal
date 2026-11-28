import { RouteNames, ROUTES } from '@/config/routes';
import { Metadata } from 'next';

type SeoPageKey = Exclude<RouteNames, 'HOME'>;

export const SEO = {
    ABOUT_US: {
        title: 'O nas',
        description: '...',
        alternates: {
            canonical: ROUTES.ABOUT_US.path,
        },
    },
    GARDEN_MAP: {
        title: 'Mapa ogrodu',
        description: '...',
        alternates: {
            canonical: ROUTES.GARDEN_MAP.path,
        },
    },
    GALLERY: {
        title: 'Galeria ogrodu',
        description: '...',
        alternates: {
            canonical: ROUTES.GALLERY.path,
        },
    },
    CONTACT: {
        title: 'Dane kontaktowe',
        description: '...',
        alternates: {
            canonical: ROUTES.CONTACT.path,
        },
    },
    GARDENING_GUIDE: {
        title: 'Porady ogrodowe',
        description: '...',
        alternates: {
            canonical: ROUTES.GARDENING_GUIDE.path,
        },
    },
    GOVERNANCE: {
        title: 'Władze stowrzyszenia',
        description: '...',
        alternates: {
            canonical: ROUTES.GOVERNANCE.path,
        },
    },
    DOCUMENTS: {
        title: 'Dokumenty',
        description: '...',
        alternates: {
            canonical: ROUTES.DOCUMENTS.path,
        },
    },
    FEES: {
        title: 'Opłaty',
        description: '...',
        alternates: {
            canonical: ROUTES.FEES.path,
        },
    },
    INFORMATIONS: {
        title: 'Informacje',
        description: '...',
        alternates: {
            canonical: ROUTES.INFORMATIONS.path,
        },
    },
    ANNOUNCEMENTS: {
        title: 'Ogłoszenia',
        description: '...',
        alternates: {
            canonical: ROUTES.ANNOUNCEMENTS.path,
        },
    },
    MEMORIES: {
        title: 'Wspomnienia',
        description: '...',
        alternates: {
            canonical: ROUTES.MEMORIES.path,
        },
    },
    INVESTMENTS: {
        title: 'Inwestycje',
        description: '...',
        alternates: {
            canonical: ROUTES.INVESTMENTS.path,
        },
    },
    PRIVACY_POLICY: {
        title: 'Polityka prywatności',
        description: '...',
        alternates: {
            canonical: ROUTES.PRIVACY_POLICY.path,
        },
    },
    LOGIN: {
        title: 'Logowanie',
        description: '...',
        alternates: {
            canonical: ROUTES.LOGIN.path,
        },
    },
    MY_ACCOUNT: { robots: { index: false, follow: false } },
    MY_PLOTS: { robots: { index: false, follow: false } },
    MY_PAYMENTS: { robots: { index: false, follow: false } },
    MY_SURVEYS: { robots: { index: false, follow: false } },
    CHANGE_PASSWORD: { robots: { index: false, follow: false } },
    PANEL: { robots: { index: false, follow: false } },
    PANEL_USERS: { robots: { index: false, follow: false } },
    PANEL_PLOTS: { robots: { index: false, follow: false } },
    PANEL_FEES: { robots: { index: false, follow: false } },
    PANEL_PAYMENTS: { robots: { index: false, follow: false } },
    PANEL_ANNOUNCEMENTS: { robots: { index: false, follow: false } },
    PANEL_DOCUMENTS: { robots: { index: false, follow: false } },
    PANEL_SURVEYS: { robots: { index: false, follow: false } },
} satisfies Record<SeoPageKey, Metadata>;
