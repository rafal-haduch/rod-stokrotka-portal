export default function TableOfFeeTypes() {
    return (
        <table className="mx-auto w-full max-w-xl border border-green-300 text-center">
            <thead className="bg-green-100">
                <tr>
                    <th className="border border-green-300 px-3 py-2">Rodzaje opłat</th>
                </tr>
            </thead>
            <tbody>
                <tr className="hover:bg-green-50">
                    <td className="border border-green-300 px-3 py-1">działka</td>
                </tr>
                <tr className="hover:bg-green-50">
                    <td className="border border-green-300 px-3 py-1">nieczystości</td>
                </tr>
                <tr className="hover:bg-green-50">
                    <td className="border border-green-300 px-3 py-1">składka członkowska</td>
                </tr>
                <tr className="hover:bg-green-50">
                    <td className="border border-green-300 px-3 py-1">energia</td>
                </tr>
                <tr className="hover:bg-green-50">
                    <td className="border border-green-300 px-3 py-1">całość *</td>
                </tr>
            </tbody>
        </table>
    );
}
