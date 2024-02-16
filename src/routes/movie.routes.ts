import { Router } from 'express';
import { MovieController } from '../controllers/movie.controller';


export const movieRoutes = Router();

const controller = new MovieController();

movieRoutes.get('/estou-com-sorte', (req, res) => controller.estouComSorte(req, res));
movieRoutes.get('/', (req, res) => controller.listMovies(req, res));
movieRoutes.get('/:id', (req, res) => controller.getMovie(req, res));
movieRoutes.post('/:id/favorite', (req, res) => controller.favoriteMovie(req, res));
