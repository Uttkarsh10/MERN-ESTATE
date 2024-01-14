// import { Express } from "express";

// const app = express();

// app.listen(3000, () => {
//     console.log("Server is running or port 3000");
// });

import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';

dotenv.config();

mongoose
.connect(process.env.MONGO)
.then(() => {
    console.log("Connected to mongoDB");
})
.catch((err) => {
    console.log(err);
});

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.json({message:'Hello World'})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use("/api/user", userRouter);
app.use("api/auth", authRouter);