import { ASSOCIATION_NAME } from '@/data/association';

// --- Phone ---

const PHONE_NUMBER = '--- --- ---';

export const PHONE = {
    number: PHONE_NUMBER,
    numberPL: `+48 ${PHONE_NUMBER}`,
} as const;

// --- Email ---

export const EMAIL = 'rod.stokrotka.sanok@gmail.com';

// --- Address ---

export const ADDRESS = {
    street: 'Wolna 12/8',
    town: 'Sanok',
    postalCode: '38-500',
} as const;

const FULL_ADDRESS = `ul. ${ADDRESS.street}, ${ADDRESS.postalCode} ${ADDRESS.town}` as const;

// --- Contact Links ---

export const CONTACT_LINKS = {
    CALL: `tel:${PHONE.number.replaceAll(/\s/g, '')}`,
    MAIL: `mailto:${EMAIL}`,
    ADDRESS_ON_MAP: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(FULL_ADDRESS)}`,
    GOOGLE_BUSINESS: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${ASSOCIATION_NAME}, ${FULL_ADDRESS}`)}`,
    DIRECTIONS: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`${ASSOCIATION_NAME}, ${FULL_ADDRESS}`)}`,
} as const;
