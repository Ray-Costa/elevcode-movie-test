import { Request, Response } from 'express';
import { UserServise } from '../services/user.service';

export class UserController {
  private userService: UserServise;

  constructor() {
    this.userService = new UserServise();
  }

  public async createUser(req: Request, res: Response): Promise<Response> {
    const email = req.body.email;
    const name = req.body.name;
    const password = req.body.password;

    const user = await this.userService.createUser({ email, name, password });

    return res.status(201).json(user);
  }

  public async listUser(req: Request, res: Response): Promise<Response> {

    const users = await this.userService.listUser();


    return res.status(200).json(users);
  }

  public async updateUser(req: Request, res: Response): Promise<Response> {

    const id = req.params.id;
    const name = req.body.name;

    const updateuser = await this.userService.updateUser({ id, name });

    return res.status(200).json(updateuser);
  }

  public async deleteUser(req: Request, res: Response): Promise<Response> {

    const id = req.params.id;

    await this.userService.deleteUser(id);


    return res.status(204).json();

  }

  public async favoriteMovies(req: Request, res: Response) {
    const { id } = req.params;
    const likes = await this.userService.favoriteMovies(id);
    const movies = likes?.map((like) => like.movie);
    return res.json(movies);
  }
}
