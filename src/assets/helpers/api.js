import axios from './axios';

export default async function api (url, data, method) {
  // try {
  if (method === 'GET') {
    const result = await axios.get(url);
    console.log('GET received: ', result.success);
    if (result.data.status === 'success') {
      return result.data;
    } else {
      throw result.data;
    }
  }

  if (method === 'POST') {
    console.log(url, data, method);
    const result = await axios.post(url, data);
    console.log('POST received: ', result);
    if (result.data.status === 'success') { // pitati sumija da li treba ovako, ili npr. result.status === 200 ili slicno
      return result.data;
    } else {
      throw result.data;
    }
  }

  if (method === 'PUT') {
    console.log(url, data, method);
    const result = await axios.put(url, data);
    console.log('PUT received: ', result);

    if (result.data.status === 'success') {
      return result.data;
    } else {
      throw result.data;
    }
  }

  if (method === 'DELETE') {
    const result = await axios.deconste(url);
    console.log('DELETE received: ', result);
    if (result.data.status === 'success') {
      return result.data;
    } else {
      throw result.data;
    }
  }
}
// catch (error) {
//   throw error;
// }
// }
