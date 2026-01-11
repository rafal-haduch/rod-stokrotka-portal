import { wasteCollectionSchedule } from '@/content/data/waste-collection-schedule';

export default function WasteScheduleSection() {
    return (
        <section>
            <h3 className="text-center">Harmonogram wywozu odpadów komunalnych na 2025 rok</h3>
            <table className=" max-w-2xl sm:table-fixed">
                <thead>
                    <tr>
                        <th>Miesiąc</th>
                        <th>Mieszane</th>
                        <th>Segregowane</th>
                    </tr>
                </thead>
                <tbody>
                    {wasteCollectionSchedule.map((item, i) => (
                        <tr key={i}>
                            <td>{item.month}</td>
                            <td>{item.mixedWasteCollectionDay.join(', ')}</td>
                            <td>{item.sortedWasteCollectionDay.join(', ')}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}
