import { wasteCollectionSchedule } from '@/content/data/waste-collection-schedule';

export default function WasteScheduleArticle() {
    return (
        <article>
            <h3 className="text-center">Harmonogram wywozu odpadów komunalnych na 2025 rok</h3>

            <table className="max-w-2xl sm:table-fixed">
                <caption className="sr-only">
                    Harmonogram wywozu odpadów komunalnych na 2025 rok
                </caption>
                <thead>
                    <tr>
                        <th scope="col">Miesiąc</th>
                        <th scope="col">Mieszane</th>
                        <th scope="col">Segregowane</th>
                    </tr>
                </thead>
                <tbody>
                    {wasteCollectionSchedule.map((item) => (
                        <tr key={item.month}>
                            <th scope="row">{item.month}</th>
                            <td>{item.mixedWasteCollectionDay.join(', ')}</td>
                            <td>{item.sortedWasteCollectionDay.join(', ')}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </article>
    );
}
