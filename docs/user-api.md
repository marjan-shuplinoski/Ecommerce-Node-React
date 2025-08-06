# User API Documentation

## Endpoints


### Register User
- **POST** `/api/users/register`
- **Body:** `{ name, email, password, role }`
- **Auth:** None
- **Response:** 201 Created, user object (no password)


### Login User
- **POST** `/api/users/login`
- **Body:** `{ email, password }`
- **Auth:** None
- **Response:** 200 OK, `{ token, user }`


### Get All Users
- **GET** `/api/users`
- **Auth:** Bearer token (admin only)
- **Response:** 200 OK, array of users


### Get User by ID
- **GET** `/api/users/:id`
- **Auth:** Bearer token (admin or user matching :id)
- **Response:** 200 OK, user object


### Update User
- **PUT** `/api/users/:id`
- **Body:** `{ name?, email?, password?, role? }`
- **Auth:** Bearer token (admin or user matching :id)
- **Response:** 200 OK, updated user object


### Delete User
- **DELETE** `/api/users/:id`
- **Auth:** Bearer token (admin only)
- **Response:** 200 OK, `{ message: 'User deleted' }`


### Preview User Orders
- **GET** `/api/users/:id/orders`
- **Auth:** Bearer token (admin or user matching :id)
- **Response:** 200 OK, array of orders


### Preview User Cart
- **GET** `/api/users/:id/cart`
- **Auth:** Bearer token (admin or user matching :id)
- **Response:** 200 OK, cart object
