import { Request, Response } from 'express';
import { MovieService } from '../services/movie.service';

export class MovieController {
  private movieService: MovieService;

  constructor() {
    this.movieService = new MovieService();
  }

  public async estouComSorte(_req: Request, res: Response) {
    const mongoMovie = await this.movieService.findMovieAndCreate();
    res.json(mongoMovie);
  }

  public async listMovies(_req: Request, res: Response) {
    const movies = await this.movieService.listMovies();
    res.json(movies);
  }

  public async getMovie(req: Request, res: Response) {
    const { id } = req.params;
    const movie = await this.movieService.getMovie(id);
    res.json(movie);
  }

  public async favoriteMovie(req: Request, res: Response) {
    const { id } = req.params;
    const favorite = await this.movieService.favoriteMovie(id);
    res.json(favorite);
  }
}
