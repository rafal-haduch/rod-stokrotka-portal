import { redirect } from 'next/navigation';

import { ROUTES } from '@/constants/routes';

import { getUserSession } from '@/lib/auth/get-user-session';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export default async function LoggedLayout({ children }: { children: React.ReactNode }) {
    const session = await getUserSession();
    if (!session) redirect(ROUTES.LOGIN.path);

    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}
