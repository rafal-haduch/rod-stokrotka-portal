'use client';

import React from 'react';

import { plotsFeesStatus } from '@/data/plotFeesStatus';
import { cn } from '@/utils/cn';

export default function FeesTable() {
    return (
        <>
            <table
                className={cn(
                    'border-color-theme-medium',
                    'text-md mx-auto mb-4 w-full max-w-2xl border text-center'
                )}
            >
                <thead className="bg-color-theme-light">
                    <tr>
                        <th className={cn('border-color-theme-medium', 'border px-3 py-2')}>
                            Numer działki
                        </th>
                        <th className={cn('border-color-theme-medium', 'border px-3 py-2')}>
                            Status
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {plotsFeesStatus.map((item) => (
                        <tr key={item.nr} className="hover:bg-color-theme-100">
                            <td className={cn('border-color-theme-medium', 'border px-3 py-1')}>
                                {item.nr}
                            </td>
                            <td
                                className={cn(
                                    'border-color-theme-medium',
                                    'border px-3 py-1',
                                    item.status === 'Opłacone' ? 'text-green-600' : 'text-red-600'
                                )}
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
