import { ROUTES } from '@/shared/config/routes';

import { buildMetadata } from '@/shared/utils/build-metadata';

import {
    governanceAssociationStructureAsOf,
    associationBoard,
    auditCommittee,
    arbitrationCommission,
} from '@/content/data/association';

import { MainHeadingLineSeparator } from '@/components/main-heading-line-separator';
import { LineSeparator } from '@/components/line-separator';

import { GovernanceSection } from './_components/governance-section';

export const metadata = buildMetadata(ROUTES.GOVERNANCE);

export default function GovernanceAssociation() {
    return (
        <article>
            <h1>Władze</h1>
            <MainHeadingLineSeparator />

            <GovernanceSection title="Zarząd" members={associationBoard} />

            <GovernanceSection title="Komisja Rewizyjna" members={auditCommittee} />

            <GovernanceSection title="Komisja Rozjemcza" members={arbitrationCommission} />

            <p className="mb-10 text-center">
                Stan na dzień:{' '}
                <time dateTime={governanceAssociationStructureAsOf}>
                    {governanceAssociationStructureAsOf}
                </time>
            </p>

            <LineSeparator my="my-10" />

            <section className="text-center">
                <dl>
                    <dd className="text-xl font-semibold">Administrator strony:</dd>
                    <dt>Rafał Haduch</dt>
                </dl>
            </section>
        </article>
    );
}
