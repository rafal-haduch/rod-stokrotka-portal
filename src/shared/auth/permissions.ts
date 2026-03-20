import { UserRole } from '@prisma/client';

/**
 * UserRoles considered as administrative or board-level within the system.
 */
export const ADMIN_AND_BOARD_ROLES: UserRole[] = [
    UserRole.ADMIN,
    UserRole.PRESIDENT,
    UserRole.DEPUTY_PRESIDENT,
    UserRole.SECRETARY,
    UserRole.TREASURER,
    UserRole.BOARD_MEMBER,
];

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

export const PERMISSIONS: Record<Permission, readonly UserRole[]> = {
    CREATE_USER: [UserRole.ADMIN, UserRole.PRESIDENT, UserRole.DEPUTY_PRESIDENT],
    UPDATE_USER: [UserRole.ADMIN, UserRole.PRESIDENT, UserRole.DEPUTY_PRESIDENT],
    DELETE_USER: [UserRole.ADMIN, UserRole.PRESIDENT, UserRole.DEPUTY_PRESIDENT],

    CREATE_PLOT: [UserRole.ADMIN, UserRole.PRESIDENT, UserRole.DEPUTY_PRESIDENT],
    UPDATE_PLOT: [UserRole.ADMIN, UserRole.PRESIDENT, UserRole.DEPUTY_PRESIDENT],
    DELETE_PLOT: [UserRole.ADMIN, UserRole.PRESIDENT, UserRole.DEPUTY_PRESIDENT],

    CREATE_FEES: [UserRole.ADMIN, UserRole.PRESIDENT, UserRole.DEPUTY_PRESIDENT],
    UPDATE_FEES: [UserRole.ADMIN, UserRole.PRESIDENT, UserRole.DEPUTY_PRESIDENT],
    DELETE_FEES: [UserRole.ADMIN, UserRole.PRESIDENT, UserRole.DEPUTY_PRESIDENT],

    ADD_PAYMENTS: [
        UserRole.ADMIN,
        UserRole.PRESIDENT,
        UserRole.DEPUTY_PRESIDENT,
        UserRole.TREASURER,
    ],

    CREATE_ANNOUNCEMENT: [
        UserRole.ADMIN,
        UserRole.PRESIDENT,
        UserRole.DEPUTY_PRESIDENT,
        UserRole.SECRETARY,
        UserRole.TREASURER,
        UserRole.BOARD_MEMBER,
    ],
    UPDATE_ANNOUNCEMENT: [
        UserRole.ADMIN,
        UserRole.PRESIDENT,
        UserRole.DEPUTY_PRESIDENT,
        UserRole.SECRETARY,
        UserRole.TREASURER,
        UserRole.BOARD_MEMBER,
    ],
    DELETE_ANNOUNCEMENT: [
        UserRole.ADMIN,
        UserRole.PRESIDENT,
        UserRole.DEPUTY_PRESIDENT,
        UserRole.SECRETARY,
        UserRole.TREASURER,
        UserRole.BOARD_MEMBER,
    ],
};

export type PermissionKeys = keyof typeof PERMISSIONS;

export const PERMISSION_KEYS = Object.fromEntries(
    Object.keys(PERMISSIONS).map((key) => [key, key])
) as { [K in keyof typeof PERMISSIONS]: K };
