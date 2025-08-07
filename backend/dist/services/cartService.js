import Cart from '../models/Cart';
const cartService = {
    async createCart(data) {
        const cart = new Cart(data);
        return cart.save();
    },
    async getCartById(id) {
        return Cart.findById(id);
    },
    async getCartByUser(userId) {
        return Cart.findOne({ user: userId });
    },
    async getAllCarts() {
        return Cart.find();
    },
    async updateCart(id, data) {
        return Cart.findByIdAndUpdate(id, data, { new: true });
    },
    async deleteCart(id) {
        return Cart.findByIdAndDelete(id);
    },
    async addItemToCart(cartId, item) {
        return Cart.findByIdAndUpdate(cartId, { $push: { items: item } }, { new: true });
    },
    async removeItemFromCart(cartId, productId) {
        return Cart.findByIdAndUpdate(cartId, { $pull: { items: { product: productId } } }, { new: true });
    },
};
export default cartService;
