<template>
<router-link :to="'/'+slug" class="menu-item image" :class="{'is-4by3': slug !== 'spoed', 'is-8gapby3': slug === 'spoed'}" :style="'background-image: url(/menu-items/mi-'+slug+'.svg)'">
  <div class="has-ratio">
    <div class="menu-item-body is-size-5" :class="{'has-background': !nobackground}" v-html="title"></div>
  </div>
</router-link>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    slug: {
      type: String,
    },
    nobackground: {
      optional: true,
      type: Boolean,
    }
  }
}
</script>

<style lang="scss">
.menu-item {
    width: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    overflow: hidden;
    // transition: box-shadow 0.2s ease-out;
    // box-shadow: 0 0 0.3rem rgba($primary, 0);
    // transform: translateY(0rem);

    & .has-ratio {
        display: flex;
        flex-direction: column-reverse;
        background-repeat: no-repeat;
    }

    &-body {
        width: 100%;
        font-weight: $weight-medium;
        padding: 1.1rem 1.5rem;
        color: $text-strong;

        &.has-background {
          // https://colorzilla.com/gradient-editor/#d8d8d8+0,d8d8d8+23,d8d8d8+100&0.52+0,0.83+23,1+100
          background: linear-gradient(to bottom, rgba(216,216,216,0.52) 0%,rgba(216,216,216,0.83) 23%,rgba(216,216,216,1) 100%);
        }
    }

    &:hover, &:focus, &:active {
      // box-shadow: 0 0 0.3rem rgba($primary, 0.5);
      // transform: translateY(-0.15rem);
      .menu-item-body {
        color: $link;
      }
    }


    &.is-8gapby3 {
        padding-top: 36.12903226%;

        .has-ratio {
          bottom: 0;
          left: 0;
          position: absolute;
          right: 0;
          top: 0;
          width: 100%;
          height: 100%;
        }
    }
}
</style>
