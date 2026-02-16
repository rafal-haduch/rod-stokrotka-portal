import Link from 'next/link';
import { ArrowLeft, CircleUserRound, LayoutDashboard } from 'lucide-react';

import { AppRouteBase, ROUTE_LIST, ROUTES } from '@/constants/routes';

import { MainHeadingLineSeparator } from '@/components/main-heading-line-separator';

const routes = ROUTE_LIST as AppRouteBase[];
const navItems = routes
    .filter((r) => r.dashboardNav)
    .sort((a, b) => a.dashboardNav!.order - b.dashboardNav!.order);

export default function DashboardPanelHeader() {
    return (
        <header
            aria-label="Panel zarządzania dla czlonków zarządu Stowarzyszenia Ogrodowego Stokrotka w Sanoku"
            className="bg-theme-ui-bg-light relative mx-auto mb-4 flex w-full max-w-5xl flex-col justify-between rounded-lg p-4 shadow-md"
        >
            {/* First row*/}
            <div className="flex w-full items-center justify-center text-5xl">
                <Link href="/dashboard" className="flex items-center gap-2 hover:underline">
                    <LayoutDashboard className="hidden h-10 w-10 sm:flex" />
                    <span className="font-heading text-center text-4xl font-semibold sm:text-5xl md:text-6xl">
                        Panel Zarządu
                    </span>
                </Link>
            </div>

            <div
                aria-hidden="true"
                className="border-theme-hr mx-auto my-4 w-2/3 max-w-sm border-t-4"
            />

            <Link href={ROUTES.MY_PROFILE.path} className="btn btn-md btn-theme mx-auto mb-8">
                <ArrowLeft /> <span className="hidden sm:flex">Wróc do mojego profilu </span>
                <span className="flex sm:hidden">Mój profil </span>
                <CircleUserRound />
            </Link>

            {/* Second row*/}
            <nav>
                <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3">
                    {navItems.map((item) => (
                        <li key={item.path} className="hover:underline">
                            <Link href={item.path}>{item.dashboardNav?.label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
