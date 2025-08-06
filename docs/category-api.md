# Category API Documentation

## Endpoints


### Create Category
- **POST** `/api/categories`
- **Body:** `{ name, description }`
- **Auth:** Bearer token (admin only)
- **Response:** 201 Created, category object


### Get All Categories
- **GET** `/api/categories`
- **Auth:** None
- **Response:** 200 OK, array of categories


### Get Category by ID
- **GET** `/api/categories/:id`
- **Auth:** None
- **Response:** 200 OK, category object


### Update Category
- **PUT** `/api/categories/:id`
- **Body:** `{ name?, description? }`
- **Auth:** Bearer token (admin only)
- **Response:** 200 OK, updated category object


### Delete Category
- **DELETE** `/api/categories/:id`
- **Auth:** Bearer token (admin only)
- **Response:** 200 OK, `{ message: 'Category deleted' }`
