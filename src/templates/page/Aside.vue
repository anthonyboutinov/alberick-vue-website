<template>
  <div>
    <aside-element v-for="(element, index) in aside_elements" v-bind:key="index" v-bind:element="element" />
  </div>
</template>

<script>
import AsideElement from './AsideElement.vue';
export default {
  components: {
    AsideElement,
  },
  props: {
    aside_elements: {
      type: Array,
    }
  }
}

// classes: '',
// style: '',
// elements: [{
//   type: 'button',
//   label: 'Bel',
//   hint: '',
//   href: 'tel:000',
// }, ]
</script>
