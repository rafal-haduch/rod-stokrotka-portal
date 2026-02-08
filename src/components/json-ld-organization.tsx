import Script from 'next/script';

export default function JsonLdOrganization() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'Organization',
                name: 'Rodzinne Ogrody Działkowe „Stokrotka” w Sanoku',
                url: 'https://rod-stokrotka-sanok.vercel.app',
                logo: 'https://rod-stokrotka-sanok.vercel.app/logo.png',
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
