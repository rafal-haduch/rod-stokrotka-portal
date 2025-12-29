import { redirect } from 'next/navigation';

import { prisma } from '@/lib/prisma';
import { getUserSession } from '@/utils/getUserSession';

import MainHeaderLineSeparator from '@/components/MainHeaderLineSeparator';

export default async function UserPanelPage() {
    const user = await getUserSession();
    if (!user) redirect('/sign-in');

    const userData = await prisma.user.findUnique({
        where: { id: user.id },
        include: {
            plots: true,
        },
    });
    if (!userData) redirect('/sign-in');

    return (
        <article>
            <h1>Witaj, {userData.name}</h1>
            <MainHeaderLineSeparator />
            <h2>Twoje działki</h2>

            <section>
                {userData.plots.length === 0 && <p>Brak przypisanych działek</p>}

                {userData.plots.map((plot) => (
                    <div key={plot.id}>
                        Działka #{plot.number} – {plot.area} m²
                    </div>
                ))}
            </section>
        </article>
    );
}
