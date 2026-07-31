import { wasteCollectionSchedule } from '@/data/wasteCollectionSchedule';

export default function WasteScheduleSection() {
    return (
        <section>
            <h3 className="text-center">Harmonogram wywozu odpadów komunalnych na 2026 rok</h3>
            <table className="text-md mx-auto w-full max-w-2xl table-fixed text-center">
                <thead>
                    <tr>
                        <th className="w-1/3 px-3 py-2">Miesiąc</th>
                        <th className="w-1/3 px-3 py-2">Mieszane</th>
                        <th className="w-1/3 px-3 py-2">Segregowane</th>
                    </tr>
                </thead>
                <tbody>
                    {wasteCollectionSchedule.map((item, i) => (
                        <tr key={i} className="hover:bg-theme-bg-secondary">
                            <th className="font-medium">{item.month}</th>
                            <th className="font-medium">
                                {item.mixedWasteCollectionDay.join(', ')}
                            </th>
                            <th className="font-medium">
                                {item.sortedWasteCollectionDay.join(', ')}
                            </th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}
