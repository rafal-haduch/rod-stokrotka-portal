import { getUserSession } from '@/utils/getUserSession';
import { getRoleLabel } from '@/utils/getRoleLabel';

export default async function DashboardPage() {
    const user = await getUserSession();

    return (
        <article>
            <section>
                <h2>Panel Zarządu</h2>
                <p>
                    Jesteś zalogowany jako <span className="font-bold">{user.name}</span> z rolą{' '}
                    <span className="font-bold">{getRoleLabel(user.role)}</span>. W tym miejscu na
                    podstawie roli są dostępne zakładki, które umożliwiają zarządzanie
                    poszczególnymi danymi Stowarzyszenia Ogrodowego ,,Stokrotka" w Sanoku w celu
                    prowadzenia ewidencji.
                </p>
            </section>
        </article>
    );
}
