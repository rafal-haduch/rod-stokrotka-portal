'use client';

import React from 'react';

import { plotsFeesStatus } from '@/data/plotFeesStatus';
import { cn } from '@/utils/cn';
import { Check, X } from 'lucide-react';

export default function FeeStatusTable() {
    return (
        <>
            <table className={cn('mx-auto mb-4 w-full max-w-2xl', 'text-md text-center')}>
                <thead>
                    <tr>
                        <th className="px-3 py-2">Kod działki</th>
                        <th className="px-3 py-2">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {plotsFeesStatus.map((item) => (
                        <tr key={item.id} className="hover:bg-theme-bg-secondary">
                            <td className="px-3 py-1">{item.id}</td>
                            <td
                                className={cn(
                                    'px-3 py-1',
                                    item.status === 'Opłacone' ? 'text-green-600' : 'text-red-600'
                                )}
                            >
                                {item.status === 'Opłacone' ? (
                                    <Check className="mx-auto" />
                                ) : (
                                    <X className="mx-auto" />
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p className="mb-6 text-left sm:text-center">
                *Tabela za dany rok pojawia się na stronie po upływie terminu uiszczania opłat i
                będzie widoczna do końca roku kalendarzowego. Przedstawia anonimowy status
                uiszczonych opłat za działki w ROD Stokrotka. Dane służą wyłącznie celom wewnętrznej
                ewidencji.
            </p>
        </>
    );
}
