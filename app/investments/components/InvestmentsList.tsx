'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { investmentsList } from '@/data/investmentsData';

// TODO: change layout this component
export default function InvestmentsList() {
    return (
        <div className="grid gap-6 md:grid-cols-2">
            {investmentsList.map((i) => (
                <InvestmentCard key={i.id} investment={i} />
            ))}
        </div>
    );
}

// REVIEW: use that type or change to type/interface
function InvestmentCard({
    investment,
}: {
    investment: { id: string; title: string; date: string; cover: string };
}) {
    return (
        <Link
            href={`/investments/${investment.id}`}
            className="group block overflow-hidden rounded-xl shadow transition hover:shadow-lg"
        >
            <div className="relative h-64">
                <Image
                    src={investment.cover}
                    alt={investment.title}
                    fill
                    className="object-cover transition group-hover:scale-105"
                />
                <div className="absolute inset-0 hidden items-center justify-center bg-black/50 transition-all duration-300 group-hover:flex group-hover:scale-105">
                    <p className="tracking-wide text-amber-50">Zobacz więcej</p>
                    <ArrowRight color="white" />
                </div>
            </div>
            <div className="bg-lime-100 p-4 text-center group-hover:bg-lime-200">
                <p className="text-lg text-lime-600">{investment.date}</p>
                <h3 className="text-xl font-semibold text-lime-500">{investment.title}</h3>
            </div>
        </Link>
    );
}
