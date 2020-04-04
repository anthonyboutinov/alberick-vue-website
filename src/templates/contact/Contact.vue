<template>
<div>
  <section class="is-hidden-tablet is-fullheight">
    <div class="page-head">
      <div class="container">
        <h2 class="title is-3 has-text-weight-bold page-title">Contact</h2>
      </div>
    </div>
    <div class="section" style="padding-top:0;">
      <div class="container">
        <contact-content-component v-bind:contact="contact" />
      </div>
    </div>
  </section>

  <section class="hero is-fullheight is-hidden-mobile">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-variable is-8" style="align-items:baseline;">
          <div class="column is-6">
            <div class="is-size-5 margin-bottom-medium" v-html="about.content"></div>
            <div class="menu-item-standalone" v-if="about.menu_item_active">
              <menu-item :slug="about.menu_item" :title="about.menu_item_text" class="has-border-radius" />
            </div>
          </div>
          <div class="column is-6">
            <h3 class="title is-4">Contact</h3>
            <contact-content-component v-bind:contact="contact" />
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
</template>

<script>
import MenuItem from '../menu/MenuItem.vue';
import ContactContentComponent from './ContactContent.vue';

export default {
  components: {
    MenuItem,
    ContactContentComponent,
  },
  props: {
    about: Object,
    contact: Object,
  }
}
</script>

<style lang="scss">
.menu-item-standalone {
    width: 100%;
    @media (min-width: $tablet) {
        max-width: 301px;
    }
}
</style>
