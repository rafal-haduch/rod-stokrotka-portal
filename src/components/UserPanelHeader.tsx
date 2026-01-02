import { User } from 'next-auth';
import Link from 'next/link';
import { CircleUserRound, LayoutDashboard } from 'lucide-react';

import { isAdminOrBoard } from '@/utils/rolePermissions';

import SignOutButton from './SignOutButton';
import MainHeaderLineSeparator from './MainHeaderLineSeparator';

export default function UserPanelHeader({ user }: { user: User }) {
    const isDashboardAvailable = isAdminOrBoard(user.role);

    return (
        <header className="bg-theme-bg-secondary relative mx-auto flex w-full max-w-5xl flex-col justify-between rounded-lg p-4 shadow-md">
            {/* Top Section */}
            <div className="flex w-full items-center justify-between">
                <CircleUserRound size={128} className="text-theme-hr ml-2" />

                <h1 className="absolute left-1/2 -translate-x-1/2 font-bold">Witaj {user.name}</h1>

                <SignOutButton />
            </div>
            <MainHeaderLineSeparator />
            {/* Bottom Section */}
            <nav className="w-full">
                <ul className="flex justify-around">
                    <li>
                        <Link href="/my-profile" className="hover:underline">
                            Mój profil
                        </Link>
                    </li>
                    <li>
                        <Link href="/user-payments" className="hover:underline">
                            Moje Płatności
                        </Link>
                    </li>
                    <li>
                        <Link href="/surveys" className="hover:underline">
                            Ankiety
                        </Link>
                    </li>
                    {isDashboardAvailable && (
                        <li>
                            <Link href="/dashboard" className="flex hover:underline">
                                <LayoutDashboard /> Panel Zarządu
                            </Link>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    );
}
