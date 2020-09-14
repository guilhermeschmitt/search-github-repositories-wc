import Service from './Service';

class RepositoryService {

  urlBase = '/repository';
  urlBaseList = '/repositories';

  service = Service.getInstance();

  getRepository = (userName, repository) =>
    this.service({
      json: true,
      method: 'GET',
      params: { repository },
      url: `${this.urlBase}/${userName}`,
      headers: { 'Content-Type': 'application/json' },
    }).then(response => response.data);


  searchRepositories = (query, page, pageSize) =>
    this.service({
      json: true,
      method: 'GET',
      url: `${this.urlBaseList}`,
      params: { query, page, pageSize },
      headers: { 'Content-Type': 'application/json' },
    }).then(response => response.data);

}

export default new RepositoryService();
