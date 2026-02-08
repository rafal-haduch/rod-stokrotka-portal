import Link from 'next/link';

import { AppRoute, ROUTE_LIST } from '@/constants/routes';

import MainHeaderLineSeparator from '@/components/main-header-line-separator';

const routes = ROUTE_LIST as AppRoute[];
const navItems = routes
    .filter((r) => r.dashboardNav)
    .sort((a, b) => a.dashboardNav!.order - b.dashboardNav!.order);

export default function DashboardPanelHeader() {
    return (
        <header className="bg-theme-ui-bg-light relative mx-auto mb-4 flex w-full max-w-5xl flex-col justify-between rounded-lg p-4 shadow-md">
            {/* Top Section */}
            <div className="w-full">
                <Link href="/dashboard">
                    <h1>Panel Zarządu</h1>
                </Link>
            </div>
            <MainHeaderLineSeparator />
            {/* Bottom Section */}
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
