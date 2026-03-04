import { mapToUserProfile } from '@/features/user/domain/user.mapper';
import { UserProfile } from '@/features/user/domain/user.read-models';
import { userRepository } from '@/features/user/domain/user.repository';

/**
 * Fetches only the fields needed for the user profile panel from the database.
 *
 * @param userId - should be extracted from the user's session token on the frontend.
 */
export async function getUserProfile(userId: number): Promise<UserProfile | null> {
    const result = await userRepository.getUserProfile(userId);
    if (!result) return null;

    return mapToUserProfile(result);
}
