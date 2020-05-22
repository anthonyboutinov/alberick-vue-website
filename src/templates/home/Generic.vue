<template>
  <section class="section is-medium" :class="section.classes" :style="section.style">
    <div class="container is-9">
      <div class="title is-4 has-text-centered-tablet margin-bottom-large" v-html="section.title" v-if="section.title"></div>
      <div class="content " v-html="section.content" v-if="section.content"></div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    section: Object
  }
}
</script>
