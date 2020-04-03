<template>
<article class="panel-component" style="height:100%;">
  <figure class="image margin-bottom-medium is-1by1" v-if="column.image">
    <img :src="column.image" :alt="column.title" class="has-ratio contain">
  </figure>

  <h4 class="title is-4" v-if="column.title" v-html="column.title"></h4>
  <div class="content" v-if="column.content" v-html="column.content"></div>

  <div class="button is-primary is-outlined is-rounded is-medium is-hidden-tablet">Visit Website</div>
</article>
</template>

<script>
export default {
  props: {
    column: {
      type: Object,
    }
  }
}
</script>

<style lang="scss">

</style>
