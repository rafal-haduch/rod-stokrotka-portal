import {
    structureAssociationAsOf,
    associationBoard,
    auditCommittee,
    arbitrationCommission,
} from '@/content/data/association';

import ImageSeparator from '@/components/image-separator';
import MainHeaderLineSeparator from '@/components/main-header-line-separator';
import LineSeparator from '@/components/line-separator';
import AnimateOnView from '@/components/animated-h2';
import { buildMetadata } from '@/lib/metadata';
import { ROUTES } from '@/constants/routes';

export const metadata = buildMetadata(ROUTES.GOVERNANCE);

export default function GovernanceAssociation() {
    return (
        <article>
            <h1>Władze</h1>
            <MainHeaderLineSeparator />

            <section>
                <AnimateOnView>
                    <h2>Zarząd:</h2>
                </AnimateOnView>
                <dl className="mb-10 [counter-reset:members]">
                    {associationBoard.map((item, i) => (
                        <div
                            key={item.person}
                            className="flex justify-center gap-1 [counter-increment:members] before:mr-1 before:content-[counter(members)'.']"
                        >
                            <dt>{item.person}</dt> {'-'}
                            <dd>{item.position}</dd>
                        </div>
                    ))}
                </dl>
            </section>
            <section>
                <AnimateOnView>
                    <h2>Komisja Rewizyjna:</h2>
                </AnimateOnView>
                <dl className="mb-10 [counter-reset:members]">
                    {auditCommittee.map((item) => (
                        <div
                            key={item.person}
                            className="flex justify-center gap-1 [counter-increment:members] before:mr-1 before:content-[counter(members)'.']"
                        >
                            <dt>{item.person}</dt> {'-'}
                            <dd>{item.position}</dd>
                        </div>
                    ))}
                </dl>
            </section>
            <section>
                <AnimateOnView>
                    <h2>Komisja Rozjemcza:</h2>
                </AnimateOnView>
                <dl className="mb-10 [counter-reset:members]">
                    {arbitrationCommission.map((item) => (
                        <div
                            key={item.person}
                            className="flex justify-center gap-1 [counter-increment:members] before:mr-1 before:content-[counter(members)'.']"
                        >
                            <dt>{item.person}</dt> {'-'}
                            <dd>{item.position}</dd>
                        </div>
                    ))}
                </dl>
            </section>

            <p className="mb-10 text-center">
                Stan na dzień:{' '}
                <time dateTime={structureAssociationAsOf}>{structureAssociationAsOf}</time>
            </p>

            <LineSeparator my="my-10" />

            <section className="text-center">
                <dl>
                    <dd className="text-xl font-semibold">Administrator strony:</dd>
                    <dt>Rafał Haduch</dt>
                </dl>
            </section>

            <ImageSeparator />
        </article>
    );
}
