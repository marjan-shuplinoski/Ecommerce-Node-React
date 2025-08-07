import Order from '../models/Order';
export const createOrder = async (orderData) => {
    const order = new Order(orderData);
    return order.save();
};
export const getOrders = async () => {
    return Order.find();
};
export const getOrderById = async (id) => {
    return Order.findById(id);
};
export const updateOrder = async (id, update) => {
    return Order.findByIdAndUpdate(id, update, { new: true });
};
export const deleteOrder = async (id) => {
    return Order.findByIdAndDelete(id);
};
