<template>
<div id="page">
  <div v-if="loading" class="hero is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered has-text-grey-light">
        Loading...
      </div>
    </div>
  </div>

  <div v-if="error" class="hero is-primary is-fullheight is-bold">
    <div class="hero-body">
      <div class="container has-text-centered is-size-5">
        {{error}}
      </div>
    </div>
  </div>
  <div v-if="page" :class="{'alternate-sections': page.highlight_alternate_sections}">
    <div class="page-head">
      <div class="container">
        <h2 class="title is-3 has-text-weight-bold page-title">{{page.title}}</h2>
      </div>
    </div>
    <text-section v-for="(section, index) in page.sections" v-bind:key="index" v-bind:section="section" />
  </div>
</div>
</template>

<script>
import TextSection from './TextSection.vue';

export default {
  components: {
    TextSection,
  },
  props: {
    // highlight_alternate_sections
    // title
    // sections
  },
  data() {
    return {
      loading: true,
      page: null,
      error: null,
    }
  },
  created() {
    // fetch the data when the view is created and the data is
    // already being observed
    this.fetchData()
  },
  watch: {
    // call again the method if the route changes
    '$route': 'fetchData'
  },

  methods: {
    fetchData() {
      this.error = this.page = null;
      this.loading = true;
      const self = this;

      this.$database.getItems("pages?fields=id,title,slug,acf&slug=" + this.$route.params.slug)
        .then(response => {
          self.loading = false;
          self.page = response.data[0];

          Object.assign(self.page, self.page.acf);
          delete self.page.acf;
          self.page.title = self.page.title.rendered;
          console.log(self.page);
        })
        .catch(error => {
          self.loading = false;
          self.error = error;
          if (error.data.status === 404) {
            //...
          }
        });
    },
  }
}
</script>

<style lang="scss">
.page-head {
    padding: 0 1.5rem;
}
.page-title {
    padding-top: 4rem;
    padding-bottom: 2rem;
}
.alternate-sections {
    & > .section:nth-child(even) {
        background-color: #f8f8f8;
    }
}
</style>
