import { PlotOption } from '@/domain/shared/get-sorted-plots-list-from-db';

import CreateUserDialog from './create-user-dialog';
import Portal from '@/components/portal';

interface Props {
    plotOptions: PlotOption[];
    onCloseModal: () => void;
    onUserCreated: () => void;
}

export default function CreateUserModal({ plotOptions, onCloseModal, onUserCreated }: Props) {
    return (
        <Portal>
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                <CreateUserDialog
                    plotsOptions={plotOptions}
                    onCloseModal={onCloseModal}
                    onUserCreated={onUserCreated}
                />
            </div>
        </Portal>
    );
}
