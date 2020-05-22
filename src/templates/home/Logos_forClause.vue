<template>
<div class="columns is-mobile is-multiline justify-content-space-around align-items-center">
  <div class="column is-narrow" v-for="logo in logos" v-bind:key="logo.href">
    <a :href="logo.href" target="_blank">
      <figure class="image margin-bottom-medium" :style="'width:'+logo.width+'px'">
        <img :src="logo.src_at1 ? logo.src_at1 : logo.src_at2" :srcset="logo.src_at1 && logo.src_at2 ? (logo.src_at1+' '+logo.width+'w, ') + (logo.src_at2+' '+(logo.width * 2)+'w') : ''" :alt="logo.alt">
      </figure>
    </a>
  </div>
</div>
</template>

<script>
export default {
  props: {
    logos: Array
  },
}
</script>
