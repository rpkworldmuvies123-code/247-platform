import 'dotenv/config';
import express from 'express';import cors from 'cors';import helmet from 'helmet';import rateLimit from 'express-rate-limit';import mongoose from 'mongoose';
import authRoutes from './routes/auth.js';import clientRoutes from './routes/client.js';import adminRoutes from './routes/admin.js';import sportsRoutes from './routes/sports.js';
const app=express();app.use(helmet());app.use(cors({origin:(process.env.CLIENT_ORIGIN||'http://localhost:5173').split(','),credentials:false}));app.use(express.json({limit:'20kb'}));app.use(rateLimit({windowMs:15*60*1000,limit:300,standardHeaders:true,legacyHeaders:false}));
app.get('/api/health',(req,res)=>res.json({ok:true,service:'247-platform-api'}));app.use('/api/auth',authRoutes);app.use('/api/client',clientRoutes);app.use('/api/admin',adminRoutes);app.use('/api/sports',sportsRoutes);
app.use((err,req,res,next)=>{console.error(err);res.status(500).json({message:'Internal server error'});});
const port=process.env.PORT||5000;
if(!process.env.MONGODB_URI||!process.env.JWT_SECRET) throw new Error('MONGODB_URI and JWT_SECRET are required');
await mongoose.connect(process.env.MONGODB_URI);app.listen(port,()=>console.log(`API listening on ${port}`));