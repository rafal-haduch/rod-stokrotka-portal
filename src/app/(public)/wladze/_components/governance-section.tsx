import { AnimateOnView } from '@/components/animated-h2';
import { GovernanceAssociationStructure } from '@/content/data/association';

interface GovernanceSectionProps {
    title: string;
    members: GovernanceAssociationStructure[];
}

export function GovernanceSection({ title, members }: GovernanceSectionProps) {
    return (
        <section>
            <AnimateOnView>
                <h2>{title}:</h2>
            </AnimateOnView>

            <dl className="mb-10 [counter-reset:members]">
                {members.map((member) => (
                    <div
                        key={member.person}
                        className="flex justify-center gap-1 [counter-increment:members] before:mr-1 before:content-[counter(members)'.']"
                    >
                        <dt>{member.person}</dt> {'-'} <dd>{member.position}</dd>
                    </div>
                ))}
            </dl>
        </section>
    );
}
