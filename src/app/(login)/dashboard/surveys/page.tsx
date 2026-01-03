import { prisma } from '@/lib/prisma';
import { Pencil, Plus, Trash2 } from 'lucide-react';
import Link from 'next/link';

export default async function DashboardSurveysPage() {
    //const plots = await prisma.plot.findMany();

    return (
        <article>
            <section>
                <h2>Ankiety</h2>
            </section>
        </article>
    );
}
