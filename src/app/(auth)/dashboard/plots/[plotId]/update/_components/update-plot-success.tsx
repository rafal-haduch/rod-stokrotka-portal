import Link from 'next/link';
import { ArrowBigLeft } from 'lucide-react';

import { ROUTES } from '@/config/routes';

export default function UpdatePlotSuccess() {
    return (
        <>
            <h3 className="mb-8 text-center text-green-500">Dane zostały zmienione</h3>
            <Link href={ROUTES.DASHBOARD_PLOTS.path} className="btn btn-sm btn-theme mx-auto">
                <ArrowBigLeft /> Wróć do tabeli działek
            </Link>
        </>
    );
}
