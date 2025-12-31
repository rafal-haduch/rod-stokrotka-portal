import { Role } from '@prisma/client';
import { User } from 'next-auth';
import Link from 'next/link';

import SignOutButton from './SignOutButton';
import { CircleUserRound } from 'lucide-react';

export default function UserPanelHeader({ user }: { user: User }) {
    const isDashboardAvailable =
        user.role === Role.ADMIN ||
        user.role === Role.PRESIDENT ||
        user.role === Role.DEPUTY_PRESIDENT ||
        user.role === Role.SECRETARY ||
        user.role === Role.TREASURER ||
        user.role === Role.BOARD_MEMBER;

    return (
        <section className="bg-theme-ui-bg-light relative mx-auto flex w-full max-w-5xl flex-col justify-between rounded-lg p-4 shadow-md">
            {/* Górny pasek */}
            <div className="flex w-full items-center justify-between">
                {/* Ikona po lewej */}
                <CircleUserRound size={128} className="ml-2" />

                {/* Powitanie na środku */}
                <h1 className="absolute left-1/2 -translate-x-1/2 font-bold">Witaj {user.name}</h1>

                {/* Przycisk wylogowania po prawej */}
                <SignOutButton />
            </div>

            {/* Dolny pasek menu */}
            <nav className="w-full">
                <ul className="border-theme-hr flex justify-around border-t py-2">
                    <li>
                        <Link href="/user-panel" className="hover:text-theme-ui-accent">
                            Mój profil
                        </Link>
                    </li>
                    <li>
                        <Link href="/user-payments" className="hover:text-theme-ui-accent">
                            Opłaty
                        </Link>
                    </li>
                    <li>
                        <Link href="/surveys" className="hover:text-theme-ui-accent">
                            Ankiety
                        </Link>
                    </li>
                    {isDashboardAvailable && (
                        <li>
                            <Link href="/dashboard" className="hover:text-theme-ui-accent">
                                Panel Administracyjny
                            </Link>
                        </li>
                    )}
                </ul>
            </nav>
        </section>
    );
}
