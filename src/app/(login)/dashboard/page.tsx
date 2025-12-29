import MainHeaderLineSeparator from '@/components/MainHeaderLineSeparator';
import WorkInProgress from '@/components/WorkInProgress';
import { redirect } from 'next/navigation';
import { getUserSession } from '@/utils/getUserSession';

export default async function DashboardPage() {
    const user = await getUserSession();
    if (!user) redirect('/sign-in');

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
