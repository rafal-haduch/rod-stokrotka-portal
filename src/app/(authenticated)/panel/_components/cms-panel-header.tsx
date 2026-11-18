'use client';

import Link from 'next/link';
import { ArrowLeft, CircleUserRound, X } from 'lucide-react';

import { PANEL_NAV_ITEMS, ROUTES } from '@/config/routes';
import { usePathname } from 'next/navigation';
import { cn } from '@/shared/utils/cn';
import { useEffect, useState } from 'react';
import { CustomButton } from '@/components/custom-button';

export function CMSPanelHeader() {
    const path = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    // Closed mobile menu at sm break point
    useEffect(() => {
        const mediaQuery = window.matchMedia('(min-width: 640px)');

        const handleChange = (e: MediaQueryListEvent) => {
            if (e.matches) {
                setIsOpen(false);
            }
        };

        mediaQuery.addEventListener('change', handleChange);

        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    // Block scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        // Cleanup in case of component unmounting
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    return (
        <header
            aria-label="Panel zarządzania dla czlonków zarządu Stowarzyszenia Ogrodowego Stokrotka w Sanoku"
            className="panel surface-elevated mx-auto flex w-full max-w-5xl flex-col justify-between overflow-x-hidden p-4 pb-0 sm:pb-4"
        >
            <div>
                <Link href={ROUTES.PANEL.path}>
                    <p
                        id="cms-context-heading"
                        className="font-heading text-theme-ui-foreground-primary text-center text-4xl font-semibold sm:text-5xl md:text-6xl"
                    >
                        Panel Zarządzania
                    </p>
                </Link>
            </div>

            <CustomButton
                href={ROUTES.MY_ACCOUNT.path}
                size="md"
                variant="primary"
                className="mx-auto my-4"
            >
                <ArrowLeft /> <span className="hidden sm:flex">Wróc do mojego profilu </span>
                <span className="flex sm:hidden">Mój profil </span>
                <CircleUserRound />
            </CustomButton>

            {/* Desktop menu */}
            <nav aria-label="Nawigacja panelu do zarządzania" className="hidden sm:flex">
                <ul className="font-nav flex flex-wrap justify-center gap-x-6 gap-y-3 font-semibold">
                    {PANEL_NAV_ITEMS.map((item) => (
                        <li
                            key={item.path}
                            className={cn(
                                'hover:text-theme-on-surface-elevated-hover hover:underline',
                                path === item.path
                                    ? 'text-theme-on-surface-elevated-hover underline'
                                    : ''
                            )}
                        >
                            <Link href={item.path}>{item.label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Hamburger button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Przycisk do rozwijania mobilnego menu"
                className={cn(
                    'flex flex-col items-center justify-center hover:cursor-pointer sm:hidden',
                    isOpen ? 'invisible' : 'visible'
                )}
            >
                <div className="flex h-fit w-8 flex-col items-center justify-center gap-1">
                    <span className={cn('h-1 w-8', 'bg-theme-on-surface-elevated')} />
                    <span className={cn('h-1 w-8', 'bg-theme-on-surface-elevated')} />
                    <span className={cn('h-1 w-8', 'bg-theme-on-surface-elevated')} />
                </div>
                <span className="font-semibold">Menu</span>
            </button>

            {/* Mobile menu */}
            {isOpen && (
                <nav
                    aria-label="Mobilna Nawigacja w panelu do zarządzania"
                    className="fixed inset-0 z-60 flex items-center bg-black/50 bg-linear-to-l px-2 shadow-xl sm:hidden"
                >
                    <div className="panel surface-elevated z-60 h-fit w-full rounded-xl pb-12">
                        <button
                            onClick={() => setIsOpen(false)}
                            aria-label="Przycisk do zamykania mobilnego menu"
                            className="ml-auto flex p-4 hover:cursor-pointer"
                        >
                            <X className="text-theme-ui-foreground-primary h-10 w-10" />
                        </button>

                        <ul className="font-nav mx-auto items-center justify-center space-y-6 gap-x-6 text-center font-semibold">
                            {PANEL_NAV_ITEMS.map((item) => (
                                <li
                                    key={item.path}
                                    className={cn(
                                        'hover:text-theme-on-surface-elevated-hover hover:underline',
                                        path === item.path
                                            ? 'text-theme-on-surface-elevated-hover underline'
                                            : ''
                                    )}
                                >
                                    <Link href={item.path}>{item.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
            )}
        </header>
    );
}
