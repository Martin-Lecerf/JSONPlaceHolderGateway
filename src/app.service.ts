import { Injectable } from '@nestjs/common';
import User from './models/User';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World wesh!';
  }

  async getUserById(id: number): Promise<User> {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`,
      );
      const data = response.json();
      return data;
    } catch (error) {
      throw new Error('yaproblem');
    }
  }
}
