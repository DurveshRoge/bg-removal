import jwt from 'jsonwebtoken'

// Middleware Function to decode jwt token to get clerkId
// add customize session token in clerk dashboard // {"clerkId": "{{user.id}}"}
const authUser = async (req, res, next) => {

    try {

        console.log('🔐 Auth middleware called');

        // getting token from headers
        const { token } = req.headers;

        console.log('Token received:', token ? 'Yes' : 'No');

        // checking token availability
        if (!token) {
            console.log('❌ No token provided');
            return res.json({ success: false, message: 'Not Authorized Login Again' })
        }

        // decoding JWT token
        const token_decode = jwt.decode(token)
        console.log('Token decoded:', token_decode ? 'Yes' : 'No');
        
        if (token_decode && token_decode.clerkId) {
            console.log('ClerkId found:', token_decode.clerkId);
        }

        // getting clerkId from decoded token
        req.body.clerkId = token_decode.clerkId
        next()

    } catch (error) {
        console.error('Auth error:', error.message)
        res.json({ success: false, message: error.message })
    }

}

export default authUser