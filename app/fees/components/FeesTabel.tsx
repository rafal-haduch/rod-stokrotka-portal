'use client';

import React from 'react';

import { plotsFeesStatus } from '@/data/plotFeesStatus';

export default function FeesTable() {
    return (
        <>
            <table className="text-md mx-auto mb-4 w-full max-w-2xl border border-lime-400 text-center">
                <thead className="bg-lime-200">
                    <tr>
                        <th className="border border-lime-400 px-3 py-2">Numer działki</th>
                        <th className="border border-lime-400 px-3 py-2">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {plotsFeesStatus.map((item) => (
                        <tr key={item.nr} className="hover:bg-lime-50">
                            <td className="border border-lime-400 px-3 py-1">{item.nr}</td>
                            <td
                                className={`border border-lime-400 px-3 py-1 font-medium ${
                                    item.status === 'Opłacone' ? 'text-green-600' : 'text-red-600'
                                }`}
                            >
                                {item.status}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p className="sm:text-center">
                *w przypadku błędu prosimy skontaktować się ze Skarbnikiem lub Prezesem.
            </p>
        </>
    );
}
