import '../models/Order';
import userService from '../services/userService';
import * as authService from '../services/authService';
export const register = async (req, res, next) => {
    try {
        const { name, email, password, role } = req.body;
        const user = await authService.register({ name, email, password, role });
        // Exclude password from response
        const { password: _pw, ...userObj } = user.toObject ? user.toObject() : user;
        res.status(201).json(userObj);
        return;
    }
    catch (err) {
        if (err.message && err.message.toLowerCase().includes('already registered')) {
            res.status(400).json({ message: 'Email already registered' });
        }
        else {
            res.status(500).json({ message: 'Registration failed', error: err.message });
        }
        return;
    }
};
export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const { user, token } = await authService.login(email, password);
        // Exclude password from response
        const { password: _pw, ...userObj } = user.toObject ? user.toObject() : user;
        res.json({ token, user: userObj });
        return;
    }
    catch (err) {
        res.status(500).json({ message: 'Login failed', error: err.message });
        return;
    }
};
export const getUser = async (req, res, next) => {
    try {
        const user = await userService.getUserById(req.params.id);
        if (!user)
            return res.status(404).json({ message: 'User not found' });
        // Exclude password from response
        const { password: _pw, ...userObj } = user.toObject ? user.toObject() : user;
        res.json(userObj);
        return;
    }
    catch (err) {
        res.status(500).json({ message: 'Get user failed', error: err.message });
        return;
    }
};
export const updateUser = async (req, res, next) => {
    try {
        const user = await userService.updateUser(req.params.id, req.body);
        if (!user)
            return res.status(404).json({ message: 'User not found' });
        // Exclude password from response
        const { password: _pw, ...userObj } = user.toObject ? user.toObject() : user;
        res.json(userObj);
        return;
    }
    catch (err) {
        res.status(500).json({ message: 'Update user failed', error: err.message });
        return;
    }
};
export const deleteUser = async (req, res, next) => {
    try {
        const user = await userService.deleteUser(req.params.id);
        if (!user)
            return res.status(404).json({ message: 'User not found' });
        res.json({ message: 'User deleted' });
        return;
    }
    catch (err) {
        res.status(500).json({ message: 'Delete user failed', error: err.message });
        return;
    }
};
// Preview user's orders
export const previewOrders = async (req, res, next) => {
    try {
        const user = await userService.getUserById(req.params.id);
        if (!user)
            return res.status(404).json({ message: 'User not found' });
        if (typeof user.populate === 'function') {
            await user.populate('orders');
        }
        res.json(user.orders);
        return;
    }
    catch (err) {
        console.error('previewOrders error:', err);
        res.status(500).json({ message: 'Preview orders failed', error: err.message, stack: err.stack });
        return;
    }
};
// Preview user's cart
export const previewCart = async (req, res, next) => {
    try {
        const user = await userService.getUserById(req.params.id);
        if (!user)
            return res.status(404).json({ message: 'User not found' });
        if (typeof user.populate === 'function') {
            await user.populate('cart');
        }
        res.json(user.cart);
        return;
    }
    catch (err) {
        res.status(500).json({ message: 'Preview cart failed', error: err.message });
        return;
    }
};
export const getAllUsers = async (req, res, next) => {
    try {
        const users = await userService.getAllUsers();
        res.json(users);
    }
    catch (err) {
        next(err);
    }
};
