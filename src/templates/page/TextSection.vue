<template>
<section class="section" :class="section.classes" :style="section.style">
  <div class="container">
    <h3 class="title is-4" v-html="section.title" v-if="!section.aside"></h3>
    <div class="columns">
      <div class="column is-9">
        <h3 class="title is-4" v-html="section.title" v-if="section.aside"></h3>
        <div class="content" v-html="section.content"></div>
      </div>
      <aside-component class="column is-3" v-if="section.aside" v-bind:aside="section.aside" />
    </div>
  </div>
</section>
</template>

<script>
import AsideComponent from './Aside.vue';

export default {
  components: {
    AsideComponent,
  },
  props: {
    section: {
      type: Object,
      // title: {
      //   type: String,
      // },
      // content: {
      //   type: String,
      // },
      // classes: {
      //   type: String,
      //   optional: true,
      // },
      // style: {
      //   type: String,
      //   optional: true,
      // },
      // aside: {
      //   type: Object,
      //   optional: true,
      // }
    }
  }
}
</script>
