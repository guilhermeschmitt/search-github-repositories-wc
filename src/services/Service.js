import axios from 'axios';
import ResponseErrorHandler from '../exceptions/ResponseErrorHandler';

class Service {

  instance = undefined;

  successInterceptor = response => response;
  errorInterceptor = error => ResponseErrorHandler.handle(error);

  getInstance() {
    if (!this.instance) {
      const baseURL = this.getBaseUrl();

      this.instance = axios.create({ baseURL });
      this.instance.interceptors.response.use(this.successInterceptor, this.errorInterceptor);

      return this.instance;
    }

    return this.instance;
  }

  getBaseUrl() {
    if (process.env.REACT_APP_ENVIRONMENT === 'DEVELOPMENT')
      return process.env.REACT_APP_URL_BASE_DEVELOPMENT;
    return process.env.REACT_APP_URL_BASE_PRODUCTION;
  }
}

export default new Service();
