import { SEO } from '@/config/seo';

import GardenMapSection from '@/app/(marketing)/mapa-ogrodu/_components/garden-map-section';

export const metadata = SEO.GARDEN_MAP;

export default function GardenMapPage() {
    return <GardenMapSection />;
}
