import Link from 'next/link';
import { ArrowBigLeft } from 'lucide-react';

import { ROUTES } from '@/shared/config/routes';

export default function DeletePlotSuccess() {
    return (
        <>
            <h3 className="mb-8 text-center text-green-500">Działka została usunięta z systemu</h3>
            <Link href={ROUTES.DASHBOARD_PLOTS.path} className="btn btn-sm btn-theme mx-auto">
                <ArrowBigLeft /> Wróć do tabeli działek
            </Link>
        </>
    );
}
