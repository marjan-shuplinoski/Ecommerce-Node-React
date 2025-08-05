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

**Ecommerce-Node-React** is a comprehensive full-stack e-commerce application built with Node.js/Express/TypeScript (backend) and React/TypeScript (frontend). This project demonstrates advanced MERN stack development with full TypeScript integration, including RBAC, JWT authentication, MongoDB aggregation, React hooks, Redux state management, file uploads, testing, CI/CD, and deployment strategies.

---

## �📦 Root Structure

```text
Ecommerce-Node-React/
├── backend/
│   ├── package.json
│   ├── .env
│   ├── server.ts              // TypeScript entry point
│   ├── tsconfig.json          // TypeScript configuration
│   ├── /config
│   ├── /controllers
│   ├── /models
│   ├── /routes
│   ├── /middleware
│   ├── /utils
│   ├── /services
│   ├── /types                 // TypeScript type definitions
│   ├── /tests
│   └── /dist                  // Compiled JavaScript output
├── frontend/
│   ├── package.json
│   ├── .env
│   ├── tsconfig.json          // TypeScript configuration
│   ├── tsconfig.app.json      // App-specific TypeScript config
│   ├── tsconfig.node.json     // Node-specific TypeScript config
│   ├── /public
│   ├── /src
│   │   ├── /components
│   │   ├── /pages
│   │   ├── /hooks
│   │   ├── /contexts
│   │   ├── /services
│   │   ├── /utils
│   │   ├── /types             // TypeScript type definitions
│   │   ├── /assets
│   │   ├── /styles
│   │   └── App.tsx            // TypeScript React component
│   ├── /tests
│   └── /dist                  // Build output
└── README.md
```

---

## 🚀 Backend (Node.js/Express/TypeScript)

**Advanced modular architecture with full enterprise features and TypeScript:**

```text
backend/
├── server.ts              // TypeScript entry point with Express setup
├── .env                   // Environment variables (JWT secrets, DB URI)
├── package.json           // Dependencies (express, mongoose, bcrypt, jwt, multer, helmet, @types/*, etc.)
├── tsconfig.json          // TypeScript configuration
├── nodemon.json           // Nodemon config for TypeScript
├── /config                // DB and app config files
│   ├── db.ts              // MongoDB connection with Mongoose
│   └── cloudinary.ts      // File upload configuration
├── /controllers           // Route handlers (business logic delegation)
│   ├── userController.ts
│   ├── productController.ts
│   ├── authController.ts  // JWT login/signup/refresh tokens
│   ├── uploadController.ts // File upload handling
│   └── ...
├── /models                // Mongoose schemas with TypeScript interfaces
│   ├── User.ts            // User schema with role field (user/merchant/admin)
│   ├── Product.ts         // Product schema with approval status
│   ├── RefreshToken.ts    // JWT refresh token management
│   └── ...
├── /routes                // Express route definitions
│   ├── userRoutes.ts      // RESTful CRUD endpoints
│   ├── productRoutes.ts   // Product CRUD with RBAC
│   ├── authRoutes.ts      // Login/signup/refresh/OAuth routes
│   └── ...
├── /middleware            // Express middleware
│   ├── auth.ts            // JWT verification & role-based access control
│   ├── upload.ts          // Multer file upload middleware
│   ├── rateLimit.ts       // Rate limiting for security
│   ├── sanitize.ts        // Input sanitization
│   ├── errorHandler.ts    // Global error handling
│   └── logger.ts          // Request/response logging
├── /services             // Business logic layer
│   ├── userService.ts     // User business logic
│   ├── productService.ts  // Product approval workflow
│   ├── authService.ts     // JWT & OAuth logic
│   ├── analyticsService.ts // MongoDB aggregation pipelines
│   └── emailService.ts    // Email notifications
├── /types                 // TypeScript type definitions
│   ├── express.d.ts       // Express request extensions
│   ├── user.types.ts      // User-related types
│   ├── product.types.ts   // Product-related types
│   ├── auth.types.ts      // Authentication types
│   └── api.types.ts       // API response types
├── /utils                 // Helper functions
│   ├── bcrypt.ts          // Password hashing utilities
│   ├── jwt.ts             // JWT token utilities
│   └── validators.ts      // Input validation schemas
├── /tests                 // Backend tests (Jest, Supertest)
│   ├── auth.test.ts       // Authentication flow tests
│   ├── products.test.ts   // Product CRUD tests
│   └── ...
├── /dist                  // Compiled JavaScript output
└── /uploads              // Local file storage (if not using cloud)
```

**Key Backend Features:**
- **TypeScript Integration:** Full type safety with interfaces and strict typing
- **RESTful API Design:** Strongly typed CRUD operations for all entities
- **JWT Authentication:** Type-safe access/refresh token flow with bcrypt password hashing
- **OAuth Integration:** Typed Google/GitHub login support
- **Role-Based Access Control:** Enum-based User/Merchant/Admin permissions
- **File Upload System:** Typed Multer integration with Cloudinary/local storage
- **MongoDB Features:** Typed aggregation pipelines, transactions, indexes with Mongoose
- **Security:** Helmet, rate limiting, input sanitization, CORS with type definitions
- **Modular Architecture:** Clean separation of routes/services/controllers with TypeScript
- **Error Handling:** Centralized error management with typed HTTP responses

---

## 🎯 Technical Skills Demonstrated

### **React Fundamentals**
- ✅ **TypeScript Integration:** Full type safety with interfaces, props typing, and strict mode
- ✅ **JSX Components:** Strongly typed functional components with TypeScript props and children
- ✅ **State Management:** Typed useState and useEffect hooks for local component state
- ✅ **React Router:** Type-safe routing with protected routes and lazy loading
- ✅ **Form Handling:** Comprehensive validation with TypeScript schemas and real-time feedback
- ✅ **API Integration:** Typed REST API consumption with axios and error handling

### **React Advanced**
- ✅ **Advanced Hooks:** Typed useContext, useReducer, custom hooks for reusable logic
- ✅ **Global State:** Redux Toolkit with TypeScript + Context API for application-wide state
- ✅ **Performance:** Lazy loading, code splitting, React.memo, useMemo with proper typing
- ✅ **Custom Hooks:** DRY principles with reusable stateful logic and TypeScript generics

### **Express.js Backend**
- ✅ **TypeScript Server:** Express server with full TypeScript integration and type definitions
- ✅ **RESTful APIs:** Strongly typed CRUD operations with proper HTTP methods and responses
- ✅ **Middleware:** Type-safe authentication, logging, error handling, file upload middleware
- ✅ **Modular Architecture:** Clean separation of routes/services/controllers with TypeScript interfaces
- ✅ **File Uploads:** Typed Multer integration with cloud storage and validation
- ✅ **Security:** RBAC with enums, rate limiting, input sanitization, CORS with type safety

### **MongoDB & Database**
- ✅ **CRUD Operations:** Typed Mongoose models with validation and relationships
- ✅ **Schema Design:** Type-safe normalized and denormalized data structures
- ✅ **Aggregation Pipelines:** Strongly typed complex queries for analytics and reporting
- ✅ **Transactions:** ACID compliance for critical operations with TypeScript interfaces
- ✅ **Indexing:** Performance optimization with database indexes and typed schemas

### **Authentication & Security**
- ✅ **JWT Implementation:** Type-safe access/refresh token flow with bcrypt hashing
- ✅ **OAuth Integration:** Strongly typed Google/GitHub social login
- ✅ **Role-Based Access:** Enum-based User/Merchant/Admin permission system
- ✅ **Security Best Practices:** Helmet, rate limiting, input validation with TypeScript schemas

### **Testing & Quality**
- ✅ **Unit Testing:** Jest with TypeScript for backend services and utilities
- ✅ **Component Testing:** React Testing Library with TypeScript for UI components
- ✅ **Integration Testing:** Type-safe API endpoint testing with Supertest
- ✅ **E2E Testing:** Full user workflow testing with TypeScript test suites

### **DevOps & Deployment**
- ✅ **CI/CD Pipelines:** GitHub Actions for automated testing and deployment
- ✅ **Containerization:** Docker for development and production environments
- ✅ **Cloud Deployment:** Frontend (Netlify/Vercel) + Backend (Render/Railway)
- ✅ **Environment Management:** Development, staging, and production configs

### **Development Tools**
- ✅ **TypeScript Configuration:** Strict TypeScript setup with proper tsconfig.json files
- ✅ **Version Control:** Git workflows with branches, PRs, and code reviews
- ✅ **API Testing:** Postman collections with TypeScript type generation
- ✅ **Package Management:** NPM/Yarn with TypeScript dependency management
- ✅ **Code Quality:** ESLint, Prettier, pre-commit hooks with TypeScript rules

### **Project Management**
- ✅ **Full-Stack Applications:** Complete e-commerce platform with admin panel
- ✅ **Advanced Features:** Filtering, pagination, sorting, search functionality
- ✅ **Team Collaboration:** Code reviews, pull requests, agile methodologies
- ✅ **Communication:** Clear documentation, blocker reporting, technical discussions

---

## 🌐 Frontend (React/TypeScript)

**Modern React application with TypeScript, advanced patterns and state management:**

```text
frontend/
├── package.json           // Dependencies (react, react-router, redux, axios, @types/*, etc.)
├── .env                   // API endpoints, OAuth keys
├── tsconfig.json          // TypeScript configuration
├── tsconfig.app.json      // App-specific TypeScript config
├── tsconfig.node.json     // Node-specific TypeScript config
├── Dockerfile             // Docker containerization
├── /public                // Static files (index.html, favicon, manifest.json)
├── /src
│   ├── App.tsx            // Main app component with routing
│   ├── index.tsx          // React 18 root with StrictMode
│   ├── main.tsx           // Vite entry point
│   ├── vite-env.d.ts      // Vite type definitions
│   ├── /components        // Reusable UI components (TypeScript)
│   │   ├── ProductCard.tsx    // Product display component
│   │   ├── Navbar.tsx         // Navigation with role-based menu
│   │   ├── ProtectedRoute.tsx // Route protection HOC
│   │   ├── LoadingSpinner.tsx // Loading states
│   │   ├── ErrorBoundary.tsx  // Error handling component
│   │   └── FileUpload.tsx     // File upload component
│   ├── /pages             // Route-based pages with lazy loading
│   │   ├── Home.tsx           // Landing page
│   │   ├── ProductList.tsx    // Products with filtering/pagination
│   │   ├── ProductDetail.tsx  // Product details page
│   │   ├── Cart.tsx           // Shopping cart management
│   │   ├── Checkout.tsx       // Payment flow
│   │   ├── Login.tsx          // JWT + OAuth login
│   │   ├── Register.tsx       // User registration with validation
│   │   ├── Dashboard/         // Role-based dashboards
│   │   │   ├── UserDashboard.tsx
│   │   │   ├── MerchantDashboard.tsx
│   │   │   └── AdminDashboard.tsx
│   │   └── Admin/             // Admin panel pages
│   │       ├── UserManager.tsx
│   │       ├── ProductApproval.tsx
│   │       └── Analytics.tsx
│   ├── /hooks             // Custom React hooks with TypeScript
│   │   ├── useAuth.ts         // Authentication state management
│   │   ├── useCart.ts         // Shopping cart logic
│   │   ├── useAPI.ts          // API calls with error handling
│   │   ├── useLocalStorage.ts // Local storage management
│   │   └── usePagination.ts   // Pagination logic
│   ├── /store             // Redux/Context state management
│   │   ├── store.ts           // Redux store configuration
│   │   ├── authSlice.ts       // Authentication state
│   │   ├── cartSlice.ts       // Cart state management
│   │   ├── productSlice.ts    // Product state
│   │   └── /contexts          // React Context providers
│   │       ├── AuthContext.tsx // Global auth context
│   │       └── ThemeContext.tsx // Theme management
│   ├── /services          // API service layer
│   │   ├── api.ts             // Axios configuration with interceptors
│   │   ├── authService.ts     // Authentication API calls
│   │   ├── productService.ts  // Product API calls
│   │   └── uploadService.ts   // File upload handling
│   ├── /types             // TypeScript type definitions
│   │   ├── user.types.ts      // User-related types
│   │   ├── product.types.ts   // Product-related types
│   │   ├── auth.types.ts      // Authentication types
│   │   ├── api.types.ts       // API response types
│   │   └── common.types.ts    // Common/shared types
│   ├── /utils             // Utility functions
│   │   ├── formatPrice.ts     // Currency formatting
│   │   ├── validators.ts      // Form validation schemas
│   │   ├── constants.ts       // App constants
│   │   └── helpers.ts         // Generic helper functions
│   ├── /assets            // Static assets
│   │   ├── /images           // Image files
│   │   ├── /icons            // SVG icons
│   │   └── /fonts            // Custom fonts
│   ├── /styles            // Styling (CSS/SCSS/Styled-components)
│   │   ├── globals.css       // Global styles
│   │   ├── variables.css     // CSS custom properties
│   │   └── /components       // Component-specific styles
├── /tests                 // Frontend tests
│   ├── setupTests.ts         // Test configuration
│   ├── /components           // Component tests (React Testing Library)
│   ├── /pages               // Page tests
│   └── /utils               // Utility function tests
└── /.github               // GitHub Actions workflows
    └── /workflows
        ├── ci.yml            // Continuous Integration
        └── deploy.yml        // Deployment pipeline
```

**Key Frontend Features:**
- **TypeScript Integration:** Full type safety with interfaces, strict mode, and proper tsconfig
- **Modern React Patterns:** Typed functional components with hooks (useState, useEffect, useContext, useReducer)
- **Advanced State Management:** Redux Toolkit with TypeScript + Context API for global state
- **React Router:** Type-safe dynamic routing with lazy loading and code splitting
- **Authentication Flow:** Strongly typed JWT handling with automatic token refresh
- **Form Management:** Comprehensive form validation with TypeScript schemas and error handling
- **File Upload:** Typed drag-and-drop file upload with progress tracking
- **Performance Optimization:** Lazy loading, memoization, code splitting with proper typing
- **Custom Hooks:** Reusable logic with TypeScript generics for DRY principles
- **API Integration:** Typed Axios with interceptors for REST API consumption
- **Role-Based UI:** Dynamic components based on user permissions with enum types
- **Responsive Design:** Mobile-first approach with modern CSS and TypeScript utilities
- **Testing:** Comprehensive component and integration tests with TypeScript

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

- `userController.ts`
- `productController.ts`
- `categoryController.ts`
- `orderController.ts`
- `cartController.ts`
- `paymentController.ts`
- `couponController.ts`
- `deliveryController.ts`

Each controller exports functions for:
- Creating a new resource
- Getting all resources
- Getting a resource by ID
- Updating a resource
- Deleting a resource

---

## 🔗 Routes

Express routes (in `/routes`) for each model/controller, exposing RESTful endpoints:

- `userRoutes.ts`
- `productRoutes.ts`
- `categoryRoutes.ts`
- `orderRoutes.ts`
- `cartRoutes.ts`
- `paymentRoutes.ts`
- `couponRoutes.ts`
- `deliveryRoutes.ts`

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
    <tr><td>User</td><td>User.ts</td><td>userController.ts</td><td>userRoutes.ts</td></tr>
    <tr><td>Product</td><td>Product.ts</td><td>productController.ts</td><td>productRoutes.ts</td></tr>
    <tr><td>Category</td><td>Category.ts</td><td>categoryController.ts</td><td>categoryRoutes.ts</td></tr>
    <tr><td>Order</td><td>Order.ts</td><td>orderController.ts</td><td>orderRoutes.ts</td></tr>
    <tr><td>Cart</td><td>Cart.ts</td><td>cartController.ts</td><td>cartRoutes.ts</td></tr>
    <tr><td>Payment</td><td>Payment.ts</td><td>paymentController.ts</td><td>paymentRoutes.ts</td></tr>
    <tr><td>Coupon</td><td>Coupon.ts</td><td>couponController.ts</td><td>couponRoutes.ts</td></tr>
    <tr><td>Delivery</td><td>Delivery.ts</td><td>deliveryController.ts</td><td>deliveryRoutes.ts</td></tr>
  </tbody>
</table>

---

## ⚡ Installation

**Prerequisites:**
- Node.js 18+ and npm/yarn
- TypeScript 5.0+ (installed globally or via project)
- MongoDB (local or cloud)
- Git for version control

Clone the repository:

```bash
git clone https://github.com/marjan-shuplinoski/Ecommerce-Node-React.git
cd Ecommerce-Node-React
```

Install dependencies for backend and frontend:

```bash
# Backend dependencies (includes TypeScript and @types packages)
cd backend && npm install

# Frontend dependencies (includes TypeScript and @types packages)
cd ../frontend && npm install
```

**TypeScript Setup:**
```bash
# Backend TypeScript configuration is already included
# Compile TypeScript to JavaScript
cd backend && npm run build

# Frontend TypeScript configuration is already included  
# TypeScript compilation handled by Vite/React build process
cd frontend && npm run build
```

**Environment Setup:**
```bash
# Backend .env
cp backend/.env.example backend/.env
# Configure: MONGODB_URI, JWT_SECRET, CLOUDINARY_CONFIG, etc.

# Frontend .env
cp frontend/.env.example frontend/.env  
# Configure: REACT_APP_API_URL, REACT_APP_OAUTH_KEYS, etc.
```

---

## ▶️ Usage

**Development Mode:**

Start backend server with TypeScript hot reload:
```bash
cd backend
npm run dev  # ts-node-dev for TypeScript auto-restart
```

Start frontend with TypeScript hot reload:
```bash
cd frontend  
npm start    # Vite dev server with TypeScript support
```

**Production Mode:**
```bash
# Build backend TypeScript to JavaScript
cd backend && npm run build

# Build frontend TypeScript/React app
cd frontend && npm run build

# Start backend in production (from compiled JS)
cd backend && npm start
```

**TypeScript Development:**
```bash
# Type checking without compilation
cd backend && npm run type-check
cd frontend && npm run type-check

# Watch mode for TypeScript compilation
cd backend && npm run build:watch
```

**Docker Development:**
```bash
# Run full stack with Docker Compose (includes TypeScript compilation)
docker-compose up --build

# Individual services with TypeScript
docker run -p 5000:5000 ecommerce-backend-ts
docker run -p 3000:3000 ecommerce-frontend-ts
```

---

## 🧪 Testing

**Backend Testing (TypeScript):**
```bash
cd backend

# Run all TypeScript tests
npm test

# Run tests with coverage
npm run test:coverage

# Type checking before tests
npm run type-check

# Run specific test suites
npm run test:auth      # Authentication tests
npm run test:products  # Product CRUD tests
npm run test:api       # API integration tests
```

**Frontend Testing (TypeScript):**
```bash
cd frontend

# Run all TypeScript tests
npm test

# Run tests with coverage
npm run test:coverage

# Type checking before tests
npm run type-check

# Run component tests
npm run test:components

# Run E2E tests
npm run test:e2e
```

**API Testing:**
```bash
# Import Postman collection with TypeScript type generation
postman/Ecommerce-API.postman_collection.json

# Or run automated API tests
cd backend && npm run test:postman
```

---

## 🧪 Database Seeder

A seeder script is available to populate the database with sample users, categories, products, coupons, carts, orders, payments, and deliveries, all properly linked for demo and development purposes.

**Usage:**

```bash
cd backend/seeder
npx ts-node seeder.ts
```

You can also use the npm script:

```bash
cd backend
npm run seed
```

This will run the TypeScript seeder script from the correct location.

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


## 🚀 Deployment

### **Frontend Deployment (Netlify/Vercel)**

```bash
# Build optimized production bundle
cd frontend
npm run build

# Deploy to Netlify
netlify deploy --prod --dir=build

# Or deploy to Vercel
vercel --prod
```

### **Backend Deployment (Render/Railway)**

```bash
# Prepare for deployment (compile TypeScript)
cd backend
npm run build  # Compile TypeScript to JavaScript for production

# Deploy to Render
git push origin main  # Auto-deploy from GitHub

# Or deploy to Railway
railway login && railway deploy
```

### **Full-Stack Docker Deployment**

```bash
# Build production images (includes TypeScript compilation)
docker build -t ecommerce-frontend-ts ./frontend
docker build -t ecommerce-backend-ts ./backend

# Deploy with Docker Compose
docker-compose -f docker-compose.prod.yml up -d

# Or deploy to cloud (AWS/GCP/Azure)
kubectl apply -f k8s/
```

### **CI/CD Pipeline (GitHub Actions)**

Automated deployment triggers on:
- **Push to main:** Auto-deploy to production
- **Pull requests:** Deploy to staging environment
- **All commits:** Run tests and linting

```yaml
# .github/workflows/deploy.yml
name: Deploy to Production
on:
  push:
    branches: [main]
jobs:
  test-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node.js
        uses: actions/setup-node@v3
      - name: Install dependencies
        run: npm install
      - name: Type check
        run: npm run type-check
      - name: Run tests
        run: npm test
      - name: Build TypeScript
        run: npm run build
      - name: Deploy
        run: npm run deploy
```

---

## 📚 Links



<p align="center">
  <b>✨ Built with Node.js, Express, React, MongoDB, and Mongoose ✨</b><br>
  <i>Atomic task planning, strict standards, CI/CD, and full test coverage.</i>
</p>

---

## 🚦 New Development Phase: Atomic Task Plan & Architecture

This project is now following a new atomic, role-driven architecture and task plan for both backend and frontend. All new features and files will be developed according to the following structure:

### Backend Architecture (Node.js/Express)

- **Role-Based Access Control (RBAC):** User, merchant, and admin roles enforced at route/middleware level.
- **Product Approval Workflow:** Merchants submit products, admins approve/reject, with dashboard alerts for status changes.
- **CRUD & Special Operations:** Full CRUD and special endpoints (sorting, approving, etc.) for all models (User, Product, Category, Order, Cart, Payment, Coupon, Delivery).
- **Advanced Analytics:** MongoDB aggregation endpoints for dashboards (sales, avg order, customer stats, etc.).
- **Layered Structure:** All business logic in `/services`, route handlers in `/controllers`, RESTful endpoints in `/routes`.

### Frontend Architecture (React)

- **Auth & Role-Based Routing:** Authentication and protected routes for user, merchant, and admin dashboards.
- **User Dashboard:** Product browsing, sorting, details, cart, checkout, and order history.
- **Merchant Dashboard:** Product management (CRUD, submit for approval), analytics, and customer data access.
- **Admin Dashboard:** Product approval, user/merchant management, and global analytics.
- **CRUD & Special Pages:** All models/entities have CRUD and special pages (sorting, approval, etc.).
- **Advanced Analytics:** Dashboards include analytics and stats using backend aggregation endpoints.

### Task Plan (Atomic, Connected)

All new work is split into atomic tasks, each with clear dependencies and verification criteria. See `/tasks/Ecommerce-Node-React/tasks.json` for the current task list and status.

**Key Tasks:**

- Backend: RBAC, product approval workflow, CRUD/services/controllers, analytics endpoints
- Frontend: Auth/routing, dashboards for each role, CRUD/special pages, analytics

> All new files, folders, and features will follow this plan. See the project board and `/tasks` for progress.

---

## 📚 Resources & Links

### **Project Links**
- [Live Demo](https://ecommerce-react-demo.netlify.app) - Frontend deployment
- [API Documentation](https://ecommerce-api.railway.app/docs) - Swagger/OpenAPI docs
- [Project Board](https://github.com/marjan-shuplinoski/Ecommerce-Node-React/projects) - Development progress
- [Issues](https://github.com/marjan-shuplinoski/Ecommerce-Node-React/issues) - Bug reports and features
- [Pull Requests](https://github.com/marjan-shuplinoski/Ecommerce-Node-React/pulls) - Code reviews

### **Documentation**
- [Setup Guide](./docs/setup.md) - Detailed installation instructions
- [API Reference](./docs/api.md) - Complete endpoint documentation  
- [Architecture](./docs/architecture.md) - System design and patterns
- [Contributing](./docs/contributing.md) - Development workflow and guidelines
- [Deployment](./docs/deployment.md) - Production deployment guides

### **Testing & Development**
- [Postman Collection](./postman/Ecommerce-API.postman_collection.json) - API testing
- [Test Coverage Reports](https://codecov.io/gh/marjan-shuplinoski/Ecommerce-Node-React) - Code coverage
- [Performance Metrics](./docs/performance.md) - Load testing and optimization

---

## 🤝 Contributing

### **Development Workflow**
1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Follow** coding standards (ESLint/Prettier)
4. **Write** tests for new functionality
5. **Commit** changes with conventional commits
6. **Push** to your branch (`git push origin feature/amazing-feature`)
7. **Open** a Pull Request with detailed description

### **Code Standards**
- **TypeScript First:** Strict TypeScript configuration with no implicit any
- **Conventional Commits:** Use semantic commit messages
- **Code Quality:** ESLint + Prettier with TypeScript rules for consistent formatting
- **Testing:** Minimum 80% test coverage required with TypeScript test suites
- **Documentation:** Update docs for new features with proper type definitions
- **Reviews:** All PRs require at least one approval and type checking

### **Agile Process**
- **Sprint Planning:** 2-week development cycles
- **Daily Standups:** Progress updates and blocker discussion
- **Code Reviews:** Collaborative feedback and knowledge sharing
- **Retrospectives:** Continuous improvement and team learning

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  <b>✨ Built with Node.js, Express, React, MongoDB, Mongoose, and TypeScript ✨</b><br>
  <i>Demonstrating advanced MERN stack development with enterprise-grade features and full TypeScript integration</i>
</p>
