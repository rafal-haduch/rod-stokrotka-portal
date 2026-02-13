import { User } from 'next-auth';
import Link from 'next/link';
import { CircleUserRound, LayoutDashboard } from 'lucide-react';

import { AppRoute, ROUTE_LIST, ROUTES } from '@/constants/routes';

import { isAdminOrBoard } from '@/domain/permissions/is-admin-or-board';

import { SignOutButton } from '@/components/sign-out-button';
import { MainHeadingLineSeparator } from '@/components/main-heading-line-separator';

const routes = ROUTE_LIST as AppRoute[];
const navItems = routes
    .filter((r) => r.profileNav)
    .sort((a, b) => a.profileNav!.order - b.profileNav!.order);

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
            <MainHeadingLineSeparator />
            {/* Bottom Section */}
            <nav className="w-full">
                <ul className="flex justify-around">
                    {navItems.map((item) => (
                        <li key={item.path} className="hover:underline">
                            <Link href={item.path}>{item.profileNav?.label}</Link>
                        </li>
                    ))}
                    {isDashboardAvailable && (
                        <li>
                            <Link href={ROUTES.DASHBOARD.path} className="flex hover:underline">
                                <LayoutDashboard /> Panel Zarządu
                            </Link>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    );
}
