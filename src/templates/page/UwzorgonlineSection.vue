<template>
<section class="section has-background-white-bis is-medium" id="uwzorgonline-section" :class="section.classes" :style="section.style">

  <div class="container">
    <div class="columns space-between">

      <div class="column is-7">
        <img class="image margin-bottom-medium" src="@/assets/logos/uwzorgonline-logo.png" srcset="@/assets/logos/uwzorgonline-logo.png 307w, @/assets/logos/uwzorgonline-logo@3x.png, 614w" alt="Uw Zorg Online Logo" style="width:17.0555555556rem;">
        <a href="https://alberick.uwartsonline.nl/pages/MijnAccount.asp?articleid=192153" target="_blank" class="button is-large is-primary is-rounded margin-bottom-large">Inloggen online</a>
        <h4 class="title is-5">Download de app</h4>

        <div class="columns margin-bottom-medium">
          <div class="column is-narrow">
            <a href="https://itunes.apple.com/nl/app/uw-zorg-online/id796436476?mt=8" target="_blank" class="image">
              <img src="@/assets/custom-sections/app-store-icon.png" srcset="@/assets/custom-sections/app-store-icon.png 182w, @/assets/custom-sections/app-store-icon@3x.png 364w" style="width:10.1111111111rem;">
            </a>
          </div>
          <div class="column is-narrow">
            <a href="https://play.google.com/store/apps/details?id=nl.mediapp.pharmeon&hl=en" target="_blank" class="image">
              <img src="@/assets/custom-sections/google-play-icon.png" srcset="@/assets/custom-sections/google-play-icon.png 182w, @/assets/custom-sections/google-play-icon@3x.png 364w" style="width:10.1111111111rem;">
            </a>
          </div>
        </div>

        <div>Meer weten? Bekijk de
          <a href="https://uwzorgonline.nl/" target="_blank">informatiepagina</a>
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
  }
}
</script>

<style class="scss">
#uwzorgonline-section {
  padding-bottom: 6em !important;
  margin-top: 3em;
}

.uwzorgonline-picture-column {
  align-self: flex-end;
  /* transform: translateY(6em); */
      margin-bottom:-6em;
}

.uwzorgonline-picture-column .picture {

}
</style>
