<template>
<div class="alternate-sections is-even">
  <hero-section v-bind:about="page.about" />
  <div v-for="(section, index) in page.sections" v-bind:key="index">
    <welcome-section v-if="section.type === 'welcome'" v-bind:contact="page.contact" v-bind:section="section" />
    <facebook-section v-if="section.type === 'facebook'" v-bind:contact="page.contact" v-bind:section="section" />
    <numbers-section v-if="section.type === 'numbers'" v-bind:section="section" />
    <map-section v-if="section.type === 'map'" v-bind:section="section" />
    <workshops-section v-if="section.type === 'workshops'" v-bind:section="section" />
    <apotheek-section v-if="section.type === 'apotheek'" v-bind:section="section" />
  </div>
  <logos-section />
</div>
</template>

<script>
import ApotheekSection from './Apotheek.vue'
import FacebookSection from './Facebook.vue'
import HeroSection from './Hero.vue'
import LogosSection from './Logos.vue'
import MapSection from './Map.vue'
import NumbersSection from './Numbers.vue'
import WelcomeSection from './Welcome.vue'
import WorkshopsSection from './Workshops.vue'

export default {
  name: 'Home',
  components: {
    ApotheekSection,
    FacebookSection,
    HeroSection,
    LogosSection,
    MapSection,
    NumbersSection,
    WelcomeSection,
    WorkshopsSection,
  },
  props: {
    page: Object,
  },
}
</script>

<style lang="scss">
.home-sections > div:nth-child(odd) > .section {
    background-color: $white-bis;
}
</style>
