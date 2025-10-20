import Script from 'next/script';

export default function JsonLdOrganization() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'ROD Stokrotka Sanok',
        url: 'https://rod-stokrotka-sanok.vercel.app',
        logo: 'https://rod-stokrotka-sanok.vercel.app/logo.png',
    };

    return (
        <Script
            id="json-ld-organization"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
