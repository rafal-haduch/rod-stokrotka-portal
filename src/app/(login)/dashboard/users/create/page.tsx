import { prisma } from '@/lib/prisma';
import CreateUserForm, { PlotsListProp } from './components/CreateUserForm';

export default async function CreateUserPage() {
    const plotsDb = (
        await prisma.plot.findMany({
            select: {
                id: true,
                plotNumber: true,
            },
        })
    ).sort((a, b) =>
        a.plotNumber.localeCompare(b.plotNumber, 'pl', {
            numeric: true,
            sensitivity: 'base',
        })
    );

    return (
        <section>
            <h2>Dodaj nowe konto</h2>

            <CreateUserForm plots={plotsDb} />
        </section>
    );
}
