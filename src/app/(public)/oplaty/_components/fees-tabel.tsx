<<<<<<<< HEAD:src/app/(public)/oplaty/_components/fees-tabel.tsx
'use client';

import React from 'react';

import { plotsFeesStatus } from '@/content/data/plot-fees-status';
import { cn } from '@/shared/utils/cn';
import { Check, X } from 'lucide-react';

export default function FeesTable() {
    return (
        <div>
            <table className="mb-2 max-w-xl">
                <caption className="sr-only">Bilans opłat za rok 2025</caption>
                <thead>
                    <tr>
                        <th scope="col">Kod działki</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {plotsFeesStatus.map((item) => (
                        <tr key={item.id}>
                            <th scope="row">{item.id}</th>
                            <td
                                className={cn(
                                    item.status === 'Opłacone' ? 'text-green-600' : 'text-red-600'
                                )}
                            >
                                <span className="sr-only">
                                    {item.status === 'Opłacone' ? 'Opłacone' : 'Nieopłacone'}
                                </span>
                                {item.status === 'Opłacone' ? (
                                    <Check aria-hidden="true" className="mx-auto" />
                                ) : (
                                    <X aria-hidden="true" className="mx-auto" />
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p className="mx-auto mb-6 max-w-xl text-base">
                *Tabela za dany rok pojawia się na stronie po upływie terminu uiszczania opłat i
                będzie widoczna do końca roku kalendarzowego. Przedstawia anonimowy status
                uiszczonych opłat za działki w ROD Stokrotka. Dane służą wyłącznie celom wewnętrznej
                ewidencji.
            </p>
        </div>
    );
}
========
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
>>>>>>>> hotfix:src/app/(public)/oplaty/_components/FeeStatusTable.tsx
