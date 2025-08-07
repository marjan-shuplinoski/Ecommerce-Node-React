import Delivery from '../models/Delivery';
export const createDelivery = async (deliveryData) => {
    const delivery = new Delivery(deliveryData);
    return delivery.save();
};
export const getDeliveries = async () => {
    return Delivery.find();
};
export const getDeliveryById = async (id) => {
    return Delivery.findById(id);
};
export const updateDelivery = async (id, update) => {
    return Delivery.findByIdAndUpdate(id, update, { new: true });
};
export const deleteDelivery = async (id) => {
    return Delivery.findByIdAndDelete(id);
};
