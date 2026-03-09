import { validateUserPassword } from '@/features/auth/domain/auth.validation';
import { DomainError } from '@/shared/error/domain-error';
import { ErrorCode } from '@/shared/error/error-codes';

interface ChangePasswordInput {
    currentPassword: string;
    newPassword: string;
}
/**
 * Parses and validates FormData for the change password use-case.
 * Performs additional password consistency checks.
 * Throws DomainError when validation fails.
 */
export function parseChangePasswordInput(formData: FormData): ChangePasswordInput {
    const currentPasswordRaw = formData.get('currentPassword');
    const newPasswordRaw = formData.get('newPassword');
    const newPasswordRepeatRaw = formData.get('newPasswordRepeat');

    // Basic validation
    if (newPasswordRaw !== newPasswordRepeatRaw) {
        throw new DomainError(ErrorCode.NEW_PASSWORDS_MISMATCH);
    }

    if (newPasswordRaw === currentPasswordRaw) {
        throw new DomainError(ErrorCode.SAME_NEW_PASSWORD);
    }

    const currentPassword = validateUserPassword(currentPasswordRaw);
    const newPassword = validateUserPassword(newPasswordRaw);

    return { currentPassword, newPassword };
}
