import CreateUserForm from './_components/create-user-form';
import { getSortedPlotsListFromDb } from '@/domain/shared/get-sorted-plots-list-from-db';

export default async function CreateUserPage() {
    const availablePlots = await getSortedPlotsListFromDb();

    return (
        <section>
            <h2>Dodaj nowe konto</h2>

            <CreateUserForm plotsOptions={availablePlots} />
        </section>
    );
}
