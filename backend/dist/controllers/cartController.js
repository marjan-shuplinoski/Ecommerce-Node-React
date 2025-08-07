import cartService from '../services/cartService';
export const createCart = async (req, res, next) => {
    try {
        const cart = await cartService.createCart(req.body);
        res.status(201).json(cart);
        return;
    }
    catch (err) {
        res.status(500).json({ message: 'Create cart failed', error: err.message });
    }
};
export const getCartById = async (req, res, next) => {
    try {
        const cart = await cartService.getCartById(req.params.id);
        if (!cart) {
            res.status(404).json({ message: 'Cart not found' });
            return;
        }
        res.json(cart);
        return;
    }
    catch (err) {
        res.status(500).json({ message: 'Get cart failed', error: err.message });
    }
};
export const getCartByUser = async (req, res, next) => {
    try {
        const cart = await cartService.getCartByUser(req.params.userId);
        if (!cart) {
            res.status(404).json({ message: 'Cart not found' });
            return;
        }
        res.json(cart);
        return;
    }
    catch (err) {
        res.status(500).json({ message: 'Get cart by user failed', error: err.message });
    }
};
export const getAllCarts = async (req, res, next) => {
    try {
        const carts = await cartService.getAllCarts();
        res.json(carts);
        return;
    }
    catch (err) {
        res.status(500).json({ message: 'Get all carts failed', error: err.message });
    }
};
export const updateCart = async (req, res, next) => {
    try {
        const cart = await cartService.updateCart(req.params.id, req.body);
        if (!cart) {
            res.status(404).json({ message: 'Cart not found' });
            return;
        }
        res.json(cart);
        return;
    }
    catch (err) {
        res.status(500).json({ message: 'Update cart failed', error: err.message });
    }
};
export const deleteCart = async (req, res, next) => {
    try {
        const cart = await cartService.deleteCart(req.params.id);
        if (!cart) {
            res.status(404).json({ message: 'Cart not found' });
            return;
        }
        res.json({ message: 'Cart deleted' });
        return;
    }
    catch (err) {
        res.status(500).json({ message: 'Delete cart failed', error: err.message });
    }
};
export const addItemToCart = async (req, res, next) => {
    try {
        const cart = await cartService.addItemToCart(req.params.id, req.body);
        if (!cart) {
            res.status(404).json({ message: 'Cart not found' });
            return;
        }
        res.json(cart);
        return;
    }
    catch (err) {
        res.status(500).json({ message: 'Add item to cart failed', error: err.message });
    }
};
export const removeItemFromCart = async (req, res, next) => {
    try {
        const cart = await cartService.removeItemFromCart(req.params.id, req.params.productId);
        if (!cart) {
            res.status(404).json({ message: 'Cart not found' });
            return;
        }
        res.json(cart);
        return;
    }
    catch (err) {
        res.status(500).json({ message: 'Remove item from cart failed', error: err.message });
    }
};
