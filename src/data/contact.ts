import { COMPANY_NAME } from '@/data/site-and-company';

// --- Phone ---

const PHONE_NUMBER = '123 123 123' as const;

export const PHONE = {
    number: PHONE_NUMBER,
    numberPL: `+48 ${PHONE_NUMBER}`,
} as const;

// --- Email ---

export const EMAIL = 'EMAIL@DOMENA.PL' as const;

// --- Address ---

export const ADDRESS = {
    street: 'STREET_NAME',
    town: 'TOWN',
    postalCode: '12-345',
} as const;

const FULL_ADDRESS = `${ADDRESS.street}, ${ADDRESS.postalCode} ${ADDRESS.town}`;

// --- Contact Links ---

export const CONTACT_LINKS = {
    CALL: `tel:${PHONE.number.replaceAll(/\s/g, '')}`,
    MAIL: `mailto:${EMAIL}`,
    ADDRESS_ON_MAP: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(FULL_ADDRESS)}`,
    GOOGLE_BUSINESS: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${COMPANY_NAME}, ${FULL_ADDRESS}`)}`,
    DIRECTIONS: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`${COMPANY_NAME}, ${FULL_ADDRESS}`)}`,
} as const;
