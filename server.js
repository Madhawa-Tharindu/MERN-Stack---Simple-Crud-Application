import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/connectDB.js';
import cors from 'cors';

//import routes
import postRoutes from './routes/posts.js';

const app = express();

//CORS Policy
app.use(cors())

const port = process.env.PORT
const DATABASE_URL = process.env.DATABASE_URL

//middlewares
app.use(express.json()); 
app.use(postRoutes);

//Database connection
connectDB(DATABASE_URL);

app.listen(port, () => {
    console.log(`App is running on port ${port}`)
});





