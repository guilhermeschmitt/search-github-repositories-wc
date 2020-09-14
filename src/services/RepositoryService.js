import Service from './Service';

class RepositoryService {

  urlBase = '/repository';
  urlBaseList = '/repositories';

  service = Service.getInstance();

  // ${this.urlBase}/${userName}/${repoName}

  getRepository = (userName, repoName) =>
    this.service({
      json: true,
      method: 'GET',
      url: `https://api.github.com/repos/${userName}/${repoName}`,
      headers: { 'Content-Type': 'application/json' },
    }).then(response => response.data);


  // url: `${this.urlBaseList}`,
  // params: { query, page, pageSize },
    searchRepositories = (query, page, pageSize) =>
      this.service({
        json: true,
        method: 'GET',
        url: `https://api.github.com/search/repositories`,
        params: { q: query, page, per_page: pageSize },
        headers: { 'Content-Type': 'application/json' },
      }).then(response => response.data);

}

export default new RepositoryService();
