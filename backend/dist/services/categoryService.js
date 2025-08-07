import CategoryModel from '../models/Category';
export class CategoryService {
    async createCategory(data) {
        const category = new CategoryModel(data);
        return category.save();
    }
    async getCategoryById(id) {
        return CategoryModel.findById(id);
    }
    async getAllCategories() {
        return CategoryModel.find();
    }
    async updateCategory(id, data) {
        return CategoryModel.findByIdAndUpdate(id, data, { new: true });
    }
    async deleteCategory(id) {
        return CategoryModel.findByIdAndDelete(id);
    }
}
export const categoryService = new CategoryService();
