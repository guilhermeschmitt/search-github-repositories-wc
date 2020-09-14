import Service from './Service';

class UserService {

  urlBase = '/user';

  service = Service.getInstance();

  // params: { page, pageSize },
  // url: `${this.urlBase}/${userName}/repositories`,

  // https://api.github.com/users/facebook/repos?page=1&per_page=10
  getUserRepositories = (userName, page, pageSize) =>
    this.service({
      json: true,
      method: 'GET',
      params: { page, per_page: pageSize },
      headers: { 'Content-Type': 'application/json' },
      url: `https://api.github.com/users/${userName}/repos`,
    }).then(response => response.data);


  // url: `${this.urlBase}/${userName}`,
  getUserInfo = userName =>
    this.service({
      json: true,
      method: 'GET',
      url: `https://api.github.com/users/${userName}`,
      headers: { 'Content-Type': 'application/json' },
    }).then(response => response.data);

}

export default new UserService();
