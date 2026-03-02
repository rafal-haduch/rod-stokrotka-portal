import { typesOfFees } from '@/content/data/types-of-fees';

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
                {typesOfFees.map((item) => (
                    <tr key={item.fee}>
                        <th scope="row">{item.fee}</th>
                        <td>{item.amount}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
