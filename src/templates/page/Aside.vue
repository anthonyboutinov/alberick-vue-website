<template>
  <div :class="aside.classes" :style="aside.style">
    <aside-element v-for="(element, index) in aside.elements" v-bind:key="index" v-bind:element="element" />
  </div>
</template>

<script>
import AsideElement from './AsideElement.vue';
export default {
  components: {
    AsideElement,
  },
  props: {
    aside: {
      type: Object,
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
