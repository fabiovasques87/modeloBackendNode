import cors from  'cors';

import express from "express";
import path from "path";
import dotenv from 'dotenv';

import apiRoutes from './routes/index';


dotenv.config();

const server = express();


server.use(cors());

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});

server.use(apiRoutes);


server.listen(process.env.PORT);