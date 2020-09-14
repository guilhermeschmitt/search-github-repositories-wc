import RestException from './RestException';

export default class ResponseErrorHandler {
  static handle(error) {
    const { message, response } = error;
    const messageFormated = message.match(/(\[)(\{\"message.+\n)?(])/g);

    if (messageFormated && messageFormated.length === 1) {
      messageFormated = JSON.parse(messageFormated);
      message = messageFormated.message;
    }

    if (message === 'Network Error')
      throw new RestException(503, 'Servidor indisponível temporariamente');
    else if (response.status === 500)
      throw new RestException(500, 'Servidor indisponível temporariamente');
    else if (response.status === 401 || response.status === 503)
      throw new RestException(response.status, response.data.message);
    else if (response.status === 400 || response.status === 404) {
      if (Array.isArray(response.data.message))
        throw new RestException(response.status, response.data.message[0]);
      if (response.data.message)
        throw new RestException(response.status, response.data.message);
      else
        throw new RestException(response.status, response.data);
    } else if (response.status === 403)
      throw new RestException(response.status, response.data.message);
    else if (response.status === 410)
      throw new RestException(410, 'Link inválido ou expirado');
  }
}
