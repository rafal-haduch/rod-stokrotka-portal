import { FEES } from '@/content/data/fees';
import { cn } from '@/shared/utils/cn';
import React from 'react';

//TODO: move into another place?

const RATE_PER_M2 = 0.7; // zł/m²
const WASTE_FEE = 50; // zł
const MEMBERSHIP_FEE = 25; //zł

const pln = (amount: number) => `${amount.toFixed(2)} zł`;

export default function FeeTable() {
    return (
        <div className="overflow-x-auto">
            <table className={cn('mx-auto mb-4 w-full max-w-2xl', 'text-md text-center')}>
                <thead>
                    <tr>
                        <th className="px-3 py-2">Nr działki</th>
                        <th className="px-3 py-2">Powierzchnia</th>
                        <th className="px-3 py-2">Kwota</th>
                        <th className="px-3 py-2">Nieczystości</th>
                        <th className="px-3 py-2">Składka członkowska</th>
                        <th className="px-3 py-2">Energia</th>
                        <th className="px-3 py-2">Całość</th>
                    </tr>
                </thead>
                <tbody>
                    {FEES.map((row) => {
                        const areaCost = row.plotNumber === '60' ? 0 : row.area * RATE_PER_M2;
                        const energy = row.current ?? 0;
                        const total =
                            row.plotNumber === '35'
                                ? areaCost + WASTE_FEE + energy
                                : areaCost + WASTE_FEE + MEMBERSHIP_FEE + energy;

                        return (
                            <tr
                                key={row.id}
                                className="hover:bg-theme-bg-secondary whitespace-nowrap"
                            >
                                <td className="px-3 py-1">{row.plotNumber}</td>
                                <td className="px-3 py-1">{row.area} m²</td>
                                <td className="px-3 py-1">{pln(areaCost)}</td>
                                <td className="px-3 py-1">{pln(WASTE_FEE)}</td>
                                <td className="px-3 py-1">{pln(MEMBERSHIP_FEE)}</td>
                                <td className="px-3 py-1">{pln(energy)}</td>
                                <td className="px-3 py-1 font-semibold">{pln(total)}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
