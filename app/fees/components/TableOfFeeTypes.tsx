export default function TableOfFeeTypes() {
    return (
        <table className="text-md mx-auto w-full max-w-xl border border-lime-300 text-center">
            <thead className="bg-lime-200">
                <tr>
                    <th className="border border-lime-400 px-3 py-2">Rodzaje opłat</th>
                    <th className="px-3 py-2">Kwota</th>
                </tr>
            </thead>
            <tbody>
                <tr className="hover:bg-gray-100">
                    <td className="border border-lime-400 px-3 py-1">działka</td>
                    <td className="border border-lime-400 px-3 py-1">0,60 zł / m2</td>
                </tr>
                <tr className="hover:bg-gray-100">
                    <td className="border border-lime-400 px-3 py-1">nieczystości</td>
                    <td className="border border-lime-400 px-3 py-1">50 zł</td>
                </tr>
                <tr className="hover:bg-gray-100">
                    <td className="border border-lime-400 px-3 py-1">składka członkowska</td>
                    <td className="border border-lime-400 px-3 py-1">25 zł</td>
                </tr>
                <tr className="hover:bg-gray-100">
                    <td className="border border-lime-400 px-3 py-1">energia</td>
                    <td className="border border-lime-400 px-3 py-1">według zużycia</td>
                </tr>
            </tbody>
        </table>
    );
}
