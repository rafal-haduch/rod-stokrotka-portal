import { ERROR_MESSAGES } from '@/shared/error/error-messages';

/**
 * Application error codes used in domain logic and returned by server actions.
 * Each code should have a corresponding entry in {@link ERROR_MESSAGES}.
 *
 * @see ERROR_MESSAGES
 */
export enum ErrorCode {
    // Auth
    NO_SESSION = 'NO_SESSION',
    NO_PERMISSION = 'NO_PERMISSION',
    WRONG_CREDENTIALS = 'WRONG_CREDENTIALS',

    // Validation
    INVALID_INPUT = 'INVALID_INPUT',
    EMPTY_INPUT = 'EMPTY_INPUT',

    // User
    USER_NOT_FOUND = 'USER_NOT_FOUND',
    WRONG_PASSWORD = 'WRONG_PASSWORD',
    WEAK_PASSWORD = 'WEAK_PASSWORD',
    NEW_PASSWORDS_MISMATCH = 'NEW_PASSWORDS_MISMATCH',
    SAME_NEW_PASSWORD = 'SAME_NEW_PASSWORD',

    // System
    DATABASE_ERROR = 'DATABASE_ERROR',
    SERVER_ERROR = 'SERVER_ERROR',
    UNKNOWN = 'UNKNOWN',
}
