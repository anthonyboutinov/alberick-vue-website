<template>
<section class="section is-medium">
  <div class="container">
    <figure class="image margin-bottom apotheek-logo">
      <img src="@/assets/home/logo-apotheek-pans.png" alt="Apotheek Pans Logo">
      <div>Apotheek Pans</div>
    </figure>
    <div class="is-size-5" v-html="section.content"></div>
    <a href="https://www.serviceapotheek.nl/pans" target="_blank" class="button is-primary is-outlined is-rounded margin-top-medium is-medium">Bezoek website</a>
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
.image.apotheek-logo {
    display: flex;
    flex-direction: row;
    img {
        width: 70px !important;
        height: 70px !important;
        margin-right: 1rem;
        align-self: center;
    }
    div {
        font-family: Open Sans, arial, sans-serif;
        color: #0f3478;
        font-size: 2rem;
        line-height: 1.85rem;
        font-weight: 800;
        align-self: center;
    }
}
</style>
