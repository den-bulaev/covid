const BASE_URL = 'https://api.covid19api.com/';

const request = (endpoint = '', options) => (
  fetch(BASE_URL + endpoint, options)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`${response.status} - ${response.statusText}`);
      }

      return response.json();
    })
    .then((result) => result)
);

export default request;
