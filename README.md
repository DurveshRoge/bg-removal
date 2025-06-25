# AI Background Removal App

A modern web application that uses AI to remove backgrounds from images with high precision and speed.

## 🚀 Features

- **AI-Powered**: Advanced machine learning algorithms for precise background removal
- **Fast Processing**: Results in under 3 seconds
- **High Quality**: Maintains original image resolution
- **User-Friendly**: Modern, intuitive interface
- **Secure**: Client-side processing with secure authentication

## 🛠️ Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- Cloudinary account
- Clerk account for authentication

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/bg-removal.git
   cd bg-removal
   ```

2. **Setup Server**
   ```bash
   cd server
   npm install
   cp .env.example .env
   # Edit .env with your actual credentials
   npm start
   ```

3. **Setup Client**
   ```bash
   cd ../client
   npm install
   cp .env.example .env
   # Edit .env with your actual credentials
   npm run dev
   ```

### Environment Variables

#### Client (.env)
- `VITE_CLERK_PUBLISHABLE_KEY` - Clerk publishable key
- `VITE_BACKEND_URL` - Backend API URL (default: http://localhost:4000)

#### Server (.env)
- `MONGODB_URI` - MongoDB connection string
- `CLOUDINARY_API_KEY` - Cloudinary API key
- `CLOUDINARY_API_SECRET` - Cloudinary API secret
- `CLOUDINARY_CLOUD_NAME` - Cloudinary cloud name
- `CLERK_WEBHOOK_SECRET` - Clerk webhook secret
- `PORT` - Server port (default: 4000)

### Getting API Keys

1. **Cloudinary**: Sign up at [cloudinary.com](https://cloudinary.com)
2. **Clerk**: Sign up at [clerk.com](https://clerk.com)
3. **MongoDB**: Use local installation or [MongoDB Atlas](https://www.mongodb.com/atlas)

## 🚀 Deployment

### Vercel (Recommended for Client)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy

### Railway/Render (Recommended for Server)
1. Connect your GitHub repository
2. Set environment variables
3. Deploy

## 📝 API Endpoints

- `POST /api/image/remove-bg` - Remove background from image
- `GET /api/user/credits` - Get user credits
- `POST /api/user/pay-razorpay` - Process payment

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🔒 Security

**Important**: Never commit `.env` files to version control. They contain sensitive information like API keys and database credentials.
