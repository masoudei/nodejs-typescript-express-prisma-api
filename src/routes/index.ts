import express from 'express';
import { postsRoute } from './posts';

export const routes = express.Router();

routes.use(postsRoute);