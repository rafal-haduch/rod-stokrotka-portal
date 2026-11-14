import { SEO } from '@/config/seo';

import ChangePasswordForm from './_components/change-password-form';

export const metadata = SEO.CHANGE_PASSWORD;

export default function ChangePasswordPage() {
    return (
        <section>
            <h2>Zmień swoje haslo</h2>
            <ChangePasswordForm />
        </section>
    );
}
