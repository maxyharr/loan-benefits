import { request } from '../request';
import { User } from '../types';

export class UserService {

  getUser(): Promise<User> {
    return request.get('/api/users.json');
  }

  signUp(user): Promise<User> {
    return request.post('/api/users.json', { user });
  }

}

export default UserService;
