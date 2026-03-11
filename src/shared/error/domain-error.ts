import { ErrorCode } from '@/shared/error/error-codes';

/**
 * Error used for domain/business logic failures.
 * Carries an ErrorCode that can be safely returned to the client.
 */
export class DomainError extends Error {
    public readonly code: ErrorCode;

    constructor(code: ErrorCode, message?: string) {
        super(message);
        this.code = code;
        this.name = 'DomainError';
    }
}
