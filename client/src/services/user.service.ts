import { request } from '../request';
import { User } from '../types';

export class UserService {

  getUser(): Promise<User> {
    return request.get('/api/users.json');
  }

}

export default UserService;
