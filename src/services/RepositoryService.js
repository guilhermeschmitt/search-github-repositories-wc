import Service from './Service';

class RepositoryService {

  urlBase = 'TODO:';
  urlBaseList = 'TODO:';

  service = Service.getInstance();

  // buscarAliquotaISS = idAliquota =>
  //   this.service({
  //     method: 'GET',
  //     url: `${this.urlBaseAliquota}/${idAliquota}`,
  //     json: true,
  //     headers: { 'Content-Type': 'application/json' },
  //   }).then(response => response.data);

}

export default new RepositoryService();