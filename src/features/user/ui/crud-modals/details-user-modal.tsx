import { CRUDModal } from '@/components/crud-modal';
import { Portal } from '@/components/portal';
import { PlotMinimalReference } from '@/features/plot/domain/plot-read-models';
import { CreateUserData } from '@/features/user/domain/user-api-contracts';
import { UserTableRow } from '@/features/user/domain/user-read-models';
import { DetailsUser } from '@/features/user/ui/crud-views/details-user';
import { ComponentPropsWithPlotOptions } from '@/shared/models/plot-options-props';

interface Props {
    user: UserTableRow;
    onCloseModal: () => void;
}

export function DetailsUserModal({ user, onCloseModal }: Props) {
    return (
        <Portal>
            <CRUDModal
                ariaLabel="Okno podglądu szczegółowych danych konta działkowca"
                titleCloseButton="Zamknij okno"
                onCloseModal={onCloseModal}
            >
                <DetailsUser />
            </CRUDModal>
        </Portal>
    );
}
