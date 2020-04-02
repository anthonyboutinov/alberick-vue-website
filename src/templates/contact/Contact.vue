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
        <contact-content-component />
      </div>
    </div>
  </section>

  <section class="hero is-fullheight is-hidden-mobile">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-variable is-8" style="align-items:baseline;">
          <div class="column is-6">
            <p class="is-size-5 margin-bottom-medium">
              We are a general practice medical center caring for nearly 11,000 patients in and around Blerick. We provide consultations, examinations, operations and home visits. We also provide services and care via Uw Zorg Online.
            </p>
            <div class="menu-item-standalone">
              <menu-item slug="online-services" title="Online services" style="border-radius:12px;" />
            </div>
          </div>
          <div class="column is-6">
            <h3 class="title is-4">Contact</h3>
            <contact-content-component />
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
