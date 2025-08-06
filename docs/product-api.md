# Product API Documentation

## Endpoints


### Create Product
- **POST** `/api/products`
- **Body:** `{ name, price, category, description?, images?, stock?, sku?, brand?, status?, attributes? }`
- **Auth:** Bearer token (merchant or admin)
- **Response:** 201 Created, product object


### Get All Products
- **GET** `/api/products`
- **Auth:** None
- **Response:** 200 OK, array of products


### Get Product by ID
- **GET** `/api/products/:id`
- **Auth:** None
- **Response:** 200 OK, product object


### Update Product
- **PUT** `/api/products/:id`
- **Body:** `{ name?, price?, category?, description?, images?, stock?, sku?, brand?, status?, attributes? }`
- **Auth:** Bearer token (merchant or admin)
- **Response:** 200 OK, updated product object


### Delete Product
- **DELETE** `/api/products/:id`
- **Auth:** Bearer token (admin only)
- **Response:** 200 OK, `{ message: 'Product deleted' }`
