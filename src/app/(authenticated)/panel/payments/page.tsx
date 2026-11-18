import { SEO } from '@/config/seo';

export const metadata = SEO.PANEL_PAYMENTS;

export default async function CMSPaymentsPage() {
    return (
        <section>
            <h2>Płatności</h2>

            <table className="w-full text-xs md:text-sm lg:text-lg">
                <thead>
                    <tr>
                        <th>Nr działki</th>
                        <th>Osoba</th>
                        <th>Kwota</th>
                        <th>Status</th>
                        <th>Dodaj wpłatę</th>
                        <th>Cofnij wpłatę</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </section>
    );
}
