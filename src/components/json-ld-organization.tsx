import Script from 'next/script';

//TODO: data
export function JsonLdOrganization() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'Organization',
                name: 'Rodzinne Ogrody Działkowe „Stokrotka” w Sanoku',
                url: 'https://rod-stokrotka-sanok.vercel.app',
                logo: 'https://rod-stokrotka-sanok.vercel.app/logo.png',
                email: '...',
                telephone: '...',
                address: {
                    '@type': 'PostalAddress',
                    streetAddress: 'ul. Wolna 12/8',
                    addressLocality: 'Sanok',
                    postalCode: '38-500',
                    addressCountry: 'PL',
                },
            },
            {
                '@type': 'WebSite',
                name: 'Rodzinne Ogrody Działkowe „Stokrotka” w Sanoku',
                url: 'https://rod-stokrotka-sanok.vercel.app',
            },
        ],
    };

    return (
        <Script
            id="json-ld-organization"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
