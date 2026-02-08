'use client';

import React from 'react';

import { plotsFeesStatus } from '@/content/data/plot-fees-status';
import { cn } from '@/utils/cn';
import { Check, X } from 'lucide-react';

export default function FeesTable() {
    return (
        <>
            <table className="max-w-xl">
                <thead>
                    <tr>
                        <th>Kod działki</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {plotsFeesStatus.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td
                                className={cn(
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
