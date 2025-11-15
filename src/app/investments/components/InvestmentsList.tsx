import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

import { getAllInvestments } from '@/utils/investments';

import NotFoundContent from '@/components/NotFoundContent';

export default function InvestmentsList() {
    const investments = getAllInvestments();

    if (investments.length === 0) return <NotFoundContent />;

    return (
        <div className="flex flex-col gap-y-14">
            {investments.map((i) => (
                <div key={i.slug}>
                    <InvestmentCard investment={i} />
                </div>
            ))}
        </div>
    );
}

function InvestmentCard({ investment }: { investment: any }) {
    return (
        <Link href={`/investments/${investment.slug}`} className="...">
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
