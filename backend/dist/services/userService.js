import User from '../models/User';
import bcrypt from 'bcryptjs';
export default {
    async createUser(data) {
        if (data.password) {
            data.password = await bcrypt.hash(data.password, 10);
        }
        const user = new User(data);
        return user.save();
    },
    async getUserById(id) {
        return User.findById(id);
    },
    async getAllUsers() {
        return User.find();
    },
    async updateUser(id, data) {
        if (data.password) {
            data.password = await bcrypt.hash(data.password, 10);
        }
        return User.findByIdAndUpdate(id, data, { new: true });
    },
    async deleteUser(id) {
        return User.findByIdAndDelete(id);
    },
    async findUser(query) {
        return User.findOne(query);
    },
    async comparePassword(user, password) {
        return bcrypt.compare(password, user.password);
    }
};
