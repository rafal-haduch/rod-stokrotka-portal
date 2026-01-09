import { ROUTES } from '@/constants/routes';
import { ArrowBigLeft } from 'lucide-react';
import Link from 'next/link';

export default function ChangePasswordSuccess() {
    return (
        <>
            <h3 className="mb-8 text-center text-green-500">Haslo zostalo zmienione</h3>
            <Link href={ROUTES.DASHBOARD_PLOTS.path} className="btn btn-sm btn-theme mx-auto">
                <ArrowBigLeft /> Ok
            </Link>
        </>
    );
}
