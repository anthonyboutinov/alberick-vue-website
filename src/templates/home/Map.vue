<template>
<section class="" style="background-color: #dad5eb">
  <figure class="image map">
    <img src="@/assets/home/map-monochrome.png" srcset="@/assets/home/map-monochrome.png 1440w, @/assets/home/map-monochrome@2x.png 2550w" alt="Map of the area" class="is-hidden-mobile">
  </figure>
  <div class="section">
    <div class="container is-size-5">
      <div class="columns">
        <div class="column is-9" v-html="section.content"></div>
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
.image.map {
    padding-top: 50%;
    background-image: url("../../assets/home/map-monochrome.png");
    background-size: cover;

    @media (min-width: $tablet) {
        padding-top: 0;
    }
}
</style>
