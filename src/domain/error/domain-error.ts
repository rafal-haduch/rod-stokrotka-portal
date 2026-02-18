import { ErrorCode } from './error-codes';

export class DomainError extends Error {
    public readonly code: ErrorCode;

    constructor(code: ErrorCode, message?: string) {
        super(message);
        this.code = code;
        this.name = 'DomainError';
    }
}
