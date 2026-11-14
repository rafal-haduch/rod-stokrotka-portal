'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';
import { CircleUserRound, LayoutDashboard, LogOut } from 'lucide-react';

import { cn } from '@/shared/utils/cn';
import { ACCOUNT_NAV_ITEMS, ROUTES } from '@/config/routes';
import { isAdminOrBoard } from '@/shared/auth/is-admin-or-board';

import { CustomButton } from '@/components/custom-button';

export default function UserPanelHeader() {
    const pathname = usePathname();
    //FIXME: no types, add some helper function for session in frontend?
    const { data } = useSession();
    //REVIEW: async or some template or loading?
    if (!data?.user) return null;

    const user = data.user;
    const isCMSAvailable = isAdminOrBoard(user.role);

    return (
        <header
            aria-label="Panel profilu działkowca"
            className="panel surface-elevated mx-auto flex w-full max-w-5xl flex-col justify-between overflow-x-hidden p-4"
        >
            {/* First row */}
            <div className="flex w-full items-stretch justify-between">
                <CircleUserRound className="text-theme-ui-foreground-primary hidden h-auto w-34 sm:flex" />
                <div className="flex w-full flex-col items-center justify-center gap-2 sm:w-full sm:flex-row sm:items-stretch sm:justify-between">
                    <div className="flex w-full items-center">
                        <p
                            id="user-context-heading"
                            className="font-heading text-theme-ui-foreground-primary w-full text-center text-5xl font-semibold md:text-6xl"
                        >
                            Witaj <span className="whitespace-nowrap">{user.name}</span>
                        </p>
                    </div>
                    <div className="flex items-center justify-evenly gap-6 sm:flex-col sm:items-end sm:gap-2">
                        <CustomButton
                            type="button"
                            title="Wyloguj się"
                            onClick={() => signOut({ callbackUrl: ROUTES.LOGIN.path })}
                            size="sm"
                            variant="primary"
                        >
                            Wyloguj <span className="hidden sm:flex">się</span>
                            <LogOut />
                        </CustomButton>
                        {isCMSAvailable && (
                            <CustomButton
                                href={ROUTES.CMS.path}
                                title="Panel zarządu"
                                size="sm"
                                variant="primary"
                            >
                                Panel <span className="hidden sm:flex">zarządu</span>
                                <LayoutDashboard aria-hidden="true" />
                            </CustomButton>
                        )}
                    </div>
                </div>
            </div>

            <div
                aria-hidden="true"
                className="border-theme-ui-foreground-primary mx-auto my-4 w-2/3 max-w-sm border-t-4"
            />

            {/* Second row */}
            <nav aria-label="Nawigacja panelu działkowca" className="font-nav py-0 sm:py-2 md:py-4">
                <ul className="flex flex-wrap justify-around gap-4 text-base font-semibold whitespace-nowrap sm:text-lg">
                    {ACCOUNT_NAV_ITEMS.map((item) => (
                        <li
                            key={item.path}
                            className={cn(
                                'hover:text-theme-on-surface-elevated-hover hover:underline',
                                pathname === item.path
                                    ? 'text-theme-on-surface-elevated-hover underline'
                                    : ''
                            )}
                        >
                            <Link href={item.path}>{item.label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
