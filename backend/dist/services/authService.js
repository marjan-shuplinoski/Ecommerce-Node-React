import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User';
const JWT_SECRET = process.env.JWT_SECRET || 'changeme';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '1d';
export const hashPassword = async (password) => {
    return bcrypt.hash(password, 10);
};
export const validatePassword = async (password, hash) => {
    return bcrypt.compare(password, hash);
};
export const generateToken = (user) => {
    // @ts-ignore: TypeScript type mismatch, but this usage is correct for jsonwebtoken
    return jwt.sign({ id: user._id || user.id, role: user.role }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
};
export const register = async (userData) => {
    const existing = await User.findOne({ email: userData.email });
    if (existing)
        throw new Error('Email already registered');
    const hashed = await hashPassword(userData.password);
    const user = new User({ ...userData, password: hashed });
    await user.save();
    return user;
};
export const login = async (email, password) => {
    const user = await User.findOne({ email });
    if (!user)
        throw new Error('Invalid credentials');
    const valid = await validatePassword(password, user.password);
    if (!valid)
        throw new Error('Invalid credentials');
    const token = generateToken(user);
    return { user, token };
};
export const refreshToken = (user) => {
    return generateToken(user);
};
