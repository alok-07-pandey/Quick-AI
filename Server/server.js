import express from 'express'
import cors from 'cors'
import { clerkMiddleware, requireAuth } from '@clerk/express'
import aiRouter from './Routes/aiRoutes.js';
import connectCloudinary from './configs/cloudinary.js';
import userRouter from './Routes/userRoutes.js';
import dotenv from 'dotenv'
dotenv.config()

const app = express()
await connectCloudinary()

//middlewares using use keywords
app.use(cors())
app.use(express.json())
app.use(clerkMiddleware())

app.get('/', (req, res) => res.send('Server is Live!!'))

app.use(requireAuth())
app.use('/api/ai', aiRouter)
app.use('/api/user', userRouter)


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is runnning on PORT ${PORT}`);

})
