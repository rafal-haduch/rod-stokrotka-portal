import MainHeaderLineSeparator from '@/components/MainHeaderLineSeparator';
import WorkInProgress from '@/components/WorkInProgress';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

export default async function DashboardPage() {
    const session = await getServerSession(authOptions);

    if (!session) redirect('/login');

    return (
        <article>
            <h1>Moje Konto</h1>
            <MainHeaderLineSeparator />
            <h2>Imię i nazwisko</h2>
            <section>
                <WorkInProgress />
            </section>
        </article>
    );
}
