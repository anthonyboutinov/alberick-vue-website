<template>
  <section class="section is-medium is-clipped">
    <div class="container">
      <div class="columns align-items-flex-end is-mobile">
        <div class="column is-7-tablet is-9ish-mobile-woman-waving-hand is-size-5">
          <figure class="image img-woman-waving-hand is-hidden-tablet">
            <img src="@/assets/home/illustration-woman-waving-hand.svg" alt="">
          </figure>
          <span v-html="section.content"></span>
        </div>
        <div class="column is-5-tablet is-hidden-mobile">
          <figure class="image img-woman-waving-hand">
            <img src="@/assets/home/illustration-woman-waving-hand.svg" alt="">
          </figure>
        </div>
      </div>
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

<style lang="scss">
.image.img-woman-waving-hand {
    width: 60vw;

    @media (max-width: $tablet - 1) {
        float: right;
        shape-outside: polygon(100% 0%, 94% 23%, 57% 31%, 45% 66%, 0 78%, 0 100%, 100% 100%);

        position: relative;
        margin-right: -3em;
        margin-bottom: 0;
        margin-top: calc(20vw);
    }

    @media (min-width: $tablet) {
        width: 19.9375rem;
        margin-top: -4rem;
        margin-bottom: -4rem;
    }
}
</style>
