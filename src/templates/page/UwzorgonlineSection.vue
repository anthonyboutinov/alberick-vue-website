<template>
<section class="section has-background-white-bis is-medium" id="uwzorgonline-section" :class="section.classes" :style="section.style">

  <div class="container">
    <div class="columns space-between">

      <div class="column is-7">
        <img class="image margin-bottom-medium" src="@/assets/logos/uwzorgonline-logo.png" srcset="@/assets/logos/uwzorgonline-logo.png 307w, @/assets/logos/uwzorgonline-logo@3x.png, 614w" alt="Uw Zorg Online Logo" style="width:17.0555555556rem;">
        <a href="https://alberick.uwzorgonline.nl/inloggen-en-registratie/app/" target="_blank" class="button is-large is-primary is-rounded margin-bottom-medium is-fullwidth-mobile">Inloggen en&nbsp;registratie</a>
        <h4 class="title is-5">Download de app</h4>

        <div class="columns margin-bottom is-mobile is-variable is-1">
          <div class="column is-narrow is-6-mobile">
            <a href="https://itunes.apple.com/nl/app/uw-zorg-online/id796436476?mt=8" target="_blank" class="image">
              <img src="@/assets/custom-sections/app-store-icon.png" srcset="@/assets/custom-sections/app-store-icon.png 182w, @/assets/custom-sections/app-store-icon@3x.png 364w" style="width:10.1111111111rem;">
            </a>
          </div>
          <div class="column is-narrow is-6-mobile">
            <a href="https://alberick.uwzorgonline.nl/inloggen-en-registratie/app/" target="_blank" class="image">
              <img src="@/assets/custom-sections/google-play-icon.png" srcset="@/assets/custom-sections/google-play-icon.png 182w, @/assets/custom-sections/google-play-icon@3x.png 364w" style="width:10.1111111111rem;">
            </a>
          </div>
        </div>

        <div v-html="moreInfo">
        </div>

      </div>

      <div class="column is-narrow uwzorgonline-picture-column">
        <figure class="image">
          <img src="@/assets/custom-sections/uwzorgonline-iphone.png" alt="Uw Zorg Online">
        </figure>
      </div>

    </div>
  </div>

</section>
</template>

<script>
export default {
  props: {
    section: {
      type: Object,
    }
  },
  computed: {
    moreInfo() {
      return "Meer weten? Bekijk de&nbsp;<a href=\"https://uwzorgonline.nl/\" target=\"_blank\">informatiepagina</a>";
    }
  }
}
</script>

<style class="scss">
#uwzorgonline-section {
  padding-bottom: 6em !important;
  margin-top: 3em;
  overflow: hidden;
}

.uwzorgonline-picture-column {
  align-self: flex-end;
  /* transform: translateY(6em); */
      margin-bottom:-6em;
}

/* .uwzorgonline-picture-column .picture {

} */
</style>
