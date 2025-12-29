import MainHeaderLineSeparator from '@/components/MainHeaderLineSeparator';
import CreateUserForm from './components/CreateUserForm';

export default function CreateUserPage() {
    return (
        <article>
            <h1>Panel Administracyjny</h1>
            <MainHeaderLineSeparator />
            <h2>Dodaj nowego Działkowca</h2>
            <section>
                <CreateUserForm />
            </section>
        </article>
    );
}
