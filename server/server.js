import 'dotenv/config';
import express from 'express'
import cors from 'cors'
import userRouter from './routes/userRoutes.js';
import connectDB from './configs/mongodb.js';
import connectCloudinary from './configs/cloudinary.js';
import imageRouter from './routes/imageRoutes.js';

// App Config
const PORT = process.env.PORT || 4000
const app = express();
await connectDB()
await connectCloudinary()

// Intialize Middlewares
app.use(express.json())
app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:5173', 'http://localhost:4173', 'http://localhost:5174'],
    credentials: true
}))

// Add request logging middleware
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    if (req.method === 'POST') {
        console.log('Headers:', JSON.stringify(req.headers, null, 2));
        console.log('Body keys:', Object.keys(req.body));
    }
    next();
});

// API routes
app.use('/api/user',userRouter)
app.use('/api/image',imageRouter)

app.get('/', (req,res) => res.send("API Working"))

app.listen(PORT, () => console.log('Server running on port ' + PORT));
