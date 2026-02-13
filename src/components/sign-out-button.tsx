'use client';

import { signOut } from 'next-auth/react';
import { LogOut } from 'lucide-react';

export function SignOutButton() {
    return (
        <button
            onClick={() => signOut({ callbackUrl: '/sign-in' })}
            className="btn btn-md btn-theme"
        >
            Wyloguj
            <LogOut />
        </button>
    );
}
