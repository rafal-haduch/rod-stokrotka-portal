import { buildMetadata } from '@/shared/lib/metadata';

import { ROUTES } from '@/shared/config/routes';

import { NotFoundContent } from '@/components/not-found-content';

export const metadata = buildMetadata(ROUTES.MY_SURVEYS);

export default function SurveysUserPage() {
    return (
        <section>
            <h2>Ankiety</h2>
            <NotFoundContent />
        </section>
    );
}
