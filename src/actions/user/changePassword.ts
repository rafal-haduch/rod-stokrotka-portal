'use server';

import { prisma } from '@/lib/prisma';
import { ChangePasswordResult } from '@/types/user-actions-result';
import { getUserSession } from '@/utils/getUserSession';
import bcrypt from 'bcrypt';

export async function changePassword(formData: FormData): Promise<ChangePasswordResult> {
    try {
        const { id } = await getUserSession();
        if (!id) {
            throw new Error('');
        }

        const currentPassword = formData.get('currentPassword');
        const newPassword = formData.get('newPassword');
        const newPasswordRepeat = formData.get('newPasswordRepeat');

        if (newPassword != newPasswordRepeat) {
            throw new Error('');
        }

        const newPasswordHash = await bcrypt.hash(newPassword, 10);

        await prisma.user.update({
            where: { id: id },
            data: {
                password: newPasswordHash,
            },
        });

        return {
            success: true,
        };
    } catch (e) {
        return {
            success: false,
            errorMsg: 'Wystąpil bląd podczas zmiany hasla!',
        };
    }
}
