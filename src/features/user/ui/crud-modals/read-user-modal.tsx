import { CRUDModal } from '@/components/crud-modal';
import { Portal } from '@/components/portal';
import { UserTableRow } from '@/features/user/domain/user-read-models';
import { DetailsUser } from '@/features/user/ui/crud-views/details-user';

interface Props {
    user: UserTableRow;
    onCloseModal: () => void;
}

export function ReadUserModal({ user, onCloseModal }: Props) {
    return (
        <Portal>
            <CRUDModal
                ariaLabel="Dane konta działkowca"
                titleCloseButton="Zamknij okno"
                onCloseModal={onCloseModal}
            >
                <DetailsUser userData={user} />
            </CRUDModal>
        </Portal>
    );
}
