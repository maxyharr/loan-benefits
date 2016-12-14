import { request } from '../request';
import { User } from '../types';

export class UserService {

  getUser(): Promise<User> {
    // return request.get('/api/user.json');
    return new Promise((resolve) => {
      resolve({email: 'test@test.com'});
    })
  }

}

export default UserService;
