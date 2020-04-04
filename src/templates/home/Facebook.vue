<template>
<section class="section is-medium">
  <div class="container">
    <div class="columns align-items-flex-end">
      <div class="column is-6">
        <figure class="image img-facebook-reactions">
          <img src="@/assets/home/facebook-reactions.svg" alt="Facebook reactions (love, laugh, thumbs up, surprised)" class="is-hidden-mobile">
          <img src="@/assets/home/facebook-reactions-mobile.svg" alt="Facebook reactions (love, laugh, thumbs up, surprised)" class="is-hidden-tablet">
        </figure>
      </div>
      <div class="column is-6">
        <div class="is-size-5 margin-bottom-medium" v-html="section.content"></div>
        <a :href="facebookHref" class="button is-rounded is-large is-primary" target="_blank">Ga naar Facebook</a>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  props: {
    section: Object,
    contact: Object,
  },
  computed: {
    facebookHref() {
      console.log(this.contact.social_links.find(x => x.slug.label === 'Facebook'));
      return this.contact.social_links.find(x => x.slug.label === 'Facebook').href;
    }
  },
}
</script>

<style lang="scss">
.img-facebook-reactions {
    width: 65vw;
    margin-bottom: -1em;
    margin-left: 0;
    margin-right: auto;

    @media (min-width: $tablet) {
        margin-bottom: 2em;
        width: 22.75rem;
        margin-top: -4em;
        margin-bottom: -4em;
    }
}
</style>
