'use client';
import React from 'react';

type FeesStatus = 'Opłacone' | 'Nieopłacone' | '...';

interface PlotFees {
    nr: string;
    status: FeesStatus;
}

const payments: PlotFees[] = [
    { nr: '100', status: 'Opłacone' },
    { nr: '101', status: 'Nieopłacone' },
    { nr: '102', status: 'Opłacone' },
    { nr: '103', status: 'Nieopłacone' },
    { nr: '104', status: 'Opłacone' },
    { nr: '...', status: '...' },
    // ... kolejne działki
];

export default function FeesTable() {
    return (
        <table className="mx-auto w-full max-w-2xl border border-gray-300 text-center text-sm">
            <thead className="bg-gray-100">
                <tr>
                    <th className="border border-gray-300 px-3 py-2">Nr działki</th>
                    <th className="border border-gray-300 px-3 py-2">Status</th>
                </tr>
            </thead>
            <tbody>
                {payments.map(({ nr, status }) => (
                    <tr key={nr} className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-3 py-1">{nr}</td>
                        <td
                            className={`border border-gray-300 px-3 py-1 font-medium ${
                                status === 'Opłacone' ? 'text-green-600' : 'text-red-600'
                            }`}
                        >
                            {status}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
