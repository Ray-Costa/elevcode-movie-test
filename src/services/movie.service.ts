import prisma from '../data-source';
import { MovieApiService } from './movie-api.service';

export class MovieService {
  private movieApiService: MovieApiService;

  constructor() {
    this.movieApiService = new MovieApiService();
  }

  public async findMovieAndCreate() {
    const response = await this.movieApiService.listMovies();
    const movies = await response.json();
    const { results } = movies;
    const randomMovie = results[Math.floor(Math.random() * results.length)];

    return prisma?.movie.create({
      data: {
        title: randomMovie.title,
        summary: randomMovie.overview,
        photo: randomMovie.poster_path,
      },
    });
  }

  public async listMovies() {
    return prisma?.movie.findMany();
  }

  public async getMovie(id: string) {
    return prisma?.movie.findUnique({
      where: {
        id,
      },
    });
  }

  public async favoriteMovie(id: string) {
    const user = await prisma?.user.findFirstOrThrow();

    if(!user) {
      throw new Error('User not found');
    }

    return prisma?.like.create({
      data: {
        movieId: id,
        userId: user.id,
      },
    });
  }
  
}
