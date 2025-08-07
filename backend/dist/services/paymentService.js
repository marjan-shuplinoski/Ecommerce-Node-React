import Payment from '../models/Payment';
/**
 * Create a new payment
 * @param paymentData Payment data
 * @param user User object (for RBAC)
 * @returns Created payment
 * @throws Error if validation fails or unauthorized
 */
export const createPayment = async (paymentData, user) => {
    // RBAC: Only admin or user matching order's user can create
    if (user.role !== 'admin' && paymentData.user?.toString() !== user.id) {
        throw new Error('Forbidden: Insufficient role or not payment owner');
    }
    // Validation: order, amount, method required
    if (!paymentData.order || !paymentData.amount || !paymentData.method) {
        throw new Error('Missing required payment fields');
    }
    const payment = new Payment(paymentData);
    return payment.save();
};
/**
 * Get all payments (admin only)
 * @param user User object (for RBAC)
 * @returns Array of payments
 * @throws Error if unauthorized
 */
export const getPayments = async (user) => {
    if (user.role !== 'admin') {
        throw new Error('Forbidden: Admins only');
    }
    return Payment.find();
};
/**
 * Get payment by ID (admin or payment owner)
 * @param id Payment ID
 * @param user User object (for RBAC)
 * @returns Payment object
 * @throws Error if not found or unauthorized
 */
export const getPaymentById = async (id, user) => {
    const payment = await Payment.findById(id);
    if (!payment)
        throw new Error('Payment not found');
    if (user.role !== 'admin' && payment.user?.toString() !== user.id) {
        throw new Error('Forbidden: Not payment owner');
    }
    return payment;
};
/**
 * Update payment (admin only)
 * @param id Payment ID
 * @param update Update fields
 * @param user User object (for RBAC)
 * @returns Updated payment
 * @throws Error if not found or unauthorized
 */
export const updatePayment = async (id, update, user) => {
    if (user.role !== 'admin') {
        throw new Error('Forbidden: Admins only');
    }
    const payment = await Payment.findByIdAndUpdate(id, update, { new: true });
    if (!payment)
        throw new Error('Payment not found');
    return payment;
};
/**
 * Delete payment (admin only)
 * @param id Payment ID
 * @param user User object (for RBAC)
 * @returns Deleted payment
 * @throws Error if not found or unauthorized
 */
export const deletePayment = async (id, user) => {
    if (user.role !== 'admin') {
        throw new Error('Forbidden: Admins only');
    }
    const payment = await Payment.findByIdAndDelete(id);
    if (!payment)
        throw new Error('Payment not found');
    return payment;
};
