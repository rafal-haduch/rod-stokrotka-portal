import { ActionResult } from '@/shared/contracts/action-result';
import { TECHNICAL_ERROR, TechnicalError } from '@/shared/error/technical-error';

/**
 * Executes a server action safely, catching any technical errors (e.g., network issues, lost connection).
 * This function **never throws**; all exceptions are caught and handled internally.
 *
 * @template T - The type of data expected from the server action.
 * @param action A function returning a Promise of `ActionResult<T>`, representing the server action.
 * @param onError Optional callback invoked with the caught error for logging or telemetry purposes.
 * @returns A Promise resolving to either:
 *   - `ActionResult<T>`: the normal outcome of the action (success or domain/business error)
 *   - `TechnicalError`: if a technical/infrastructure error occurred
 */
export async function safeAction<T>(
    action: () => Promise<ActionResult<T>>,
    onError?: (e: unknown) => void
): Promise<ActionResult<T> | TechnicalError> {
    try {
        return await action();
    } catch (e) {
        console.error(e);
        onError?.(e);
        return TECHNICAL_ERROR;
    }
}
