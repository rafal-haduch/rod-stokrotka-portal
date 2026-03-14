import { TECHNICAL_ERROR, TechnicalError } from '@/shared/error/technical-error';

export async function safeAction<T>(
    action: () => Promise<T>,
    onError?: (e: unknown) => void
): Promise<T | TechnicalError> {
    try {
        return await action();
    } catch (e) {
        console.error(e);
        onError?.(e);
        return TECHNICAL_ERROR;
    }
}
