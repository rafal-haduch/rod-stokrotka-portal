import { UserTableRow } from '@/domain/user/user.read-models';

interface Props {
    user: UserTableRow;
    onClose: () => void;
}

export default function DeleteUserModal({ user, onClose }: Props) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="bg-theme-bg-secondary mx-auto max-w-xl rounded-xl p-4 shadow-lg">
                <p>Czy na pewno chcesz usunąć konto działkowca {user.name}?</p>
                <div className="flex flex-row items-center justify-evenly">
                    <button className="btn btn-md btn-theme">Tak, usuń</button>
                    <button onClick={onClose} className="btn btn-md btn-theme">
                        Nie, anuluj
                    </button>
                </div>
            </div>
        </div>
    );
}
