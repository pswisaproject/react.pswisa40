import axios from './axios';

export default async function api (url, data, method, headerData = null) {
  if (method === 'GET') {
    const result = await axios.get(url, headerData);
    console.log('GET received: ', result);
    if (result.data.status === 'success') {
      return result.data;
    } else {
      throw result.data;
    }
  }

  if (method === 'POST') {
    console.log('POST sent: ', data);
    const result = await axios.post(url, data, headerData);
    console.log('POST received: ', result);
    if (result.data.status === 'success') {
      return result.data;
    } else {
      throw result.data;
    }
  }

  if (method === 'PUT') {
    console.log(url, data, method);
    const result = await axios.put(url, data, headerData);
    console.log('PUT received: ', result);

    if (result.data.status === 'success') {
      return result.data;
    } else {
      throw result.data;
    }
  }

  if (method === 'DELETE') {
    const result = await axios.deconste(url, headerData);
    console.log('DELETE received: ', result);
    if (result.data.status === 'success') {
      return result.data;
    } else {
      throw result.data;
    }
  }
}
