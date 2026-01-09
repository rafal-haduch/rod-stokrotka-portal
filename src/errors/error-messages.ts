import { ErrorCode } from './error-codes';

export const ERROR_MESSAGES: Record<ErrorCode, string> = {
    [ErrorCode.NO_SESSION]: 'Brak aktywnej sesji!',
    [ErrorCode.INVALID_INPUT]: 'Nieprawidłowe dane!',
    [ErrorCode.EMPTY_INPUT]: 'Uzupełnij wymagane pola!',
    [ErrorCode.NEW_PASSWORDS_MISMATCH]: 'Nowe hasła nie są takie same!',
    [ErrorCode.SAME_NEW_PASSWORD]: 'Nowe hasło musi być inne niż obecne!',
    [ErrorCode.USER_NOT_FOUND]: 'Użytkownik nie istnieje!',
    [ErrorCode.WRONG_CREDENTIALS]: 'Nieprawidłowy login lub hasło!',
    [ErrorCode.WRONG_PASSWORD]: 'Nieprawidłowe hasło!',
    [ErrorCode.UNKNOWN]: 'Wystąpił nieoczekiwany błąd!',
    [ErrorCode.SERVER_ERROR]:
        'Błąd serwera! Spróbuj ponownie lub skontaktuj się z administratorem strony. ',
};
