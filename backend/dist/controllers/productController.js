import productService from '../services/productService';
export const createProduct = async (req, res, next) => {
    try {
        const product = await productService.createProduct(req.body);
        res.status(201).json(product);
        return;
    }
    catch (err) {
        res.status(500).json({ message: 'Create product failed', error: err.message });
        return;
    }
};
export const getProductById = async (req, res, next) => {
    try {
        const product = await productService.getProductById(req.params.id);
        if (!product) {
            res.status(404).json({ message: 'Product not found' });
            return;
        }
        res.json(product);
        return;
    }
    catch (err) {
        res.status(500).json({ message: 'Get product failed', error: err.message });
        return;
    }
};
export const getAllProducts = async (req, res, next) => {
    try {
        const products = await productService.getAllProducts();
        res.json(products);
        return;
    }
    catch (err) {
        res.status(500).json({ message: 'Get all products failed', error: err.message });
        return;
    }
};
export const updateProduct = async (req, res, next) => {
    try {
        const product = await productService.updateProduct(req.params.id, req.body);
        if (!product) {
            res.status(404).json({ message: 'Product not found' });
            return;
        }
        res.json(product);
        return;
    }
    catch (err) {
        res.status(500).json({ message: 'Update product failed', error: err.message });
        return;
    }
};
export const deleteProduct = async (req, res, next) => {
    try {
        const product = await productService.deleteProduct(req.params.id);
        if (!product) {
            res.status(404).json({ message: 'Product not found' });
            return;
        }
        res.json({ message: 'Product deleted' });
        return;
    }
    catch (err) {
        res.status(500).json({ message: 'Delete product failed', error: err.message });
        return;
    }
};
