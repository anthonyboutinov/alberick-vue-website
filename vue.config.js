module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/wp-content/themes/alberick-vue.progressive-vuewp.boutinov/'
    : '/',
  indexPath: process.env.NODE_ENV === 'production'
    ? 'index.html'
    : 'index.php',
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/_variables.scss";
        @import "@/styles/_mixins.scss";
        @import "node_modules/bulma/sass/utilities/_all";
        @import "node_modules/bulma/sass/base/_all";
        @import "node_modules/bulma/sass/grid/_all";
        @import "node_modules/bulma/sass/elements/_all";
        @import "node_modules/bulma/sass/form/_all";
        @import "node_modules/bulma/sass/components/_all";
        @import "node_modules/bulma/sass/layout/_all";
        @import "@/styles/_common.scss";`
      }
    }
  }
};
