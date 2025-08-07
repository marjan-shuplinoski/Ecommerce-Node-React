import Product from '../models/Product';
const productService = {
    async createProduct(data) {
        const product = new Product(data);
        return product.save();
    },
    async getProductById(id) {
        return Product.findById(id);
    },
    async getAllProducts() {
        return Product.find();
    },
    async updateProduct(id, data) {
        return Product.findByIdAndUpdate(id, data, { new: true });
    },
    async deleteProduct(id) {
        return Product.findByIdAndDelete(id);
    },
    async findProducts(query) {
        return Product.find(query);
    },
};
export default productService;
