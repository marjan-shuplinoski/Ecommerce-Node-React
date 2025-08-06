# Payment API Documentation

## Endpoints


### Create Payment
- **POST** `/api/payments`
- **Body:** `{ order, user?, amount, currency?, method, status, transactionId?, provider?, paidAt?, receiptUrl?, failureReason?, refundId? }`
- **Auth:** Bearer token (admin or user matching order)
- **Response:** 201 Created, payment object


### Get All Payments
- **GET** `/api/payments`
- **Auth:** Bearer token (admin only)
- **Response:** 200 OK, array of payments


### Get Payment by ID
- **GET** `/api/payments/:id`
- **Auth:** Bearer token (admin or user matching payment)
- **Response:** 200 OK, payment object


### Update Payment
- **PUT** `/api/payments/:id`
- **Body:** `{ ...fields to update }`
- **Auth:** Bearer token (admin only)
- **Response:** 200 OK, updated payment object


### Delete Payment
- **DELETE** `/api/payments/:id`
- **Auth:** Bearer token (admin only)
- **Response:** 200 OK, `{ message: 'Payment deleted' }`
