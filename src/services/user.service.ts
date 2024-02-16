import prisma from '../data-source';

interface ICreateUser {
  name: string;
  email: string;
  password: string;
}

export class UserServise {
  public async createUser({ name, email, password }: ICreateUser) {
    return prisma?.user.create({
      data: {
        name,
        email,
        password
      }
    });
  }

  public async listUser() {
    return prisma?.user.findMany();
  }

  public async deleteUser(id: string) {
    return prisma?.user.delete({
      where: {
        id
      }
    });
  }

  public async updateUser({ name, id }: { id: string, name: string }) {
    return prisma?.user.update({
      where: {
        id,
      },
      data: {
        name: name
      }
    });
  }

  public async favoriteMovies(userId: string) {
    return prisma?.like.findMany({
      include: {
        movie: true
      },
      where: {
        userId
      }
    });
  }
}
