'use client';

import Link from 'next/link';
import { ArrowLeft, CircleUserRound, LayoutDashboard, X } from 'lucide-react';

import { AppRouteBase, ROUTE_LIST, ROUTES } from '@/constants/routes';
import { usePathname } from 'next/navigation';
import { cn } from '@/utils/cn';
import { useState } from 'react';

const routes = ROUTE_LIST as AppRouteBase[];
const navItems = routes
    .filter((r) => r.dashboardNav)
    .sort((a, b) => a.dashboardNav!.order - b.dashboardNav!.order);

export default function DashboardPanelHeader() {
    const path = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header
            aria-label="Panel zarządzania dla czlonków zarządu Stowarzyszenia Ogrodowego Stokrotka w Sanoku"
            className="panel-br relative mx-auto mb-4 flex w-full max-w-5xl flex-col justify-between rounded-lg p-4 shadow-md"
        >
            <div className="flex w-full items-center justify-center text-5xl">
                <Link href="/dashboard">
                    <p
                        id="dashboard-context-heading"
                        className="font-heading text-center text-4xl font-semibold sm:text-5xl md:text-6xl"
                    >
                        Panel Zarządu
                    </p>
                </Link>
            </div>

            <Link href={ROUTES.MY_PROFILE.path} className="btn btn-md btn-theme mx-auto my-4">
                <ArrowLeft /> <span className="hidden sm:flex">Wróc do mojego profilu </span>
                <span className="flex sm:hidden">Mój profil </span>
                <CircleUserRound />
            </Link>

            {/* Desktop menu */}
            <nav aria-label="Nawigacja panelu do zarządzania" className="hidden sm:flex">
                <ul className="font-nav flex flex-wrap justify-center gap-x-6 gap-y-3 font-semibold">
                    {navItems.map((item) => (
                        <li
                            key={item.path}
                            className={cn('hover:underline', path === item.path ? 'underline' : '')}
                        >
                            <Link href={item.path}>{item.dashboardNav?.label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Hamburger button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Przycisk do rozwijania mobilnego menu"
                className={cn(
                    'text-theme-txt',
                    'flex flex-col items-center justify-center hover:cursor-pointer sm:hidden'
                )}
            >
                <div className="relative flex h-8 w-8 flex-col items-center justify-center">
                    <span
                        className={cn(
                            'absolute h-1 w-8',
                            'bg-theme-txt',
                            'transition-transform duration-300 ease-in-out',
                            isOpen ? 'translate-y-0 rotate-45' : '-translate-y-2'
                        )}
                    />
                    <span
                        className={cn(
                            'absolute h-1 w-8',
                            'bg-theme-txt',
                            'transition-opacity duration-200 ease-in-out',
                            isOpen ? 'opacity-0' : 'opacity-100'
                        )}
                    />
                    <span
                        className={cn(
                            'absolute h-1 w-8',
                            'bg-theme-txt',
                            'transition-transform duration-300 ease-in-out',
                            isOpen ? 'translate-y-0 -rotate-45' : 'translate-y-2'
                        )}
                    />
                </div>
            </button>

            {/* Mobile menu */}
            {isOpen && (
                <nav
                    aria-label="Nawigacja panelu do zarządzania"
                    className="panel-br fixed inset-0 z-40 my-22 h-fit w-full bg-linear-to-l pb-12 shadow-xl sm:hidden"
                >
                    <button
                        onClick={() => setIsOpen(false)}
                        aria-label="Przycisk do zamykania mobilnego menu"
                        className="ml-auto flex p-4 hover:cursor-pointer"
                    >
                        <X className="text-theme-txt h-10 w-10" />
                    </button>

                    <ul className="font-nav mx-auto items-center justify-center space-y-6 gap-x-6 text-center font-semibold">
                        {navItems.map((item) => (
                            <li
                                key={item.path}
                                className={cn(
                                    'hover:underline',
                                    path === item.path ? 'underline' : ''
                                )}
                            >
                                <Link href={item.path}>{item.dashboardNav?.label}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </header>
    );
}
