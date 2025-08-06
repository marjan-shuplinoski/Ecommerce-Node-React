# Delivery API Documentation

## Endpoints


### Create Delivery
- **POST** `/api/deliveries`
- **Body:** `{ order, address, status, method, estimatedDate, ... }`
- **Auth:** Bearer token (admin only)
- **Response:** 201 Created, delivery object


### Get All Deliveries
- **GET** `/api/deliveries`
- **Auth:** Bearer token (admin only)
- **Response:** 200 OK, array of deliveries


### Get Delivery by ID
- **GET** `/api/deliveries/:id`
- **Auth:** Bearer token (admin or user matching delivery)
- **Response:** 200 OK, delivery object


### Update Delivery
- **PUT** `/api/deliveries/:id`
- **Body:** `{ ...fields to update }`
- **Auth:** Bearer token (admin only)
- **Response:** 200 OK, updated delivery object


### Delete Delivery
- **DELETE** `/api/deliveries/:id`
- **Auth:** Bearer token (admin only)
- **Response:** 200 OK, `{ message: 'Delivery deleted' }`
