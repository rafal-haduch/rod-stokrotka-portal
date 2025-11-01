import { notFound } from 'next/navigation';

import { SlugPagesProps } from '@/types/SlugePagesProps';
import { investmentsDataById } from '@/data/investments';

import InvestmentPageWrapper from './InvestmentPageWrapper';

export default async function InvestmentPage({ params }: SlugPagesProps) {
    const { id } = await params;
    const investment = investmentsDataById[id];

    if (!investment) notFound();

    return <InvestmentPageWrapper investment={investment} />;
}
