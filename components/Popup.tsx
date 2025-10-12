'use client';

interface PopupProps {
    message: string;
    onClose: () => void;
}

export default function Popup({ message, onClose }: PopupProps) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="w-full max-w-sm rounded-xl bg-white p-6 text-center shadow-2xl">
                <h2 className="mb-4 text-xl font-bold text-green-700">Informacja</h2>
                <p className="mb-6 text-gray-700">{message}</p>
                <button onClick={onClose} className="button-text">
                    Zamknij
                </button>
            </div>
        </div>
    );
}
