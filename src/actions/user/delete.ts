'use server';

import { prisma } from '@/lib/prisma';

import { DeleteUserResult } from '@/types/deleteUserResult';

export async function deleteUser(formData: FormData): Promise<DeleteUserResult> {
    try {
        const id = Number(formData.get('id'));

        await prisma.$transaction(async (tx) => {
            await tx.userPlot.deleteMany({
                where: { userId: id },
            });

            await tx.user.delete({
                where: { id },
            });
        });

        return {
            success: true,
        };
    } catch (e) {
        return {
            success: false,
            errorMsg: 'Wystąpił błąd podczas usuwania konta!',
        };
    }
}
