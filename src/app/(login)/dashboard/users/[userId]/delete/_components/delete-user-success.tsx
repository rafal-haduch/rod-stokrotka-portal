import Link from 'next/link';
import { ArrowBigLeft } from 'lucide-react';

import { ROUTES } from '@/constants/routes';

export default function DeleteUserSuccess() {
    return (
        <>
            <h3 className="mb-8 text-center text-green-500">Konto zostało usunięte z systemu</h3>
            <Link href={ROUTES.DASHBOARD_USERS.path} className="btn btn-sm btn-theme mx-auto">
                <ArrowBigLeft /> Wróć do tabeli działkowców
            </Link>
        </>
    );
}
