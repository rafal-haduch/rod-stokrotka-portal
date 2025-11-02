import { typesOfFees } from '@/data/typesOfFees';

export default function FeesTypesTable() {
    return (
        <table className="text-md mx-auto mb-4 w-full max-w-xl border border-lime-300 text-center">
            <thead className="bg-lime-200">
                <tr>
                    <th className="border border-lime-400 px-3 py-2">Rodzaje opłat</th>
                    <th className="px-3 py-2">Kwota</th>
                </tr>
            </thead>
            <tbody>
                {typesOfFees.map((item) => (
                    <tr key={item.fee} className="hover:bg-lime-50">
                        <td className="border border-lime-400 px-3 py-1">{item.fee}</td>
                        <td className="border border-lime-400 px-3 py-1">{item.amount}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
