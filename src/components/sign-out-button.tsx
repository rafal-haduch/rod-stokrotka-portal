'use client';

import { signOut } from 'next-auth/react';
import { LogOut } from 'lucide-react';

import { ROUTES } from '@/constants/routes';

export function SignOutButton() {
    return (
        <button
            onClick={() => signOut({ callbackUrl: ROUTES.SIGN_IN.path })}
            className="btn btn-md btn-theme"
        >
            Wyloguj
            <LogOut />
        </button>
    );
}
