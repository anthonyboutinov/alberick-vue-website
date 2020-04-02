<template>
<div id="page">
  <div v-if="loading" class="hero is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered has-text-grey-light">
        Loading...
      </div>
    </div>
  </div>

  <div v-if="error && error.data.status !== 404" class="hero is-primary is-fullheight is-bold">
    <div class="hero-body">
      <div class="container has-text-centered is-size-5">
        {{error}}
      </div>
    </div>
  </div>

  <NotFound404 v-if="error && error.data.status === 404" />

  <div v-if="page" :class="{'alternate-sections': page.highlight_alternate_sections, 'is-even': highlightEvenSections, 'is-odd': highlightOddSections}" class="is-fullheight">
    <div class="page-head">
      <div class="container">
        <h2 class="title is-3 has-text-weight-bold page-title">{{page.title}}</h2>
      </div>
    </div>
    <div v-for="(section, index) in page.sections" v-bind:key="index">
      <generic-section v-if="section.type === 'generic'" v-bind:section="section" />
      <uwzorgonline-section v-if="section.type === 'custom' && section.custom_type === 'uwzorgonline'" v-bind:section="section" />
    </div>
  </div>
</div>
</template>

<script>
import GenericSection from './GenericSection.vue';
import UwzorgonlineSection from './UwzorgonlineSection.vue';
import NotFound404 from '@/templates/not-found/NotFound.vue';

export default {
  components: {
    GenericSection,
    UwzorgonlineSection,
    NotFound404,
  },
  props: {
    // highlight_alternate_sections
    // title
    // sections
  },
  data() {
    return {
      loading: false,
      page: null,
      error: null,
    }
  },
  computed: {
    highlightEvenSections() {
      // Choose "Even" when there is no title for the first section
      console.log({a: this.page.highlight_alternate_sections, b: this.page.sections[0].title})
      return this.page.highlight_alternate_sections && !this.page.sections[0].title;
    },
    highlightOddSections() {
      return this.page.highlight_alternate_sections && this.page.sections[0].title;
    },
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
      const slug = this.$route.params.slug;

      if (this.$database.hasCached(slug)) {
        this.page = this.$database.getCached(slug);
        console.log("Using cached version of " + slug);

      } else {
        this.loading = true;
        const self = this;
        this.$database.getItems("pages?fields=id,title,slug,acf&slug=" + slug)
          .then(response => {
            console.log("Loaded " + slug + " from the server");
            if (!response.data[0]) {
              throw {
                data: {
                  status: 404
                }
              };
            }

            self.loading = false;
            self.page = response.data[0];

            Object.assign(self.page, self.page.acf);
            delete self.page.acf;
            self.page.title = self.page.title.rendered;
            console.log(self.page);

            this.$database.store(slug, self.page);
          })
          .catch(error => {
            self.loading = false;
            // if (error.data.status === 404) {
            //   //...
            // }
            self.error = error;
          });

      }

    },
  }
}
</script>

<style lang="scss">
.page-head {
    padding: 0rem 1.5rem;
}
.page-title {
    padding-bottom: 1.5rem;
    padding-top: 2rem;

    @media (min-width: $tablet) {
      padding-top: 4rem;
      padding-bottom: 2rem;
    }
}
.alternate-sections {
  &.is-odd {
    & div:nth-child(even) > .section {
        background-color: #f8f8f8;
    }
  }
  &.is-even {
    & div:nth-child(odd) > .section {
        background-color: #f8f8f8;
    }
  }
}
#page > div > div:last-child > .section {
    padding-bottom: 9rem;
}
</style>
