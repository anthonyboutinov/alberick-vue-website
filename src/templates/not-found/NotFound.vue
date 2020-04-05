<template>
<section class="hero is-fullheight is-primary is-bold">
  <div class="hero-body">
    <div class="container">
      <h2 class="title">Niet gevonden</h2>
      <p class="subtitle" v-html="'De pagina waar u naar zoekt bestaat&nbsp;niet'"></p>
      <router-link :to="PREV_ROUTE" class="button is-large is-white is-outlined is-rounded" v-if="PREV_ROUTE !== '/'">Ga terug</router-link>
      <router-link to="/" class="button is-large is-white is-outlined is-rounded" v-else>Terug naar de hoofdpagina</router-link>
    </div>
  </div>
</section>
</template>
