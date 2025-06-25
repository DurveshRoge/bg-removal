import axios from 'axios'
import FormData from 'form-data'
import userModel from '../models/userModel.js'

// Function to remove background using Remove.bg API
const removeBackgroundWithRemoveBg = async (imageUrl) => {
    try {
        const response = await axios.post('https://api.remove.bg/v1.0/removebg', {
            image_url: imageUrl,
            size: 'auto'
        }, {
            headers: {
                'X-Api-Key': process.env.REMOVEBG_API_KEY,
                'Content-Type': 'application/json'
            },
            responseType: 'arraybuffer'
        });
        
        return response.data;
    } catch (error) {
        throw new Error(`Remove.bg API error: ${error.response?.status} ${error.response?.statusText}`);
    }
};

// Function to remove background using ClipDrop API
const removeBackgroundWithClipDrop = async (imageUrl) => {
    try {
        // Download the image from Cloudinary
        const imageResponse = await axios.get(imageUrl, { responseType: 'stream' });
        
        // Creation of new multi/part formdata
        const formdata = new FormData()
        formdata.append('image_file', imageResponse.data, {
            filename: 'image.jpg',
            contentType: imageResponse.headers['content-type'] || 'image/jpeg'
        })

        const { data } = await axios.post('https://clipdrop-api.co/remove-background/v1', formdata, {
            headers: {
                'x-api-key': process.env.CLIPDROP_API,
                ...formdata.getHeaders()
            },
            responseType: "arraybuffer"
        });
        
        return data;
    } catch (error) {
        throw new Error(`ClipDrop API error: ${error.response?.status} ${error.response?.statusText}`);
    }
};

// Controller function to remove bg from image
// http://localhost:4000/api/image/remove-bg
const removeBgImage = async (req, res) => {

  try {

    const { clerkId } = req.body

    console.log('Processing background removal for clerkId:', clerkId);

    // Fetching User Details Using ClerkId
    const user = await userModel.findOne({ clerkId })
    if (!user) {
      console.log('User not found for clerkId:', clerkId);
      return res.json({ success: false, message: 'User Not Found' })
    }

    // Checking User creditBalance
    if (user.creditBalance === 0) {
      console.log('User has no credit balance:', user.creditBalance);
      return res.json({ success: false, message: 'No Credit Balance', creditBalance: user.creditBalance })
    }

    // Getting image URL from Cloudinary
    const imageUrl = req.file.path; // This is now the Cloudinary URL
    console.log('Image URL from Cloudinary:', imageUrl);

    let processedImageData;
    let apiUsed = '';

    // Try Remove.bg first if API key is available
    if (process.env.REMOVEBG_API_KEY && process.env.REMOVEBG_API_KEY !== 'your_removebg_api_key_here') {
        try {
            console.log('Attempting background removal with Remove.bg...');
            processedImageData = await removeBackgroundWithRemoveBg(imageUrl);
            apiUsed = 'Remove.bg';
            console.log('✅ Remove.bg successful');
        } catch (removeBgError) {
            console.log('❌ Remove.bg failed:', removeBgError.message);
            console.log('Falling back to ClipDrop...');
            
            // Fallback to ClipDrop
            processedImageData = await removeBackgroundWithClipDrop(imageUrl);
            apiUsed = 'ClipDrop';
            console.log('✅ ClipDrop successful');
        }
    } else {
        // Use ClipDrop directly
        console.log('Using ClipDrop API...');
        processedImageData = await removeBackgroundWithClipDrop(imageUrl);
        apiUsed = 'ClipDrop';
        console.log('✅ ClipDrop successful');
    }

    console.log(`Background removal successful using ${apiUsed}, data length:`, processedImageData.length);

    // Convertion of arrayBuffer to base64
    const base64Image = Buffer.from(processedImageData, 'binary').toString('base64');
    const resultImage = `data:image/png;base64,${base64Image}`

    console.log('Base64 conversion successful, length:', base64Image.length);

    // Deduction of user credit 
    await userModel.findByIdAndUpdate(user._id, { creditBalance: user.creditBalance - 1 })

    // Sending Response
    res.json({ 
        success: true, 
        message: `Background Removed using ${apiUsed}`, 
        resultImage, 
        creditBalance: user.creditBalance - 1,
        apiUsed 
    })

  } catch (error) {
    console.error('Error in removeBgImage:', error.message);
    console.error('Full error:', error);
    res.json({ success: false, message: error.message })
  }
}

export { removeBgImage }