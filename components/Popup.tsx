'use client';

import { cn } from '@/lib/cn';

interface PopupProps {
    type: 'info' | 'success' | 'error';
    message: string;
    onClose: () => void;
}

export default function Popup({ type, message, onClose }: PopupProps) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="w-full max-w-sm rounded-xl bg-white p-6 text-center shadow-2xl">
                <h2
                    className={cn(
                        `mb-4 text-xl font-bold`,
                        type == 'error' ? 'text-red-500' : 'text-green-500'
                    )}
                >
                    {type === 'info' ? 'Informacja' : ''}
                    {type === 'success' ? 'Sukces!' : ''}
                    {type === 'error' ? 'Wystąpił błąd!' : ''}
                </h2>
                <p className="mb-6 text-gray-700">{message}</p>
                <button onClick={onClose} className="button-text mx-auto">
                    Zamknij
                </button>
            </div>
        </div>
    );
}
