<h1 align="center">🛒 Ecommerce Node.js & React Project</h1>

<p align="center">
  <a href="https://github.com/marjan-shuplinoski/Ecommerce-Node-React"><img src="https://img.shields.io/github/stars/marjan-shuplinoski/Ecommerce-Node-React?style=social" alt="GitHub stars" /></a>
  <img src="https://img.shields.io/badge/Node.js-Express-green?logo=node.js" />
  <img src="https://img.shields.io/badge/React-Frontend-blue?logo=react" />
  <img src="https://img.shields.io/badge/MongoDB-Mongoose-brightgreen?logo=mongodb" />
  <img src="https://img.shields.io/badge/CI/CD-GitHub%20Actions-purple?logo=github-actions" />
</p>

---

## � Overview

**Ecommerce-Node-React** is a full-stack e-commerce application built with Node.js/Express (backend) and React (frontend). It features atomic task planning, strict standards, CI/CD, and full test coverage.

---

## �📦 Root Structure

```text
Ecommerce-Node-React/
├── backend/
│   ├── package.json
│   ├── .env
│   ├── server.js
│   ├── /config
│   ├── /controllers
│   ├── /models
│   ├── /routes
│   ├── /middleware
│   ├── /utils
│   └── /tests
├── frontend/
│   ├── package.json
│   ├── .env
│   ├── /public
│   ├── /src
│   │   ├── /components
│   │   ├── /pages
│   │   ├── /hooks
│   │   ├── /contexts
│   │   ├── /services
│   │   ├── /utils
│   │   ├── /assets
│   │   ├── /styles
│   │   └── App.js
│   └── /tests
└── README.md
```

---

## 🚀 Backend (Node.js/Express)

```text
backend/
├── server.js              // Entry point
├── .env                   // Environment variables
├── package.json
├── /config                // DB and app config files
│   └── db.js
├── /controllers           // Route handlers
│   ├── userController.js
│   ├── productController.js
│   ├── ...
├── /models                // Mongoose schemas
│   ├── User.js
│   ├── Product.js
│   ├── ...
├── /routes                // Express route files
│   ├── userRoutes.js
│   ├── productRoutes.js
│   ├── ...
├── /middleware            // Auth, error handlers, etc.
│   ├── auth.js
│   ├── errorHandler.js
├── /utils                 // Helper functions
│   └── ...
├── /tests                 // Backend tests (Jest, supertest)
│   └── ...
```

---

## 🌐 Frontend (React)

```text
frontend/
├── package.json
├── .env
├── /public                // Static files (index.html, favicon)
├── /src
│   ├── App.js
│   ├── index.js
│   ├── /components        // Reusable UI components
│   │   ├── ProductCard.jsx
│   │   ├── Navbar.jsx
│   ├── /pages             // Route-based pages
│   │   ├── Home.jsx
│   │   ├── ProductList.jsx
│   │   ├── Cart.jsx
│   │   ├── Checkout.jsx
│   ├── /hooks             // Custom hooks
│   │   └── useCart.js
│   ├── /contexts          // React context providers
│   │   └── AuthContext.js
│   ├── /services          // API service calls
│   │   └── api.js
│   ├── /utils             // Utility functions
│   │   └── formatPrice.js
│   ├── /assets            // Images, fonts, etc.
│   ├── /styles            // CSS/SCSS files
│   │   └── main.css
├── /tests                 // Frontend tests (Jest, React Testing Library)
│   └── ...
```

---

## 🗂️ Models

Main Mongoose models (in `/models`):

- **User**
- **Product**
- **Category**
- **Order**
- **Cart**
- **Payment**
- **Coupon**
- **Delivery**

Each model defines the schema and relationships for its entity (e.g., Order references User, Product, Payment, Coupon).

---

## 🧩 Controllers

Separate controllers (in `/controllers`) for CRUD operations on each model:

- `userController.js`
- `productController.js`
- `categoryController.js`
- `orderController.js`
- `cartController.js`
- `paymentController.js`
- `couponController.js`
- `deliveryController.js`

Each controller exports functions for:
- Creating a new resource
- Getting all resources
- Getting a resource by ID
- Updating a resource
- Deleting a resource

---

## 🔗 Routes

Express routes (in `/routes`) for each model/controller, exposing RESTful endpoints:

- `userRoutes.js`
- `productRoutes.js`
- `categoryRoutes.js`
- `orderRoutes.js`
- `cartRoutes.js`
- `paymentRoutes.js`
- `couponRoutes.js`
- `deliveryRoutes.js`

**Example endpoints:**
- `POST /api/orders` (Create Order)
- `GET /api/orders` (Get all Orders)
- `GET /api/orders/:id` (Get Order by ID)
- `PUT /api/orders/:id` (Update Order)
- `DELETE /api/orders/:id` (Delete Order)
- _(Similar pattern for Cart, Payment, Coupon, Delivery, etc.)_

---

## 📋 Summary Table

<table>
  <thead>
    <tr>
      <th>Entity</th>
      <th>Model</th>
      <th>Controller</th>
      <th>Routes</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>User</td><td>User.js</td><td>userController.js</td><td>userRoutes.js</td></tr>
    <tr><td>Product</td><td>Product.js</td><td>productController.js</td><td>productRoutes.js</td></tr>
    <tr><td>Category</td><td>Category.js</td><td>categoryController.js</td><td>categoryRoutes.js</td></tr>
    <tr><td>Order</td><td>Order.js</td><td>orderController.js</td><td>orderRoutes.js</td></tr>
    <tr><td>Cart</td><td>Cart.js</td><td>cartController.js</td><td>cartRoutes.js</td></tr>
    <tr><td>Payment</td><td>Payment.js</td><td>paymentController.js</td><td>paymentRoutes.js</td></tr>
    <tr><td>Coupon</td><td>Coupon.js</td><td>couponController.js</td><td>couponRoutes.js</td></tr>
    <tr><td>Delivery</td><td>Delivery.js</td><td>deliveryController.js</td><td>deliveryRoutes.js</td></tr>
  </tbody>
</table>

---

## ⚡ Installation

Clone the repository:

```bash
git clone https://github.com/marjan-shuplinoski/Ecommerce-Node-React.git
cd Ecommerce-Node-React
```

Install dependencies for backend and frontend:

```bash
cd backend && npm install
cd ../frontend && npm install
```

---

## ▶️ Usage

Start backend server:

```bash
cd backend
npm run dev
```

Start frontend app:

```bash
cd frontend
npm start
```

---

## 🧪 Testing

Run backend tests:

```bash
cd backend
npm test
```

Run frontend tests:

```bash
cd frontend
npm test
```

---

## 🧪 Database Seeder

A seeder script is available to populate the database with sample users, categories, products, coupons, carts, orders, payments, and deliveries, all properly linked for demo and development purposes.

**Usage:**

```bash
cd backend/seeder
node seeder.js
```

You can also use the npm script:

```bash
cd backend
npm run seed
```

This will run the seeder script from the correct location.

- The script will clear all collections and insert connected sample data.
- Make sure your MongoDB server is running and `.env` is configured.

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests
5. Submit a pull request

---

## 📄 License

This project is licensed under the MIT License.

---


## 🚀 Deployment (Apache2 Remote Host)

To deploy on a remote host with Apache2:

### 1. Build Frontend

```bash
cd frontend
npm run build
```
This creates a `build/` directory with static files.

### 2. Configure Apache2

- Point your Apache2 DocumentRoot to the `frontend/build` directory for the React app.
- Use a reverse proxy for API requests to the backend (Node.js server).

#### Example Apache2 VirtualHost

```apache
<VirtualHost *:80>
    ServerName yourdomain.com
    DocumentRoot /var/www/html/frontend/build

    <Directory /var/www/html/frontend/build>
        Options -Indexes +FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>

    # React Router fallback
    RewriteEngine On
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteRule ^ index.html [QSA,L]

    # Proxy API requests to backend
    ProxyPass /api http://localhost:5000/api
    ProxyPassReverse /api http://localhost:5000/api
</VirtualHost>
```

### 3. Start Backend

Run your Node.js backend (e.g., on port 5000):

```bash
cd backend
npm run start
```

### 4. Enable Apache2 Modules

```bash
sudo a2enmod proxy proxy_http rewrite
sudo systemctl restart apache2
```

---

## 📚 Links

- [Project Board](https://github.com/marjan-shuplinoski/Ecommerce-Node-React/projects)
- [Issues](https://github.com/marjan-shuplinoski/Ecommerce-Node-React/issues)
- [Pull Requests](https://github.com/marjan-shuplinoski/Ecommerce-Node-React/pulls)

---

<p align="center">
  <b>✨ Built with Node.js, Express, React, MongoDB, and Mongoose ✨</b><br>
  <i>Atomic task planning, strict standards, CI/CD, and full test coverage.</i>
</p>
