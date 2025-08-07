import User from '../../models/User';
import { generateToken, hashPassword } from '../../services/authService';
export async function createTestUser(role, email) {
    const password = await hashPassword('testpass');
    const user = new User({
        name: `${role} user`,
        email,
        password,
        role,
    });
    await user.save();
    // Ensure _id is string for token
    const token = generateToken({ ...user.toObject(), _id: String(user._id) });
    return { user, token };
}
