import { X } from 'lucide-react';

interface Props {
    ariaLabel: string;
    titleCloseButton: string;
    resetResult?: () => void;
    onCloseModal: () => void;
    children: React.ReactNode;
}

export function CRUDModal({
    ariaLabel,
    titleCloseButton,
    resetResult,
    onCloseModal,
    children,
}: Props) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div
                aria-label={ariaLabel}
                className="panel surface-elevated mx-auto w-fit max-w-2xl rounded-xl"
            >
                <button
                    type="button"
                    onClick={() => {
                        resetResult && resetResult();
                        onCloseModal();
                    }}
                    title={titleCloseButton}
                    className="ml-auto flex p-2 hover:cursor-pointer"
                >
                    <X className="h-8 w-8" />
                </button>
                <div className="w-full px-4 pb-8 md:px-6">{children}</div>
            </div>
        </div>
    );
}
