<template>
<section class="section" :class="section.classes" :style="section.style">
  <div class="container">
    <h3 class="title is-4" v-html="section.title" v-if="!section.aside && section.title"></h3>
    <div class="columns">
      <div class="column is-9">
        <h3 class="title is-4" v-html="section.title" v-if="section.aside && section.title"></h3>
        <div class="content" v-html="section.content" v-if="section.content"></div>
      </div>
      <aside-component class="column is-3" v-if="section.aside_elements" v-bind:aside_elements="section.aside_elements" :class="section.aside_classes" :style="section.aside_style" />
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
    }
  }
}
</script>
