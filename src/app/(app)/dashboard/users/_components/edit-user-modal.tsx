import { UserTableRowReadModel } from '@/domain/user/user.read-models';

interface Props {
    user: UserTableRowReadModel;
    onClose: () => void;
}

export default function EditUserModal({ user, onClose }: Props) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="bg-white">Edycja {user.name}</div>
            <button onClick={onClose}>Zamknij</button>
        </div>
    );
}
