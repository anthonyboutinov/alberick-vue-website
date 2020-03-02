<template>
<div class="aside-element">
  <a :href="element.href" v-if="element.type === 'button'" class="button is-primary is-outlined is-rounded is-fullwidth" v-html="element.label"></a>
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
