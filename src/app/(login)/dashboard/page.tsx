import { getUserSession } from '@/utils/getUserSession';
import { getRoleLabel } from '@/utils/getRoleLabel';

export default async function DashboardPage() {
    const user = await getUserSession();

    return (
        <section>
            <h2>Panel Zarządu</h2>
            <p>
                Jesteś zalogowany jako <strong>{user.name}</strong> z rolą{' '}
                <strong>{getRoleLabel(user.role)}</strong>. W tym miejscu na podstawie roli są
                dostępne zakładki, które umożliwiają zarządzanie poszczególnymi danymi
                Stowarzyszenia Ogrodowego ,,Stokrotka" w Sanoku w celu prowadzenia ewidencji.
            </p>
        </section>
    );
}
