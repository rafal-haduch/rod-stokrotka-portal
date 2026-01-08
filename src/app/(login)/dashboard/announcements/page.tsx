export default async function DashboardAnnouncementsPage() {
    return (
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
    );
}
