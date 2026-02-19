'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';
import { CircleUserRound, LayoutDashboard, LogOut } from 'lucide-react';

import { cn } from '@/utils/cn';

import { AppRouteBase, ROUTE_LIST, ROUTES } from '@/config/routes';

import { isAdminOrBoard } from '@/domain/user/user.helpers';

const routes = ROUTE_LIST as AppRouteBase[];
const navItems = routes
    .filter((r) => r.profileNav)
    .sort((a, b) => a.profileNav!.order - b.profileNav!.order);

export default function UserPanelHeader() {
    const pathname = usePathname();

    const { data } = useSession();
    //REVIEW: async or some template or loading?
    if (!data?.user) return null;

    const user = data.user;
    const isDashboardAvailable = isAdminOrBoard(user.role);

    return (
        <header
            aria-label="Panel profilu działkowca"
            className="panel-br relative mx-auto mb-8 flex w-full max-w-5xl flex-col justify-between overflow-x-hidden rounded-lg p-4 shadow-md"
        >
            {/* First row */}
            <div className="flex w-full items-stretch justify-between">
                <CircleUserRound className="text-theme-hr hidden h-auto w-34 sm:flex" />
                <div className="flex w-full flex-col items-center justify-center gap-2 sm:w-full sm:flex-row sm:items-stretch sm:justify-between">
                    <div className="flex w-full items-center">
                        <p
                            id="user-context-heading"
                            className="font-heading w-full text-center text-5xl font-semibold md:text-6xl"
                        >
                            Witaj <span className="whitespace-nowrap">{user.name}</span>
                        </p>
                    </div>
                    <div className="flex items-center justify-evenly gap-6 sm:flex-col sm:items-end sm:gap-2">
                        <button
                            onClick={() => signOut({ callbackUrl: ROUTES.LOGIN.path })}
                            title="Wyloguj się"
                            className="btn btn-sm btn-theme"
                        >
                            Wyloguj <span className="hidden sm:flex">się</span>
                            <LogOut />
                        </button>
                        {isDashboardAvailable && (
                            <Link
                                href={ROUTES.DASHBOARD.path}
                                title="Panel zarządu"
                                className="btn btn-sm btn-theme"
                            >
                                Panel <span className="hidden sm:flex">zarządu</span>
                                <LayoutDashboard />
                            </Link>
                        )}
                    </div>
                </div>
            </div>

            <div
                aria-hidden="true"
                className="border-theme-hr mx-auto my-4 w-2/3 max-w-sm border-t-4"
            />

            {/* Second row */}
            <nav aria-label="Nawigacja panelu działkowca" className="font-nav py-0 sm:py-2 md:py-4">
                <ul className="flex flex-wrap justify-around gap-4 text-base font-semibold whitespace-nowrap sm:text-lg">
                    {navItems.map((item) => (
                        <li
                            key={item.path}
                            className={cn(
                                'hover:underline',
                                pathname === item.path ? 'underline' : ''
                            )}
                        >
                            <Link href={item.path}>{item.profileNav?.label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
