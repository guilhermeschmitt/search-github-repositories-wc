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

  // buscarAliquotaISS = idAliquota =>
  //   this.service({
  //     method: 'GET',
  //     url: `${this.urlBaseAliquota}/${idAliquota}`,
  //     json: true,
  //     headers: { 'Content-Type': 'application/json' },
  //   }).then(response => response.data);

}

export default new RepositoryService();
