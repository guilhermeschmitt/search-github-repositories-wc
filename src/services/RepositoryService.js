import Service from './Service';

class RepositoryService {

  urlBase = 'TODO:';
  urlBaseList = 'TODO:';

  service = Service.getInstance();

  getRepository = (userName, repoName) =>
    this.service({
      json: true,
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      url: ` https://api.github.com/repos/${userName}/${repoName}`,
    }).then(response => response.data);

  //FIXME: No backend local eu mando query e pageSize
  searchRepositories = (q, page, per_page) =>
    this.service({
      json: true,
      method: 'GET',
      params: { q, page, per_page },
      headers: { 'Content-Type': 'application/json' },
      url: ` https://api.github.com/search/repositories`,
    }).then(response => response.data);

}

export default new RepositoryService();
