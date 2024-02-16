import { Router } from 'express';
import { LoginController } from '../controllers/login.controller';


export const loginRoutes = Router();

const controller = new LoginController();

loginRoutes.post('/', (req, res) => controller.login(req, res));
