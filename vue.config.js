module.exports = {
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
