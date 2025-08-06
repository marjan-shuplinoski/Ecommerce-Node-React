# Order API Documentation

## Endpoints


### Create Order
- **POST** `/api/orders`
- **Body:** `{ user, items, total, status, address, paymentMethod, ... }`
- **Auth:** Bearer token (user only)
- **Response:** 201 Created, order object


### Get All Orders
- **GET** `/api/orders`
- **Auth:** Bearer token (admin only)
- **Response:** 200 OK, array of orders


### Get Order by ID
- **GET** `/api/orders/:id`
- **Auth:** Bearer token (admin or user matching :id)
- **Response:** 200 OK, order object


### Update Order
- **PUT** `/api/orders/:id`
- **Body:** `{ ...fields to update }`
- **Auth:** Bearer token (admin only)
- **Response:** 200 OK, updated order object


### Delete Order
- **DELETE** `/api/orders/:id`
- **Auth:** Bearer token (admin only)
- **Response:** 200 OK, `{ message: 'Order deleted' }`
