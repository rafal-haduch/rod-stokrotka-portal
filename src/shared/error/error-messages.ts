import { ErrorCode } from './error-codes';

/**
 * Maps application error codes to user-friendly messages
 * that can be displayed in the UI.
 *
 * @see ErrorCode
 */
export const ERROR_MESSAGES: Record<ErrorCode, string> = {
    // Auth
    [ErrorCode.NO_SESSION]: 'Brak aktywnej sesji!',
    [ErrorCode.NO_PERMISSION]: 'Brak odpowiednich uprawnień!',
    [ErrorCode.WRONG_CREDENTIALS]: 'Nieprawidłowy login lub hasło!',

    // Validation
    [ErrorCode.INVALID_INPUT]: 'Nieprawidłowe dane!',
    [ErrorCode.EMPTY_INPUT]: 'Uzupełnij wymagane pola!',

    // User
    [ErrorCode.USER_NOT_FOUND]: 'Użytkownik nie istnieje!',
    [ErrorCode.WRONG_PASSWORD]: 'Nieprawidłowe hasło!',
    [ErrorCode.WEAK_PASSWORD]: 'Hasło jest zbyt słabe!',
    [ErrorCode.NEW_PASSWORDS_MISMATCH]: 'Nowe hasła nie są takie same!',
    [ErrorCode.SAME_NEW_PASSWORD]: 'Nowe hasło musi być inne niż obecne!',

    // System
    [ErrorCode.UNKNOWN]: 'Wystąpił nieoczekiwany błąd! Spróbuj ponownie.',
    [ErrorCode.DATABASE_ERROR]: 'Wystąpił błąd bazy danych! Spróbuj ponownie.',
    [ErrorCode.SERVER_ERROR]: 'Wystąpił błąd serwera! Spróbuj ponownie.',
};
