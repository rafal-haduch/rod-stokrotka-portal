import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { LogIn, User } from 'lucide-react';

import { ROUTES } from '@/config/routes';

interface SignInOrMyAccountLinkProps {
    /**
     * Called when the link is clicked. In the mobile menu, use this to close
     * the menu before navigating to the sign-in or account page.
     */
    onClick?: () => void;
}

export default function SignInOrMyAccountLink({ onClick }: SignInOrMyAccountLinkProps) {
    const { status } = useSession();
    const isLoggedIn = status === 'authenticated';

    return isLoggedIn ? (
        <Link
            href={ROUTES.MY_ACCOUNT.path}
            title="Moje konto"
            onClick={onClick}
            className="cursor-pointer font-serif text-white hover:underline"
        >
            <User size={64} />
        </Link>
    ) : (
        <Link
            href={ROUTES.LOGIN.path}
            title="Zaloguj się"
            onClick={onClick}
            className="cursor-pointer font-serif text-white hover:underline"
        >
            <LogIn size={64} />
        </Link>
    );
}
