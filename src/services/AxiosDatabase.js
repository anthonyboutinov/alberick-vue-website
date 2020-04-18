import axios from 'axios';

export default class AxiosDatabase {
  constructor(params) {
    this.temporaryStorage = {};
    this.apiClient = axios.create({
      baseURL: params.url,
      withCredentials: false,
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      }
    });

  }

  get(request) {
    return this.apiClient.get(request);
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

  getPage(slug) {
    return this.get("pages?fields=id,title,slug,acf&slug=" + slug);
  }
}
