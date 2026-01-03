import { prisma } from '@/lib/prisma';
import { Pencil, Plus, Trash2 } from 'lucide-react';
import Link from 'next/link';

export default async function DashboardAnnouncementsPage() {
    //const plots = await prisma.plot.findMany();

    return (
        <article>
            <section>
                <h2>Ogłoszenia</h2>

                <table className="w-full text-xs md:text-sm lg:text-lg">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Tytuł</th>
                            <th>Data</th>
                            <th>Treść</th>
                            <th>Autor</th>
                            <th>Modifikacja</th>
                            <th>Osoba</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
            </section>
        </article>
    );
}
