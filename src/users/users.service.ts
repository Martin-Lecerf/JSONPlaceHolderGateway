import { Injectable } from '@nestjs/common';
import { HttpService } from '../common/http/http.service';
import User from '../models/User';

@Injectable()
export class UsersService {
  constructor(private http: HttpService) {}

  async findById(id: number): Promise<User> {
    return this.http.get<User>(`/users/${id}`);
  }
}
