import express from 'express'
import { removeBgImage } from '../controllers/imageController.js'
import upload from '../middlewares/multer.js'
import authUser from '../middlewares/auth.js'

const imageRouter = express.Router()

// Add debugging middleware for image routes
imageRouter.use((req, res, next) => {
    console.log('🖼️  Image route accessed:', req.method, req.path);
    console.log('Content-Type:', req.headers['content-type']);
    next();
});

imageRouter.post('/remove-bg', (req, res, next) => {
    console.log('📤 Background removal request received');
    next();
}, upload.single('image'), (req, res, next) => {
    console.log('📁 File uploaded:', req.file ? 'Yes' : 'No');
    if (req.file) {
        console.log('File details:', {
            originalname: req.file.originalname,
            mimetype: req.file.mimetype,
            size: req.file.size,
            path: req.file.path
        });
    }
    next();
}, authUser, removeBgImage)

export default imageRouter