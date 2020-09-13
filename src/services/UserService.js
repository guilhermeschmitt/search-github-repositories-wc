import Service from './Service';

class UserService {

  urlBase = 'TODO:';
  urlBaseList = 'TODO:';

  service = Service.getInstance();

  //FIXME: No back-end local eu mando pageSize
  getUserRepositories = (userName, page, pageSize) =>
    this.service({
      json: true,
      method: 'GET',
      params: { page, per_page: pageSize },
      headers: { 'Content-Type': 'application/json' },
      url: ` https://api.github.com/users/${userName}/repos`,
    }).then(response => response.data);

  getUserInfo = userName =>
    this.service({
      json: true,
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      url: ` https://api.github.com/users/${userName}`,
    }).then(response => response.data);

}

export default new UserService();
