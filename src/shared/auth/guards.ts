import { redirect } from 'next/navigation';
import { UserRole } from '@prisma/client';

import { ROUTES } from '@/shared/config/routes';
import { getUserSession } from '@/shared/lib/next-auth/get-user-session';
import { isAdminOrBoard } from '@/shared/auth/is-admin-or-board';

//REVIEW: czy to nie powinno jakims typem z konfiguracji next auth?
export interface UserSession {
    name: string;
    id: number;
    role: UserRole;
}

/**
 * Ensures a user session exists. Redirects to login if not.
 * @returns {Promise<UserSession>} The current user session.
 */
export async function requireSession(): Promise<UserSession> {
    const session = await getUserSession();

    if (!session || !session.role || !session.id || !session.name) {
        redirect(ROUTES.LOGIN.path);
    }

    return {
        id: session.id,
        name: session.name,
        role: session.role,
    };
}

/**
 * Ensures the user has admin or board role. Redirects to profile if not.
 * @param {UserRole} role - The role of the current user.
 */
export function requireAdminOrBoardRole(role: UserRole) {
    if (!isAdminOrBoard(role)) {
        redirect(ROUTES.MY_PROFILE.path);
    }
}
