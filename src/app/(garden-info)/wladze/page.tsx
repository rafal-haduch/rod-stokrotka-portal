import { SEO } from '@/config/seo';

import {
    governanceElectedOn,
    associationBoard,
    auditCommittee,
    arbitrationCommittee,
} from '@/data/governance';

import DecorativeLine from '@/components/layout/decorative-line';

import { GovernanceSection } from './_components/governance-section';

export const metadata = SEO.GOVERNANCE;

export default function GovernanceAssociation() {
    return (
        <article>
            <h1>Władze</h1>
            <DecorativeLine variant="forHeading" />
            <p className="mb-10 text-center">
                Wybrano: <time dateTime={governanceElectedOn}>{governanceElectedOn}</time>
            </p>

            <GovernanceSection title="Zarząd" members={associationBoard} />

            <GovernanceSection title="Komisja Rewizyjna" members={auditCommittee} />

            <GovernanceSection title="Komisja Rozjemcza" members={arbitrationCommittee} />

            <DecorativeLine my="my-10" />

            <section className="text-center">
                <dl>
                    <dd className="text-xl font-semibold">Administrator strony:</dd>
                    <dt>Rafał Haduch</dt>
                </dl>
            </section>
        </article>
    );
}
