import { getUserRoleLabel } from '@/features/user/domain/user-helpers';
import { UserTableRow } from '@/features/user/domain/user-read-models';

interface Props {
    userData: UserTableRow;
}

function Field({ term, children }: { term: string; children: React.ReactNode }) {
    return (
        <div className="flex flex-col gap-0.5 sm:flex-row sm:gap-2">
            <dt className="text-theme-ui-foreground-primary min-w-32 font-medium">{term}</dt>
            <dd className="text-theme-txt-secondary">{children}</dd>
        </div>
    );
}

export function DetailsUser({ userData }: Props) {
    return (
        <div className="panel surface-elevated-subtle mx-auto max-w-lg p-6">
            <p id="create-user-form-heading" className="mb-4 text-center text-xl font-semibold">
                Dane konta działkowca
            </p>

            <dl className="space-y-3 text-base">
                <Field term="Imię i nazwisko:">{userData.name}</Field>
                <Field term="Rola:">{getUserRoleLabel(userData.role)}</Field>
                <Field term="Data utworzenia:">{userData.createdAt.toLocaleDateString()}</Field>
                <Field term="Ostatnie logowanie:">
                    {userData.lastLogin ? userData.lastLogin.toLocaleDateString() : '-'}
                </Field>

                <p className="text-center">Działki </p>
                <Field term="Właściciel:">
                    <ul className="flex flex-wrap gap-1">
                        {userData.ownedPlots.map((plot) => (
                            <li
                                key={plot.id}
                                className="bg-theme-surface-subtle text-theme-txt-secondary rounded px-2 py-0.5 text-sm"
                            >
                                {plot.number}
                            </li>
                        ))}
                    </ul>
                </Field>
                <Field term="Współwłaściciel:">
                    <ul className="flex flex-wrap gap-1">
                        {userData.coOwnedPlots.map((plot) => (
                            <li
                                key={plot.id}
                                className="bg-theme-surface-subtle text-theme-txt-secondary rounded px-2 py-0.5 text-sm"
                            >
                                {plot.number}
                            </li>
                        ))}
                    </ul>
                </Field>
                <Field term="Współużytkownik:">
                    <ul className="flex flex-wrap gap-1">
                        {userData.usedPlots.map((plot) => (
                            <li
                                key={plot.id}
                                className="bg-theme-surface-subtle text-theme-txt-secondary rounded px-2 py-0.5 text-sm"
                            >
                                {plot.number}
                            </li>
                        ))}
                    </ul>
                </Field>
            </dl>
        </div>
    );
}
