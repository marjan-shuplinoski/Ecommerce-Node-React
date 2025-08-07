import Order from '../models/Order';
export const createOrder = async (req, res, next) => {
    try {
        const order = new Order(req.body);
        await order.save();
        res.status(201).json(order);
    }
    catch (err) {
        next(err);
    }
};
export const getOrders = async (req, res, next) => {
    try {
        const orders = await Order.find();
        res.json(orders);
    }
    catch (err) {
        next(err);
    }
};
export const getOrderById = async (req, res, next) => {
    try {
        const order = await Order.findById(req.params.id);
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        return res.json(order);
    }
    catch (err) {
        return next(err);
    }
};
export const updateOrder = async (req, res, next) => {
    try {
        const order = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        return res.json(order);
    }
    catch (err) {
        return next(err);
    }
};
export const deleteOrder = async (req, res, next) => {
    try {
        const order = await Order.findByIdAndDelete(req.params.id);
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        return res.json({ message: 'Order deleted' });
    }
    catch (err) {
        return next(err);
    }
};
