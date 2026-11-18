import type { ReactNode } from 'react';

import { requireSession } from '@/shared/auth/guards';

//REVIEW:
export const dynamic = 'force-dynamic';

export default async function LoggedLayout({ children }: { children: ReactNode }) {
    await requireSession();

    return <>{children}</>;
}
