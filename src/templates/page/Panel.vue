<template>
<div class="panel-component" style="justify-content: space-between;">
  <figure class="image" :class="panel.image_class" :style="panel.image_style" v-if="panel.image">
    <img :src="panel.image" :alt="panel.title">
  </figure>
  <div class="panel-component-body">
    <h4 class="title is-spaced is-4" v-html="panel.title" v-if="panel.title"></h4>
    <div class="content" v-html="panel.content" v-if="panel.content"></div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    panel: {
      type: Object,
    }
  }
}
</script>

<!-- // <style lang="scss"> -->
<!-- // .panel-component {
//     border-radius: $radius-large;
//     padding: 3rem 2rem;
//     height: 100%;
//     display: flex;
//     flex-direction: column;
//     background: #fcfbfb;
//     background: linear-gradient(45deg, #fdfdfd 0%,#f9f9f9 96%);
//
//     .title {
//         margin-bottom: 1rem;
//     }
// } -->
<!-- // </style> -->
