import { redirect } from 'next/navigation';

import { getUserSession } from '@/lib/auth/get-user-session';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { ROUTES } from '@/constants/routes';

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
