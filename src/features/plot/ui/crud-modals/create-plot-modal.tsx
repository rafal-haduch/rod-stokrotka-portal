'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

import { SYSTEM_MESSAGES } from '@/shared/constants/system-messages';
import { ActionResult } from '@/shared/contracts/action-result';
import { TECHNICAL_ERROR, TechnicalError } from '@/shared/error/technical-error';
import { safeAction } from '@/shared/utils/safe-action';

import { Portal } from '@/components/ui/portal';

import { createPlot } from '@/features/plot/domain/actions/create-plot-action';
import { CreatePlotData } from '@/features/plot/domain/plot-api-contracts';

import { CreatePlotForm } from '@/features/plot/ui/crud-forms/create-plot-form';

interface Props {
    onCloseModal: () => void;
    onPlotCreated: (newPlotData: CreatePlotData) => void;
}

export function CreatePlotModal({ onCloseModal, onPlotCreated }: Props) {
    const [result, setResult] = useState<ActionResult<CreatePlotData> | TechnicalError | null>(
        null
    );
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        setResult(null);
        setLoading(true);

        const formData = new FormData(e.currentTarget);

        const res = await safeAction(() => createPlot(formData));

        setResult(res);

        if (res !== TECHNICAL_ERROR && res.success) {
            onPlotCreated(res.data);
        }

        setLoading(false);
    }

    const errorMsg =
        result === TECHNICAL_ERROR
            ? SYSTEM_MESSAGES.TECHNICAL_ERROR
            : result && !result.success
              ? result.errorMsg
              : null;

    return (
        <Portal>
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                <div
                    aria-label="Okno dodawania nowej działki"
                    className="panel surface-elevated mx-auto max-w-xl rounded-xl shadow-lg"
                >
                    <button
                        type="button"
                        onClick={() => {
                            setResult(null);
                            onCloseModal();
                        }}
                        title="Zamknij okno dodawania nowej działki"
                        className="ml-auto flex p-2 hover:cursor-pointer"
                    >
                        <X aria-hidden="true" className="h-8 w-8" />
                    </button>

                    <CreatePlotForm onSubmit={handleSubmit} loading={loading} errorMsg={errorMsg} />
                </div>
            </div>
        </Portal>
    );
}
