import { categoryService } from '../services/categoryService';
export const createCategory = async (req, res, next) => {
    try {
        const category = await categoryService.createCategory(req.body);
        res.status(201).json(category);
    }
    catch (error) {
        next(error);
    }
};
export const getCategoryById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const category = await categoryService.getCategoryById(id);
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }
        return res.json(category);
    }
    catch (error) {
        return next(error);
    }
};
export const getAllCategories = async (_req, res, next) => {
    try {
        const categories = await categoryService.getAllCategories();
        res.json(categories);
    }
    catch (error) {
        next(error);
    }
};
export const updateCategory = async (req, res, next) => {
    try {
        const { id } = req.params;
        const category = await categoryService.updateCategory(id, req.body);
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }
        return res.json(category);
    }
    catch (error) {
        return next(error);
    }
};
export const deleteCategory = async (req, res, next) => {
    try {
        const { id } = req.params;
        const category = await categoryService.deleteCategory(id);
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }
        return res.status(204).send();
    }
    catch (error) {
        return next(error);
    }
};
