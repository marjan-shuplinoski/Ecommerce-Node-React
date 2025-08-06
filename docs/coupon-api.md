# Coupon API Documentation

## Endpoints


### Create Coupon
- **POST** `/api/coupons`
- **Body:** `{ code, discount, type, active, expiresAt, ... }`
- **Auth:** Bearer token (admin only)
- **Response:** 201 Created, coupon object


### Get All Coupons
- **GET** `/api/coupons`
- **Auth:** Bearer token (admin only)
- **Response:** 200 OK, array of coupons


### Get Coupon by ID
- **GET** `/api/coupons/:id`
- **Auth:** Bearer token (admin only)
- **Response:** 200 OK, coupon object


### Update Coupon
- **PUT** `/api/coupons/:id`
- **Body:** `{ ...fields to update }`
- **Auth:** Bearer token (admin only)
- **Response:** 200 OK, updated coupon object


### Delete Coupon
- **DELETE** `/api/coupons/:id`
- **Auth:** Bearer token (admin only)
- **Response:** 200 OK, `{ message: 'Coupon deleted' }`
