import { redirect } from 'next/navigation';
import Link from 'next/link';
import { KeyRound } from 'lucide-react';

import { prisma } from '@/lib/prisma';

import { getUserSession } from '@/utils/getUserSession';
import { getRoleLabel } from '@/utils/getRoleLabel';

export default async function MyProfilePage() {
    const user = await getUserSession();
    if (!user) redirect('/sign-in');

    const userData = await prisma.user.findUnique({
        where: { id: Number(user.id) },
        include: {
            plots: true,
        },
    });
    //REVIEW: zmienic na błąd?
    if (!userData) redirect('/sign-in');

    return (
        <article>
            <h2>Mój profil</h2>
            <section>
                <form className="bg-theme-bg-secondary mx-auto max-w-lg space-y-4 rounded-lg p-6 shadow-md">
                    {/* Name */}
                    <div className="flex space-x-1">
                        <label className="text-theme-txt">Imię: </label>
                        <span className="text-theme-txt-secondary">{userData.name}</span>
                    </div>

                    {/* Role */}
                    <div className="flex space-x-1">
                        <label className="text-theme-txt">Rola: </label>
                        <span className="text-theme-txt-secondary">
                            {getRoleLabel(userData.role)}
                        </span>
                    </div>

                    {/* Login */}
                    <div className="flex space-x-1">
                        <label className="text-theme-txt">Login: </label>
                        <span className="text-theme-txt-secondary">{userData.login}</span>
                    </div>

                    {/* Password */}
                    <div className="flex space-x-1">
                        <label className="text-theme-txt">Hasło: </label>
                        <Link
                            href="/change-password"
                            className="flex underline"
                            title="Kliknij aby zmienić swoje hasło"
                        >
                            Zmień hasło <KeyRound />
                        </Link>
                    </div>

                    {/* Plots */}
                    <div className="flex space-x-1">
                        <label className="text-theme-txt">Działki: </label>
                        <div className="text-theme-txt-secondary">
                            {userData.plots.length === 0
                                ? 'Brak przypisanych działek'
                                : userData.plots.map((plot) => (
                                      <div key={plot.id}>
                                          #{plot.number} – {plot.area} m²
                                      </div>
                                  ))}
                        </div>
                    </div>
                </form>
            </section>
        </article>
    );
}
