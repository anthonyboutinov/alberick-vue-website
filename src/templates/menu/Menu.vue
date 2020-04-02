<template>
<section class="hero is-fullheight">
  <div class="hero-body menu-hero-body">
    <div class="container">
      <div class="columns is-multiline is-mobile is-variable is-1 is-hidden-tablet">
        <div class="column" v-for="item in menuItems" v-bind:key="item.slug" :class="{'is-12': item.slug === 'spoed', 'is-6': item.slug !== 'spoed'}">
          <menu-item :slug="item.slug" :title="item.title" :ispartofprimarymenu="true" />
        </div>
      </div>
      <div class="columns is-multiline is-variable is-2 is-hidden-mobile">
        <div class="column" v-for="item in menuItems" v-bind:key="item.slug" :class="{'is-8': item.slug === 'spoed', 'is-4': item.slug !== 'spoed', 'is-hidden-tablet': item.mobileOnly}">
          <menu-item :slug="item.slug" :title="item.title" :ispartofprimarymenu="true" />
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import MenuItem from './MenuItem.vue';

export default {
  components: {
    MenuItem
  },
  data() {
    return {
      menuItems: [{
        slug: 'spoed',
        title: 'Spoed',
      }, {
        slug: 'contact',
        title: 'Contact',
        mobileOnly: true,
      }, {
        slug: 'team',
        title: 'Het team',
      }, {
        slug: 'spreekuren',
        title: 'Spreekuren',
      }, {
        slug: 'afspraak-maken',
        title: 'Afspraak maken',
      }, {
        slug: 'herhaal-recepten',
        title: 'Herhaal recepten',
      }, {
        slug: 'huisbezoek',
        title: 'Huisbezoek',
      }, {
        slug: 'online-services',
        title: 'Online services',
      }, {
        slug: 'lab',
        title: 'Labonderzoeken<br>&amp; verrichtingen',
      }, {
        slug: 'speciale-onderzoeken',
        title: 'Speciale onderzoeken',
      }, {
        slug: 'inschrijving',
        title: 'Inschrijving',
      }, {
        slug: 'praktijkinfo',
        title: 'Praktijkinfo',
      }, {
        slug: 'links',
        title: 'Interessante links',
      }, {
        slug: 'afwezigheid-huisartsen',
        title: 'Afwezigheid huisartsen',
      }, {
        slug: 'klachtenregeling',
        title: 'Klachtenregeling',
      }]
    }
  }
}
</script>

<style lang="scss">
.columns.is-variable .column {
    padding-top: var(--columnGap);
    padding-bottom: var(--columnGap);
}
@media (max-width: $tablet - 1px) {
    .hero-body.menu-hero-body {
        padding: 1em 0.5em;
    }
}
</style>
