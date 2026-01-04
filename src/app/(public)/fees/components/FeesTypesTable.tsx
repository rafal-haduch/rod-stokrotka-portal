import { typesOfFees } from '@/content/data/typesOfFees';
import { cn } from '@/utils/cn';

export default function FeesTypesTable() {
    return (
        <table className="max-w-xl">
            <thead>
                <tr>
                    <th>Rodzaje opłat</th>
                    <th>Kwota</th>
                </tr>
            </thead>
            <tbody>
                {typesOfFees.map((item) => (
                    <tr key={item.fee}>
                        <td>{item.fee}</td>
                        <td>{item.amount}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
