import { getMonthName } from '@/shared/utils/get-month-name';

import { wasteCollectionSchedule } from '@/content/waste-collection-schedule';

export default function WasteScheduleArticle() {
    const { year, dates } = wasteCollectionSchedule;
    const title = `Harmonogram wywozu odpadów komunalnych na ${year} rok`;

    return (
        <article>
            <h3 className="text-center">{title}</h3>

            <table className="max-w-2xl sm:table-fixed">
                <caption className="sr-only">{title}</caption>
                <thead>
                    <tr>
                        <th scope="col">Miesiąc</th>
                        <th scope="col">Mieszane</th>
                        <th scope="col">Segregowane</th>
                    </tr>
                </thead>
                <tbody>
                    {dates.map((item) => (
                        <tr key={item.month}>
                            <th scope="row">{getMonthName(item.month)}</th>
                            <td>{item.mixedWasteCollectionDays.join(', ')}</td>
                            <td>{item.sortedWasteCollectionDays.join(', ')}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </article>
    );
}
