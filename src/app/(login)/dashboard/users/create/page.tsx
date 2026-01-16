import { plotRepository } from '@/domain/plot/plot.repository';
import CreateUserForm from './_components/create-user-form';

export default async function CreateUserPage() {
    //REVIEW: czy wydobrebnic funkcje w katalogu domain ktora pobiera i sortuje liste dzialek?
    const plotsListDb = (await plotRepository.getPlotsList()).sort((a, b) =>
        a.plotNumber.localeCompare(b.plotNumber, 'pl', {
            numeric: true,
            sensitivity: 'base',
        })
    );

    return (
        <section>
            <h2>Dodaj nowe konto</h2>

            <CreateUserForm plots={plotsListDb} />
        </section>
    );
}
