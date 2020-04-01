<template>
<section class="hero is-fullheight">
  <div class="hero-body">
    <div class="container">
      <div class="columns is-variable is-8" style="align-items:baseline;">
        <div class="column is-6">
          <p class="is-size-5 margin-bottom-medium">
            We are a general practice medical center caring for nearly 11,000 patients in and around Blerick. We provide consultations, examinations, operations and home visits. We also provide services and care via Uw Zorg Online.
          </p>
          <div class="menu-item-standalone is-hidden-mobile">
            <menu-item slug="online-services" title="Online services" style="border-radius:12px;" />
          </div>
        </div>
        <div class="column is-6">
          <h3 class="title is-4">Contact</h3>
          <address class="margin-bottom">
            Alberickstraat 193<br>
            5922 BR, Venlo<br>
            <small class="has-text-grey">De praktijk is voor rolstoelen toegankelijk.<br>
              Via openbaar vervoer: buslijn 2 en 4, halte Azaleastraat.</small>
          </address>
          <a href="#" target="_blank" class="button is-rounded is-primary is-outlined margin-bottom-medium">Map</a>
          <div>
            Tel: <a href="tel:0773828182">077-3828182</a><br>
            Fax: 077-3961998<br>
            E-mail: <a href="mailto:info@alberick.nl">info@alberick.nl</a> (niet voor medische vragen)<br>
            <a class="icon is-medium margin-top" href="#" target="_blank">
              <i class="fab fa-2x fa-facebook-square"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import MenuItem from '../menu/MenuItem.vue';

export default {
  components: {
    MenuItem
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
