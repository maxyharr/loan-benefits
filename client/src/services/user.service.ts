import { request, requestToPromise } from '../request';
import { User } from '../types';

class UserService {

  getUser(): Promise<User> {
    return requestToPromise(request.get('/api/user.json'));
  }

}

export default UserService;
