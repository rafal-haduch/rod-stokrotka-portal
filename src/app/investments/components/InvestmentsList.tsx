'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

import { InvestmentInList } from '@/types/Investment';
import { investmentsSummaryList } from '@/data/investments';

import NotFoundContent from '@/components/NotFoundContent';

export default function InvestmentsList() {
    if (investmentsSummaryList.length === 0) return <NotFoundContent />;

    return (
        <div className="flex flex-col gap-y-14">
            {investmentsSummaryList.map((i, index) => (
                <div key={i.id}>
                    <InvestmentCard investment={i} />
                </div>
            ))}
        </div>
    );
}

function InvestmentCard({ investment }: { investment: InvestmentInList }) {
    return (
        <Link
            href={`/investments/${investment.id}`}
            className="0 mx-auto flex max-w-lg flex-col items-center rounded-xl border-1 border-slate-200 bg-slate-50 px-4 py-4 shadow-lg hover:border-lime-500 hover:bg-lime-50 hover:shadow-xl md:max-w-3xl md:flex-row md:items-start md:gap-6 md:pr-8"
        >
            <div className="relative h-48 w-full shrink-0 md:h-40 md:w-64">
                <Image
                    src={investment.cover}
                    alt={investment.title}
                    fill
                    className="rounded-md object-cover"
                />
            </div>
            <div className="flex h-full w-full flex-col justify-center text-center md:text-left">
                <h3 className="m-2 text-lime-500 md:mt-0">{investment.title}</h3>
                <hr className="mx-auto mb-4 w-3/4 border-t-2 border-lime-500 md:w-full" />
                <p className="mb-4">{investment.date}</p>
                <div className="flex flex-row items-end-safe justify-end text-xl md:justify-start">
                    Zobacz więcej <ChevronRight />
                </div>
            </div>
        </Link>
    );
}
