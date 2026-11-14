import { AnimateOnView } from '@/components/animated-h2';
import { BoardPosition, CommitteePosition, GovernanceMember } from '@/data/governance';

interface GovernanceSectionProps {
    title: string;
    members: GovernanceMember<BoardPosition | CommitteePosition>[];
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
                        key={member.name}
                        className="flex justify-center gap-1 [counter-increment:members] before:mr-1 before:content-[counter(members)'.']"
                    >
                        <dt>{member.name}</dt> {'-'} <dd>{member.position}</dd>
                    </div>
                ))}
            </dl>
        </section>
    );
}
