import { Role } from '@prisma/client';

type Permission =
    | 'UPDATE_USER'
    | 'DELETE_USER'
    | 'CREATE_USER'
    | 'CREATE_PLOT'
    | 'UPDATE_PLOT'
    | 'DELETE_PLOT'
    | 'CREATE_FEES'
    | 'UPDATE_FEES'
    | 'DELETE_FEES'
    | 'ADD_PAYMENTS'
    | 'CREATE_ANNOUNCEMENT'
    | 'UPDATE_ANNOUNCEMENT'
    | 'DELETE_ANNOUNCEMENT';

export const PERMISSIONS: Record<Permission, readonly Role[]> = {
    CREATE_USER: [Role.ADMIN, Role.PRESIDENT, Role.DEPUTY_PRESIDENT],
    UPDATE_USER: [Role.ADMIN, Role.PRESIDENT, Role.DEPUTY_PRESIDENT],
    DELETE_USER: [Role.ADMIN, Role.PRESIDENT, Role.DEPUTY_PRESIDENT],

    CREATE_PLOT: [Role.ADMIN, Role.PRESIDENT, Role.DEPUTY_PRESIDENT],
    UPDATE_PLOT: [Role.ADMIN, Role.PRESIDENT, Role.DEPUTY_PRESIDENT],
    DELETE_PLOT: [Role.ADMIN, Role.PRESIDENT, Role.DEPUTY_PRESIDENT],

    CREATE_FEES: [Role.ADMIN, Role.PRESIDENT, Role.DEPUTY_PRESIDENT],
    UPDATE_FEES: [Role.ADMIN, Role.PRESIDENT, Role.DEPUTY_PRESIDENT],
    DELETE_FEES: [Role.ADMIN, Role.PRESIDENT, Role.DEPUTY_PRESIDENT],

    ADD_PAYMENTS: [Role.ADMIN, Role.PRESIDENT, Role.DEPUTY_PRESIDENT, Role.TREASURER],

    CREATE_ANNOUNCEMENT: [
        Role.ADMIN,
        Role.PRESIDENT,
        Role.DEPUTY_PRESIDENT,
        Role.SECRETARY,
        Role.TREASURER,
        Role.BOARD_MEMBER,
    ],
    UPDATE_ANNOUNCEMENT: [
        Role.ADMIN,
        Role.PRESIDENT,
        Role.DEPUTY_PRESIDENT,
        Role.SECRETARY,
        Role.TREASURER,
        Role.BOARD_MEMBER,
    ],
    DELETE_ANNOUNCEMENT: [
        Role.ADMIN,
        Role.PRESIDENT,
        Role.DEPUTY_PRESIDENT,
        Role.SECRETARY,
        Role.TREASURER,
        Role.BOARD_MEMBER,
    ],
};

export type PermissionKeys = keyof typeof PERMISSIONS;

export const PERMISSION_KEYS = Object.fromEntries(
    Object.keys(PERMISSIONS).map((key) => [key, key])
) as { [K in keyof typeof PERMISSIONS]: K };
