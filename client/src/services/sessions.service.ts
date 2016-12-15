import { request } from '../request';

export class SessionsService {

  login(user): Promise<any> {
    return request.post('/api/login.json', {user: user});
  }

  logout(): Promise<any> {
    return request.del('/api/logout.json');
  }

}

export default SessionsService;
