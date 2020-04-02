<template>
<section class="section is-medium logos">
  <div class="container">
    <div class="columns is-mobile is-multiline justify-content-space-around align-items-center">
      <div class="column is-narrow">
        <figure class="image margin-bottom-medium" style="width:125px;margin-top:2rm;">
          <img src="@/assets/logos/cohesie-logo.png" srcset="@/assets/logos/cohesie-logo.png 125w, @/assets/logos/cohesie-logo@2x.png 250w" alt="Cohesie">
        </figure>
      </div>
      <div class="column is-narrow">
        <figure class="image margin-bottom-medium" style="width:112px">
          <img src="@/assets/logos/hazo24-logo.svg" alt="Hazo24">
        </figure>
      </div>
      <div class="column is-narrow">
        <figure class="image margin-bottom-medium" style="width:229px">
          <img src="@/assets/logos/provico-logo.png" alt="Provico">
        </figure>
      </div>
    </div>
    <div class="columns is-mobile is-multiline justify-content-space-around align-items-center margin-bottom-medium-negate">
      <div class="column is-narrow">
        <figure class="image margin-bottom-medium" style="width:326px">
          <img src="@/assets/logos/thuisartsnl-logo.png" srcset="@/assets/logos/thuisartsnl-logo.png 326w, @/assets/logos/thuisartsnl-logo@2x.png 652w" alt="Thuisarts.NL">
        </figure>
      </div>
      <div class="column is-narrow">
        <figure class="image margin-bottom-medium" style="width:307px">
          <img src="@/assets/logos/uwzorgonline-logo.png" srcset="@/assets/logos/uwzorgonline-logo.png 307w, @/assets/logos/uwzorgonline-logo@3x.png, 614w" alt="Uw Zorg Online">
        </figure>
      </div>
    </div>
  </div>
</section>
</template>

<style lang="scss">
.section.logos .image {
  max-width: calc(50vw - #{$gap} * 2);
}
</style>
