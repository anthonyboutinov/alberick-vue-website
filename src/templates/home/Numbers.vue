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
        doktersassistentes
      </div>
      <div class="column is-4 big-numbers is-offset-2">
        <div>3</div>
        praktijkondersteuners
      </div>
      <div class="column is-4 big-numbers">
        <div>3</div>
        praktijkondersteuner huisarts geestelijke gezondheidszorg
      </div>
    </div>
  </div>
</section>
</template>

<style lang="scss">
.big-numbers {
    text-align: center;
    margin: 1rem 0;
    font-size: $size-5;
    & > div:first-child {
        font-size: 4rem;
        color: #222222;
    }
}

.doctor-profile-numbers {
    width: 83px;
    margin: 13px auto;
}
</style>
