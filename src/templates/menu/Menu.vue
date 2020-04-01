<template>
<section class="hero is-fullheight">
  <div class="hero-body">
    <div class="container">
      <div class="columns is-multiline is-variable is-2" id="primary-menu">
        <div class="column is-8">
          <menu-item slug="spoed" title="Spoed" :nobackground="true" :applycustomrules="true" style="border-top-left-radius:12px" />
        </div>
        <div class="column is-4">
          <menu-item slug="team" title="Het team" style="border-top-right-radius:12px" />
        </div>
        <div class="column is-4">
          <menu-item slug="spreekuren" title="Spreekuren" />
        </div>
        <div class="column is-4">
          <menu-item slug="afspraak-maken" title="Afspraak maken" />
        </div>
        <div class="column is-4">
          <menu-item slug="herhaal-recepten" title="Herhaal recepten" :nobackground="true" />
        </div>
        <div class="column is-4">
          <menu-item slug="huisbezoek" title="Huisbezoek" />
        </div>
        <div class="column is-4">
          <menu-item slug="online-services" title="Online services" />
        </div>
        <div class="column is-4">
          <menu-item slug="lab" title="Labonderzoeken<br>&amp; verrichtingen" />
        </div>
        <div class="column is-4">
          <menu-item slug="speciale-onderzoeken" title="Speciale onderzoeken" />
        </div>
        <div class="column is-4">
          <menu-item slug="inschrijving" title="Inschrijving" />
        </div>
        <div class="column is-4">
          <menu-item slug="praktijkinfo" title="Praktijkinfo" />
        </div>
        <div class="column is-4">
          <menu-item slug="links" title="Interessante links" style="border-bottom-left-radius:12px" />
        </div>
        <div class="column is-4">
          <menu-item slug="afwezigheid-huisartsen" title="Afwezigheid huisartsen" />
        </div>
        <div class="column is-4">
          <menu-item slug="klachtenregeling" title="Klachtenregeling" style="border-bottom-right-radius:12px" />
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
}
</script>

<style lang="scss">
.columns.is-variable .column {
    padding-top: var(--columnGap);
    padding-bottom: var(--columnGap);
}
</style>
