import { Router } from 'express';
import { UserController } from '../controllers/user.controller';


export const userRoutes = Router();

const controller = new UserController();

userRoutes.post('/', (req, res) => controller.createUser(req, res));

userRoutes.get('/', (req, res) => controller.listUser(req, res));

userRoutes.get('/:id/favorite-movies', (req, res) => controller.favoriteMovies(req, res));

userRoutes.delete('/:id', (req, res) => controller.deleteUser(req, res));

userRoutes.put('/:id', (req, res) => controller.updateUser(req, res));
