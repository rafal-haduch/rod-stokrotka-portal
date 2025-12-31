'use client';

import { signOut } from 'next-auth/react';
import { LogOut } from 'lucide-react';

export default function SignOutButton() {
    return (
        <button
            onClick={() => signOut({ callbackUrl: '/sign-in' })}
            className="button-icon mr-2 px-2 py-1"
        >
            Wyloguj
            <LogOut />
        </button>
    );
}
