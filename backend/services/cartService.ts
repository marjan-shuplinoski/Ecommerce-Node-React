import Cart from '../models/Cart';
import { Cart as ICart, CartItem } from '../types/cart.types';
import { FilterQuery, UpdateQuery } from 'mongoose';

const cartService = {
  async createCart(data: Partial<ICart>) {
    const cart = new Cart(data);
    return cart.save();
  },

  async getCartById(id: string) {
    return Cart.findById(id);
  },

  async getCartByUser(userId: string) {
    return Cart.findOne({ user: userId });
  },

  async getAllCarts() {
    return Cart.find();
  },

  async updateCart(id: string, data: Partial<ICart>) {
    return Cart.findByIdAndUpdate(id, data, { new: true });
  },

  async deleteCart(id: string) {
    return Cart.findByIdAndDelete(id);
  },

  async addItemToCart(cartId: string, item: CartItem) {
    return Cart.findByIdAndUpdate(
      cartId,
      { $push: { items: item } },
      { new: true }
    );
  },

  async removeItemFromCart(cartId: string, productId: string) {
    return Cart.findByIdAndUpdate(
      cartId,
      { $pull: { items: { product: productId } } },
      { new: true }
    );
  },
};

export default cartService;
