import { prisma } from '@/lib/prisma';
import { Pencil, Plus, Trash2 } from 'lucide-react';
import Link from 'next/link';

export default async function DashboardPaymentsPage() {
    //const plots = await prisma.plot.findMany();

    return (
        <article>
            <section>
                <h2>Płatności</h2>

                <table className="w-full text-xs md:text-sm lg:text-lg">
                    <thead>
                        <tr>
                            <th>Rok</th>
                            <th>Działka</th>
                            <th>Status</th>
                            <th>Kwota</th>
                            <th>Data</th>
                            <th>Sposób</th>
                            <th>Powierzchnia</th>
                            <th>Nieczystości</th>
                            <th>Składka</th>
                            <th>Energia</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
            </section>
        </article>
    );
}
