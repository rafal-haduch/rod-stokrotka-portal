import { Role } from '@prisma/client';
import { LogOut } from 'lucide-react';
import { User } from 'next-auth';
import Link from 'next/link';

export default function UserPanelHeader({ user }: { user: User }) {
    const isDashboardAvailable =
        user.role === Role.ADMIN ||
        user.role === Role.PRESIDENT ||
        user.role === Role.DEPUTY_PRESIDENT ||
        user.role === Role.SECRETARY ||
        user.role === Role.TREASURER ||
        user.role === Role.BOARD_MEMBER;

    return (
        <section className="bg-theme-ui-bg-light w-full">
            <h1>Witaj {user.name}</h1>
            {isDashboardAvailable && <Link href="/dashboard">Panel Administracyjny</Link>}
            <button className="hover:cursor-pointer">
                Wyloguj <LogOut />
            </button>
        </section>
    );
}
