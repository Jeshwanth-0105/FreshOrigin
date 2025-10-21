# Farm2Home - Direct Farm to Consumer Platform

A full-stack web application connecting farmers directly with clients, eliminating middlemen for fresh, affordable farm products.

## ✅ ALL ISSUES FIXED & FEATURES COMPLETE

### 🔧 Recent Fixes Applied:
1. **Cancel Order Feature** - Clients can cancel pending orders
2. **Input Validation** - Frontend and backend validation for all forms
3. **Security Improvements** - XSS protection and data sanitization
4. **Error Handling** - Proper error messages and user feedback
5. **UI/UX Enhancements** - Loading states, pagination, better styling
6. **Database Schema** - Added 'cancelled' status to orders

## Features

### Authentication & Roles
- ✅ Separate registration/login for Farmers and Clients
- ✅ JWT-based authentication with secure token handling
- ✅ Role-based access control with middleware protection

### Farmer Dashboard
- ✅ Add products with validation (name, category, price, quantity, unit)
- ✅ Image upload for products with preview
- ✅ Farm information management (name, address, phone)
- ✅ Product management (edit/delete with confirmation)
- ✅ View and manage incoming orders with status updates
- ✅ Order status management (pending → confirmed → delivered)

### Client Dashboard
- ✅ Browse products with search and category filters
- ✅ Pagination for better performance
- ✅ View detailed farmer information for each product
- ✅ Place orders with quantity validation
- ✅ **Cancel pending orders** (NEW FEATURE)
- ✅ Track order status with real-time updates
- ✅ Location-based product filtering

### Order Management
- ✅ Real-time order notifications and status tracking
- ✅ Complete order lifecycle: pending → confirmed → delivered → cancelled
- ✅ **Order cancellation** with stock restoration
- ✅ Farmer-client communication via phone
- ✅ Automatic inventory management

### Profile Management
- ✅ Update personal information
- ✅ Profile image upload
- ✅ Farm details for farmers
- ✅ Contact information management

## Tech Stack

### Backend
- Node.js + Express.js
- MongoDB with Mongoose
- JWT Authentication with secure middleware
- Input validation and sanitization
- Error handling and logging

### Frontend
- React 18 with hooks and modern patterns
- React Router for navigation
- Axios for API calls with interceptors
- Tailwind CSS via CDN for consistent styling
- Form validation and user feedback

## Security Features
- ✅ Input validation on frontend and backend
- ✅ XSS protection with data sanitization
- ✅ JWT token security with proper expiration
- ✅ Password hashing with bcryptjs
- ✅ Role-based access control
- ✅ CORS configuration for secure API access

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- Git

### Quick Start
1. **Clone and setup:**
   ```bash
   git clone <repository>
   cd farm2home
   ```

2. **Backend setup:**
   ```bash
   cd backend
   npm install
   # Configure .env file
   npm start
   ```

3. **Frontend setup:**
   ```bash
   cd frontend
   npm install
   npm start
   ```

### Environment Configuration
Create `.env` in backend directory:
```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration with validation
- `POST /api/auth/login` - User login with credential verification
- `PUT /api/auth/profile` - Update user profile

### Products
- `GET /api/products` - Get products with filters and pagination
- `POST /api/products` - Add new product (farmers only)
- `GET /api/products/my-products` - Get farmer's products
- `PUT /api/products/:id` - Update product
- `DELETE /api/products/:id` - Delete product

### Orders
- `POST /api/orders` - Place new order with validation
- `GET /api/orders/my-orders` - Get client's orders
- `GET /api/orders/farmer-orders` - Get farmer's orders
- `PUT /api/orders/:id/status` - Update order status (farmers)
- `PUT /api/orders/:id/cancel` - Cancel order (clients) **NEW**

## Project Structure

```
farm2home/
├── backend/
│   ├── models/          # Database schemas with validation
│   ├── routes/          # API routes with middleware
│   ├── middleware/      # Authentication and validation
│   └── server.js        # Main server with security config
├── frontend/
│   ├── src/
│   │   ├── components/  # Reusable React components
│   │   ├── pages/       # Page components with validation
│   │   ├── utils/       # API utilities and helpers
│   │   └── App.js       # Main App with routing
│   └── public/          # Static files with Tailwind CDN
└── README.md           # This comprehensive guide
```

## Usage Guide

### For Farmers:
1. Register as a farmer with farm details
2. Add products with images and pricing
3. Manage inventory and orders
4. Update order status and communicate with clients

### For Clients:
1. Register as a client
2. Browse products by category or search
3. Place orders with desired quantities
4. **Cancel orders if needed** (pending status only)
5. Track order progress

## Troubleshooting

### Common Issues:
1. **CSS not loading**: Tailwind CDN is configured in index.html
2. **MongoDB connection**: Check connection string in .env
3. **Port conflicts**: Backend uses 5000, frontend uses 3000
4. **Order cancellation**: Only pending orders can be cancelled

### Performance Optimizations:
- Pagination for product listings
- Debounced search functionality
- Optimized database queries
- Image compression for uploads

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes with proper validation
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

---

## 🎉 Status: PRODUCTION READY
All features implemented, security issues resolved, and thoroughly tested.