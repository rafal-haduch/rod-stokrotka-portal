import { typesOfFees } from '@/data/typesOfFees';
import { cn } from '@/lib/utils/cn';

export default function FeesTypesTable() {
    return (
        <table
            className={cn(
                'border-color-theme-medium',
                'text-md mx-auto mb-4 w-full max-w-xl border text-center'
            )}
        >
            <thead className="bg-color-theme-light">
                <tr>
                    <th className={cn('border-color-theme-medium', 'border px-3 py-2')}>
                        Rodzaje opłat
                    </th>
                    <th className={cn('border-color-theme-medium', 'border px-3 py-2')}>Kwota</th>
                </tr>
            </thead>
            <tbody>
                {typesOfFees.map((item) => (
                    <tr key={item.fee} className="hover:bg-color-theme-100">
                        <td className={cn('border-color-theme-medium', 'border px-3 py-1')}>
                            {item.fee}
                        </td>
                        <td className={cn('border-color-theme-medium', 'border px-3 py-1')}>
                            {item.amount}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
