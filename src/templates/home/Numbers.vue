<template>
<section class="section is-medium">
  <div class="container">
    <div class="title is-4 has-text-centered-tablet margin-bottom-large">Bij Medisch Centrum Alberick&nbsp;werken</div>
    <div class="columns is-multiline">
      <div class="column is-4 big-numbers">
        <div>4</div>
        huisartsen
      </div>
      <div class="column is-4 big-numbers">
        <figure class="image doctor-profile-numbers">
          <img src="@/assets/home/doctor-profile-generic.svg" alt="Doctor">
        </figure>
        een waarnemend huisarts
      </div>
      <div class="column is-4 big-numbers">
        <div>9</div>
        dokter&shy;sassistentes
      </div>
      <div class="column is-4 big-numbers is-offset-2">
        <div>3</div>
        praktijk&shy;onder&shy;steuners
      </div>
      <div class="column is-4 big-numbers">
        <div>3</div>
        praktijk&shy;onder&shy;steuner huisarts geestelijke gezondheidszorg
      </div>
    </div>
  </div>
</section>
</template>

<style lang="scss">
.big-numbers {
    font-size: $size-6;

    & > div:first-child {
        font-size: 3em;
        color: #222222;
        margin-right: 0.5em;

    }

    @media (max-width: $tablet - 1px) {
      display: flex !important;
      flex-direction: row;
      align-items: center;
      padding-top: 0.5em;
      padding-bottom: 0.5em;

      & > div:first-child {
        line-height: 1em;
      }
    }

    @media (min-width: $tablet) {
        margin: 1rem 0;
        text-align: center;
        font-size: $size-5;

        & > div:first-child {
            font-size: 4rem;
            float: none;
            margin-right: 0;
        }
    }
}

.doctor-profile-numbers {
    width: 3em;
    margin: 0 0.75em 0 -0.5em;

    @media (min-width: $tablet) {
      width: 83px;
      margin: 13px auto;
    }
}
</style>
