import { typesOfFees } from '@/data/typesOfFees';
import { cn } from '@/utils/cn';

export default function FeesTypesTable() {
    return (
        <table className={cn('mx-auto mb-4 w-full max-w-xl', 'text-md text-center')}>
            <thead>
                <tr>
                    <th className="px-3 py-2">Rodzaje opłat</th>
                    <th className="px-3 py-2">Kwota</th>
                </tr>
            </thead>
            <tbody>
                {typesOfFees.map((item) => (
                    <tr key={item.fee} className="hover:bg-theme-bg-secondary">
                        <td className="px-3 py-1">{item.fee}</td>
                        <td className="px-3 py-1">{item.amount}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
