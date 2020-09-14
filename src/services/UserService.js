import Service from './Service';

class UserService {

  urlBase = '/user';

  service = Service.getInstance();

  getUserRepositories = (userName, page, pageSize) =>
    this.service({
      json: true,
      method: 'GET',
      params: { page, pageSize },
      headers: { 'Content-Type': 'application/json' },
      url: `${this.urlBase}/${userName}/repositories`,
    }).then(response => response.data);


  getUserInfo = userName =>
    this.service({
      json: true,
      method: 'GET',
      url: `${this.urlBase}/${userName}`,
      headers: { 'Content-Type': 'application/json' },
    }).then(response => response.data);

}

export default new UserService();
