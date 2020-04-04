<template>
  <section class="section is-medium">
    <div class="container is-9">
      <router-link to="/contact">
        <figure class="image is-fillwidth has-border-radius has-shadow" style="margin-bottom:0.5rem">
          <img :src="section.image" alt="">
        </figure>
        <div class="has-text-right-tablet" style="margin-bottom:1.5rm">
          <span v-html="contact.address_line_1"></span>,
          <span v-html="contact.address_line_2"></span>
        </div>
      </router-link>
      <div class="is-size-4 is-hidden-mobile margin-top" v-html="section.content"></div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    contact: Object,
    section: Object
  }
}
</script>
