import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/connectdb.js';
import cookieParser from 'cookie-parser';
import authRouter from './route/authRoute.js';
import cors from "cors"

dotenv.config();

const port = process.env.PORT || 8000;
const app = express();
app.use(express.json());
app.use(cookieParser())
app.use(cors({
  origin:"http://localhost:5173",
  credentials:true
}))

app.use("/api/auth",authRouter)
app.use("/api/auth",userRouter)


app.get('/', (req, res) => {
  res.send('hello server');
});

app.listen(port, () => {
  console.log(`✅ Server is running `)
  connectDB();
});
