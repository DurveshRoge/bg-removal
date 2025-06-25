import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import { v2 as cloudinary } from 'cloudinary';

// Cloudinary storage configuration
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'bg-removal-uploads', // folder name in Cloudinary
        allowedFormats: ['jpg', 'jpeg', 'png', 'webp'],
        resource_type: 'image'
    }
});

// creating upload middleware to parse multi/part formdata
const upload = multer({ 
    storage,
    limits: {
        fileSize: 10 * 1024 * 1024 // 10MB limit
    },
    fileFilter: function (req, file, cb) {
        // Accept only image files
        if (file.mimetype.startsWith('image/')) {
            cb(null, true);
        } else {
            cb(new Error('Only image files are allowed'), false);
        }
    }
});

export default upload;
