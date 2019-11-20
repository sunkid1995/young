import axios from 'axios';

/**
 * @description
 * Config for axios
 */
const config = {
  baseURL: 'https://swapi.co',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  responseType: 'json',
};

class AxiosBase {
  constructor() {
    const instance = axios.create(config);
    /**
     * Interceptors
     * @description
     * Axios interceptors callback method success or error
     */
    instance.interceptors.response.use(this.handleSuccess, this.handleError);

    this.instance = instance;
  }

  /**
   * @method handleSuccess
   * @param {*} res This is response from server
   * @description Handle interceptors success
   */
  handleSuccess(res) {
    return res;
  }

  /**
   * @method handleError
   * @param {*} err This is error from server
   * @description Handle interceptors error
   */
  handleError(err) {
    return Promise.reject(err);
  }

  /**
   * @method fetch
   * @description This is method call api
   */
  fetch(payload) {
    const { url, method, data, headers } = this.defaultParams(payload);

    return this.instance({ url, method, data, headers })
      .then(res => res)
      .catch(err => err);
  }

  /**
   * @method
   * @description
   */
  defaultParams({ method = 'get', data = null, ...rest }) {
    return {
      method,
      data,
      ...rest
    };
  }
}

export default new AxiosBase;
