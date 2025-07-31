# E-commerce Node.js & React Application

A full-stack e-commerce application built with Node.js/Express backend and React frontend.

## Project Structure

```
ecommerce-app/
├── backend/           # Node.js/Express API server
├── frontend/          # React client application
├── docs/             # Documentation and PRD
├── postman/          # Postman collections for API testing
└── README.md
```

## Features

### Backend (Node.js/Express)
- RESTful API with Express.js
- MongoDB with Mongoose ODM
- JWT Authentication
- CRUD operations for all e-commerce entities
- Comprehensive test suite

### Frontend (React)
- Modern React with hooks
- Responsive design
- Context API for state management
- API integration with backend
- Component testing

### Models
- **User**: User management and authentication
- **Product**: Product catalog management
- **Category**: Product categorization
- **Order**: Order processing and management
- **Cart**: Shopping cart functionality
- **Payment**: Payment processing
- **Coupon**: Discount and coupon system
- **Delivery**: Shipping and delivery management

## Quick Start

### Backend Setup
```bash
cd backend
npm install
npm run dev
```

### Frontend Setup
```bash
cd frontend
npm install
npm start
```

## Documentation

See the `/docs` folder for detailed documentation including:
- Product Requirements Document (PRD)
- API Documentation
- Database Schema
- Development Guidelines

## API Testing

Import the Postman collections from the `/postman` folder to test all API endpoints.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests
5. Submit a pull request

## License

MIT License
