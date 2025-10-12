import MainHeaderLineSeparator from '@/components/MainHeaderLineSeparator';
import LoginForm from './components/LoginForm';
import SectionLineSeparator from '@/components/SectionLineSeparator';
import ImageSeparator from '@/components/ImageSeparator';

export default function SignInPage() {
    return (
        <article className="prose mx-auto">
            <section>
                <LoginForm />
            </section>
            <SectionLineSeparator />
            <section>
                <h2>Jak się zalogować?</h2>
                <p>
                    *Logowanie jest dostępne tylko dla członków Stowarzyszenia Ogrodowego
                    ,,Stokrotka'' Sanok
                </p>
            </section>
            <ImageSeparator />
        </article>
    );
}
