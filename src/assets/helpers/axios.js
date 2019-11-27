/* ignore FormData */
import axios from 'axios';
import config from '../../constants/config';

class AxiosService {
  constructor () {
    this.apiUrl = config.API_URL;
    this.baseHeadersOption = { 'x-client-version': config.VERSION };
    const service = axios.create({
      timeout: config.API_TIMEOUT
    });
    service.interceptors.response.use(this.handleSuccess, this.handleError);
    this.service = service;
  }

  handleSuccess = (response) => {
    return response;
  }

  handleError = (error) => {
    return Promise.reject(error.response.data);
  }

  recurseAttribute = (data) => {
    if (typeof data === 'object' && data !== null) {
      const newData = {};
      for (const key in data) {
        if (typeof data === 'object' && data !== null) {
          this.recurseAttribute(data[key]);
        } else if (data[key] !== undefined && data[key] !== null && data[key] !== '') {
          newData.append(key, data[key]);
        }
      }
      return newData;
    }
    return data;
  }

  prepareFormData = (data) => {
    // eslint-disable-next-line
    const formData = new FormData();
    for (const key in data) {
      if (data[key] !== undefined && data[key] !== null && data[key] !== '') {
        formData.append(key, this.recurseAttribute(data[key]));
      }
    }
    return formData;
  }

  async post (path, data, headerData) {
    const formData = this.prepareFormData(data);
    const request = await this.service.request({
      url: path,
      method: 'POST',
      baseURL: this.apiUrl,
      responseType: 'json',
      data: formData,
      headers: {
        ...this.baseHeadersOption,
        Ht: headerData.Ht,
        'Content-Type': 'multipart/form-data'
      }
    });
    return request;
  }

  async put (path, data, headerData) {
    const request = await this.service.request({
      method: 'put',
      url: path,
      baseURL: this.apiUrl,
      responseType: 'json',
      data,
      headers: {
        ...this.baseHeadersOption,
        Ht: headerData.Ht,
      }
    });
    return request;
  }

  async get (path, headerData) {
    const request = await this.service.request({
      method: 'GET',
      url: path,
      baseURL: this.apiUrl,
      responseType: 'json',
      headers: {
        ...this.baseHeadersOption,
        Ht: headerData.Ht,
      }
    });
    return request;
  }

  async delete (path, headerData) {
    const request = await this.service.request({
      method: 'DELETE',
      url: path,
      baseURL: this.apiUrl,
      responseType: 'json',
      headers: {
        ...this.baseHeadersOption,
        Ht: headerData.Ht,
      }
    });
    return request;
  }
}

export default new AxiosService();
