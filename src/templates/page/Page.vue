<template>
<div id="page">
  <div v-if="loading" class="hero is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered has-text-grey-light">
        Aan het laden...
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

  <div v-if="page && pageType === 'variable'" :class="{'alternate-sections': page.highlight_alternate_sections, 'is-even': highlightEvenSections, 'is-odd': highlightOddSections}" class="is-fullheight">
    <div class="page-head">
      <div class="container">
        <h2 class="title is-3 has-text-weight-bold page-title" v-html="page.title"></h2>
      </div>
    </div>
    <div v-for="(section, index) in page.sections" v-bind:key="index">
      <generic-section v-if="section.type === 'generic'" v-bind:section="section" />
      <uwzorgonline-section v-if="section.type === 'custom' && section.custom_type === 'uwzorgonline'" v-bind:section="section" />
      <columns-section v-if="section.type === 'custom' && section.custom_type === 'columns'" v-bind:section="section" />
    </div>
  </div>

  <home-page v-if="page && pageType === 'home'" v-bind:page="page" />
  <contact-page v-if="page && pageType === 'contact'" v-bind:about="page.about" v-bind:contact="page.contact" />
</div>
</template>

<script>
import GenericSection from './GenericSection.vue';
import UwzorgonlineSection from './UwzorgonlineSection.vue';
import ColumnsSection from './Columns.vue';
import NotFound404 from '@/templates/not-found/NotFound.vue';
import ContactPage from '@/templates/contact/Contact.vue';
import HomePage from '@/templates/home/Home.vue';

export default {
  components: {
    GenericSection,
    UwzorgonlineSection,
    ColumnsSection,
    NotFound404,
    ContactPage,
    HomePage,
  },
  data() {
    return {
      loading: false,
      page: null,
      error: null,
    }
  },
  computed: {
    slug() {
      return this.$route.params.slug && this.$route.params.slug !== 'contact' ? this.$route.params.slug : 'home';
    },
    pageType() {
      // Home and Contact are physically the same page in Wordpress, so they
      // have the same slug ('home'), but different $route slug here in the app
      if (this.slug === 'home') {
        if (this.$route.params.slug === 'contact') {
          return 'contact';
        } else {
          return 'home';
        }
      } else {
        return 'variable';
      }
    },
    highlightEvenSections() {
      // Choose "Even" when there is no title for the first section
      return this.page.highlight_alternate_sections && !this.page.sections[0].title;
    },
    highlightOddSections() {
      return this.page.highlight_alternate_sections && this.page.sections[0].title;
    },
  },
  created() {
    // Redirect old link from other websites that contain .html to the current routes
    if (this.slug.includes('.html')) {
      const cleanSlug = this.slug.substring(0, this.slug.indexOf(".html"));
      this.$router.push({
        name: 'page',
        params: {
          slug: cleanSlug
        }
      });
    }

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
      // this.error = this.page = null;

      if (this.$database.hasCached(this.slug)) {
        this.page = this.$database.getCached(this.slug);
        // console.log("Using cached version of /" + this.slug);

      } else {
        this.loading = true;
        const self = this;
        this.$database.getItems("pages?fields=id,title,slug,acf&slug=" + this.slug)
          .then(response => {
            // console.log("Loaded " + this.slug + " from the server");
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
            self.page.seo_title = self.page.title.rendered;
            self.page.title = self.page.html_title || self.page.seo_title;
            self.$metaManager.setTitle(self.page.slug === 'home' ? null : self.page.seo_title);

            this.$database.store(this.slug, self.page);
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
    padding: 0 1.5rem;
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
            background-color: $white-bis;
        }
    }
    &.is-even {
        & div:nth-child(odd) > .section {
            background-color: $white-bis;
        }
    }
}
#page > div > div:last-child > .section {
    padding-bottom: 9rem;
}
</style>
