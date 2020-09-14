import Service from './Service';

class RepositoryService {

  urlBase = '/repository';
  urlBaseList = '/repositories';

  service = Service.getInstance();

  getRepository = (userName, repoName) =>
    this.service({
      json: true,
      method: 'GET',
      url: `${this.urlBase}/${userName}/${repoName}`,
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
