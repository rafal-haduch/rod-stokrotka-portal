import MainHeaderLineSeparator from '@/components/MainHeaderLineSeparator';
import WorkInProgress from '@/components/WorkInProgress';

export default function Dashboard() {
    return (
        /* 	
		if (user.role === 'admin') showAdminSections();
		else if (user.role === 'treasurer') showTreasurerSections();
		else showUserSections(); 
		*/
        <article>
            <h1>Moje Konto</h1>
            <MainHeaderLineSeparator />
            <h2>Imię i nazwisko</h2>
            <section>
                <WorkInProgress />
            </section>
        </article>
    );
}
