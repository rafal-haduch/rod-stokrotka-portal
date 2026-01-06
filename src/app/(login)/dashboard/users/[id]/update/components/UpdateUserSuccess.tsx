import Link from 'next/link';
import { ArrowBigLeft } from 'lucide-react';

import { ROUTES } from '@/constants/routes';

export default function UpdateUserSuccess() {
    return (
        <>
            <h3 className="text-center text-green-500">Dane zostały zmienione</h3>
            <Link href={ROUTES.USERS_DASHBOARD.path} className="btn btn-sm btn-theme mx-auto">
                <ArrowBigLeft /> Wróć do tabeli działkowców
            </Link>
        </>
    );
}
