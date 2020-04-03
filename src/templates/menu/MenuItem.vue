<template>
<router-link :to="'/'+_slug" class="menu-item image" :class="{'is-4by3-tablet': !(ispartofprimarymenu && _slug === 'spoed'), 'is-8gap2by3-tablet': ispartofprimarymenu && _slug === 'spoed', 'has-border-radius': hasradius, ispartofprimarymenu}" :data-menu-item="slug"
  :style="'background-image: url(/menu-items/mi-'+_slug+'.svg)'">
  <div class="has-ratio">
    <div class="menu-item-body" :class="{'has-background': !_nobackground}" v-html="title"></div>
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
    ispartofprimarymenu: {
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
        return (new URL(this.slug)).pathname.replace(/^\/|\/$/g, '');
      } else {
        return this.slug;
      }
    },
  }
}
</script>

<style lang="scss">
.menu-item {
    @include gpurender;
    width: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    overflow: hidden;
    // transition: box-shadow 0.2s ease-out;
    // box-shadow: 0 0 0.3rem rgba($primary, 0);
    // transform: translateY(0rem);

    @media (max-width: $tablet - 1px) {
        border-radius: 3px;
    }

    & .has-ratio {
        display: flex;
        flex-direction: column-reverse;
        background-repeat: no-repeat;

        bottom: 0;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        width: 100%;
        height: 100%;
    }

    &-body {
        @include gpurender;
        width: 100%;
        padding: 0.4rem 0.5rem;
        background: linear-gradient(to bottom, rgba(216,216,216,0.52) 0%,rgba(216,216,216,0.83) 23%,rgba(216,216,216,1) 100%);
        font-size: 5vw;
        color: $text-strong;

        @media (min-width: $tablet) {
            padding: 1.1rem 1.5rem;
            font-weight: $weight-medium;
            background: none;
            font-size: $size-5;

            &.has-background {
                // https://colorzilla.com/gradient-editor/#d8d8d8+0,d8d8d8+23,d8d8d8+100&0.52+0,0.83+23,1+100
                background: linear-gradient(to bottom, rgba(216,216,216,0.52) 0%,rgba(216,216,216,0.83) 23%,rgba(216,216,216,1) 100%);
            }
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

    &.is-4by3-tablet {
        padding-top: 75%;
        @media (min-width: $tablet) {
            padding-top: 75%;
        }
    }

    &.is-8gap2by3-tablet {
        padding-top: 36.4238410596% !important;
        @media (min-width: $tablet) {
            padding-top: 36.42903226% !important;

        }
    }
}

@media (min-width: $tablet) {
    // @each $slug in 'afspraak-maken',
    // 'afwezigheid-huisartsen',
    // 'herhaal-recepten',
    // 'huisbezoek',
    // 'inschrijving',
    // 'klachtenregeling',
    // 'lab',
    // 'links',
    // 'online-services',
    // 'praktijkinfo',
    // 'speciale-onderzoeken',
    // 'spoed',
    // 'spreekuren',
    // 'team' {
    //     [data-menu-item="#{$slug}"] {
    //         background-image: url("/menu-items/mi-#{$slug}.svg");
    //     }
    // }

    [data-menu-item="spoed"].ispartofprimarymenu {
        border-top-left-radius: 12px;
    }
    [data-menu-item="team"].ispartofprimarymenu {
        border-top-right-radius: 12px;
    }
    [data-menu-item="links"].ispartofprimarymenu {
        border-bottom-left-radius: 12px;
    }
    [data-menu-item="klachtenregeling"].ispartofprimarymenu {
        border-bottom-right-radius: 12px;
    }
}
</style>
