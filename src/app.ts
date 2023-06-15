import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { Schema, model } from 'mongoose';

const app: Application = express();

// application routes
import userRoutes from './app/modules/user/user.route';

app.use(cors());

//parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/user', userRoutes);


export default app;

// breakdown
/**
 * Interface -> interface.ts
 * Schema -> model.ts
 * route -> router.ts
 * route function -> controller.ts
 * database query -> service.ts
 */
