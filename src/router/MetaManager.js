import Vue from 'vue'

export default class MetaManager {

  constructor(router, baseTitle) {
    this.baseTitle = baseTitle;
    router.beforeEach((to, from, next) => {
      document.title = this.title(to.meta ? to.meta.title : null);
      next();
    });

    Vue.prototype.$metaManager = this;
  }

  title(title) {
    return title ? title + ' — ' + this.baseTitle : this.baseTitle;
  }

  setTitle(title) {
    // if (!this.headTitleEl) {
    //   this.headTitleEl = document.querySelector('head title');
    // }
    document.title = this.title(title);
  }

}
