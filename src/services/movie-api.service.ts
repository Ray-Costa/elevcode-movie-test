import fetch from 'node-fetch';

export class MovieApiService {
  public async listMovies() {
    const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=1&region=BR&sort_by=popularity.desc';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NTgyZGE2MDUyNzEyYjM3YmM0ZDg3OGVlYWRkODllMSIsInN1YiI6IjY1Y2Y1NTY3NjBjNzUxMDE3YjY5OTIyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.z37awazICroLjzD1dZjZO9gdkoycfVl3C0XuVSZze9E'
      }
    };

    return fetch(url, options)
  }
}
