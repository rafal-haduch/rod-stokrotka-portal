import Link from 'next/link';
import { ArrowBigLeft } from 'lucide-react';

import { ROUTES } from '@/shared/config/routes';

export default function ChangePasswordSuccess() {
    return (
        <>
            <h3 className="mb-8 text-center text-green-500">Hasło zostało zmienione</h3>
            <Link href={ROUTES.MY_PROFILE.path} className="btn btn-sm btn-theme mx-auto">
                <ArrowBigLeft /> Ok
            </Link>
        </>
    );
}
