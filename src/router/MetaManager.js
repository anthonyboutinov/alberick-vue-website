import Vue from 'vue'

export default class MetaManager {

  constructor(router, baseTitle, baseSummary) {
    this.baseTitle = baseTitle;
    this.baseSummary = baseSummary;
    router.beforeEach((to, from, next) => {
      document.title = this.title(to.meta ? to.meta.title : null);
      next();
    });

    Vue.prototype.$metaManager = this;
  }

  title(title) {
    return title ? title + ' — ' + this.baseTitle : this.baseTitle;
  }

  setTitle(_title) {
    const title = this.title(_title);
    document.title = title;
    document.querySelector('head meta[property="og:title"]').setAttribute('content', title);
    document.querySelector('head meta[name="twitter:title"]').setAttribute('content', title);
  }

  // setSummary(summary) {
  //   document.querySelector('head meta[name="twitter:card"]').setAttribute('value', summary || this.baseSummary);
  // }

}
