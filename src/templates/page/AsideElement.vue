<template>
<div class="aside-element">
  <a :href="element.href" class="button is-primary is-outlined is-rounded is-fullwidth" v-html="element.label"></a>
  <div v-if="element.hint" class="is-size-7 has-text-centered" style="margin-top:0.25rem" v-html="element.hint"></div>
</div>
</template>

<script>
export default {
  props: {
    element: {
      type: Object,
    }
  }
}

// element: {
//   type: 'button',
//   label: 'Bel<br>'
//   hint: '',
//   href: 'tel:000',
// }
</script>

<style lang="scss">
.aside-element:not(:last-child) {
  margin-bottom: 1.5rem;
}

.aside-element {
  .button.is-primary.is-outlined {
    background-color: white;
  }
}
</style>
