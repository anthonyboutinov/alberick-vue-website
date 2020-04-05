import axios from 'axios';

export default class AxiosDatabase {
  constructor(params) {
    this.url = params.url;
    this.temporaryStorage = {};
  }

  getItems(request) {
    // console.log(this.url + request);
    return axios.get(this.url + request);
  }

  hasCached(slug) {
    return Object.prototype.hasOwnProperty.call(this.temporaryStorage, slug);
  }

  getCached(slug) {
    return this.temporaryStorage[slug];
  }

  store(slug, data) {
    // data not cached when in development mode
    if (process.env.NODE_ENV !== 'development') {
      this.temporaryStorage[slug] = data;
    }
  }
}
