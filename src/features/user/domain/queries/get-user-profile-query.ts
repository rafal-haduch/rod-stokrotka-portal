'use server';

import { GetUserProfileResponse } from '@/features/user/domain/user-api-contracts';
import { mapToUserProfile } from '@/features/user/domain/user-mapper';
import { userRepository } from '@/features/user/domain/user-repository';

/**
 * Fetches only the fields needed for the user profile panel from the database.
 *
 * @param userId - should be extracted from the user's session token on the frontend.
 */
export async function getUserProfile(userId: number): Promise<GetUserProfileResponse | null> {
    const result = await userRepository.getUserProfile(userId);
    if (!result) return null;

    return mapToUserProfile(result);
}
