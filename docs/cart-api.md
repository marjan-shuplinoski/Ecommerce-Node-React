# Cart API Documentation

## Endpoints


### Create Cart
- **POST** `/api/carts`
- **Body:** `{ user, items, total, coupon? }`
- **Auth:** Bearer token (user only)
- **Response:** 201 Created, cart object


### Get All Carts
- **GET** `/api/carts`
- **Auth:** Bearer token (admin only)
- **Response:** 200 OK, array of carts


### Get Cart by ID
- **GET** `/api/carts/:id`
- **Auth:** Bearer token (admin or user matching cart)
- **Response:** 200 OK, cart object


### Get Cart by User
- **GET** `/api/carts/user/:userId`
- **Auth:** Bearer token (admin or user matching :userId)
- **Response:** 200 OK, cart object


### Update Cart
- **PUT** `/api/carts/:id`
- **Body:** `{ items?, total?, coupon? }`
- **Auth:** Bearer token (admin or user matching cart)
- **Response:** 200 OK, updated cart object


### Delete Cart
- **DELETE** `/api/carts/:id`
- **Auth:** Bearer token (admin or user matching cart)
- **Response:** 200 OK, `{ message: 'Cart deleted' }`


### Add Item to Cart
- **POST** `/api/carts/:id/items`
- **Body:** `{ product, quantity, price }`
- **Auth:** Bearer token (admin or user matching cart)
- **Response:** 200 OK, updated cart object


### Remove Item from Cart
- **DELETE** `/api/carts/:id/items/:productId`
- **Auth:** Bearer token (admin or user matching cart)
- **Response:** 200 OK, updated cart object
