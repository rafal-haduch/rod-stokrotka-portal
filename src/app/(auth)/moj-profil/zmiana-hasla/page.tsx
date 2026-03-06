import { buildMetadata } from '@/shared/lib/metadata';
import ChangePasswordForm from './_components/change-password-form';
import { ROUTES } from '@/shared/config/routes';

export const metadata = buildMetadata(ROUTES.CHANGE_PASSWORD);

export default function ChangePasswordPage() {
    return (
        <section>
            <h2>Zmień swoje haslo</h2>
            <ChangePasswordForm />
        </section>
    );
}
