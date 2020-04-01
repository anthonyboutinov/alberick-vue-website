<template>
<router-link :to="'/'+_slug" class="menu-item image" :class="{'is-4by3': !applycustomrules, 'is-8gap2by3': applycustomrules && _slug === 'spoed', 'has-radius': hasradius}" :style="'background-image: url(/menu-items/mi-'+_slug+'.svg)'">
  <div class="has-ratio">
    <div class="menu-item-body is-size-5" :class="{'has-background': !_nobackground}" v-html="title"></div>
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
    },
    applycustomrules: {
      optional: true,
      type: Boolean,
    },
    hasradius: {
      optional: true,
      type: Boolean,
    }
  },
  computed: {
    _nobackground() {
      return Object.prototype.hasOwnProperty.call(this, 'nobackground') ? this.nobackground : this.slug === 'spoed' || this.slug === 'herhaal-recepten'
    },
    _slug() {
      if (this.slug.substr(-1) === "/") {
        return this.slug.replace(/^[a-z]{4,5}:\/{2}[a-z]{1,}:[0-9]{1,4}.(.*)/, '$1').replace(/\/$/, "");
      } else {
        return this.slug;
      }
    },
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

    &:active,
    &:focus,
    &:hover {
        // box-shadow: 0 0 0.3rem rgba($primary, 0.5);
        // transform: translateY(-0.15rem);
        .menu-item-body {
            color: $link;
        }
    }

    &.is-8gap2by3 {
      @extend .is-4by3;

      @media screen and (min-width: $tablet) {
        padding-top: 36.42903226% !important;
      }

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

    &.has-radius {
      border-radius: $radius-large;
    }
}
</style>
