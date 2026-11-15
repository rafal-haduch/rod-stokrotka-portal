import { annualFeeItems } from '@/content/types-of-fees';

export default function FeesTypesTable() {
    return (
        <table className="max-w-xl">
            <caption className="sr-only">
                Rodzaje opłat obowiązujących członków stowarzyszenia
            </caption>
            <thead>
                <tr>
                    <th scope="col">Opłata</th>
                    <th scope="col">Kwota</th>
                </tr>
            </thead>
            <tbody>
                {annualFeeItems.map((item) => (
                    <tr key={item.label}>
                        <th scope="row">{item.label}</th>
                        <td>{item.amountDescription}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
