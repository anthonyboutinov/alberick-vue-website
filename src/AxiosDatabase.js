import axios from 'axios';

export default class AxiosDatabase {
  constructor(params) {
    this.url = params.url;
    this.storage = window.localStorage || params.storage;
  }

  getItems(request) {
    console.log(this.url + request);
    return axios.get(this.url + request);
  }
}
