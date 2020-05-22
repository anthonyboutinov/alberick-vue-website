<template>
<section class="section is-medium logos">
  <div class="container">
    <logos-for-clause v-bind:logos="section.logos_line1" />
    <logos-for-clause v-bind:logos="section.logos_line2" class="margin-bottom-medium-negate" />
  </div>
</section>
</template>

<style lang="scss">
.section.logos .image {
    max-width: calc(50vw - #{$gap} * 2);
}
</style>

<script>
import LogosForClause from './Logos_forClause.vue'
export default {
  components: {
    LogosForClause,
  },
  props: {
    section: Object,
  },
}
</script>
