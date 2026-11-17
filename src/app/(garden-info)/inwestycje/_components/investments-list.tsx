import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

import { getAllInvestments, InvestmentInList } from '@/content/investments/investments';
import { formatDate } from '@/shared/utils/format-date';

import { NotFoundContent } from '@/components/not-found-content';

export default function InvestmentsList() {
    const investments = getAllInvestments();

    if (investments.length === 0) return <NotFoundContent />;

    return (
        <div className="flex flex-col gap-y-14">
            {investments.map((i) => (
                <article key={i.slug}>
                    <InvestmentCard investment={i} />
                </article>
            ))}
        </div>
    );
}

function InvestmentCard({ investment }: { investment: any }) {
    return (
        <Link
            href={`/investments/${investment.slug}`}
            className="group bg-theme-bg-secondary hover:bg-theme-200 mx-auto flex max-w-3xl flex-col items-center rounded-xl p-5 shadow-md hover:shadow-xl md:flex-row md:items-start md:gap-6"
        >
            <div className="relative aspect-video w-full shrink-0 md:aspect-4/3 md:w-64">
                <Image
                    src={investment.cover}
                    alt={investment.title}
                    fill
                    className="rounded-md object-cover transition group-hover:scale-105"
                />
            </div>
            <div className="flex h-full w-full flex-col justify-center text-center md:text-left">
                <h3 className="text-theme-txt m-2 md:mt-0">{investment.title}</h3>
                <hr className="border-theme-ui-border-light mx-auto mb-4 w-3/4 border-t-2 md:w-full" />
                <p className="mb-4">{formatDate(investment.date)}</p>
                <div className="group-hover:text-theme-txt-h flex flex-row items-end-safe justify-end text-xl group-hover:underline md:justify-start">
                    Zobacz więcej <ChevronRight />
                </div>
            </div>
        </Link>
    );
}
