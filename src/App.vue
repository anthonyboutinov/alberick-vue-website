<template>
<div id="app">

  <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation" id="navbar">
    <div class="container">
      <div class="navbar-brand">
        <router-link class="navbar-item is-size-7-rem navbar-logo-button" to="/" role="button">
          <div class="navbar-logo">
            <div class="image">
              <img src="@/assets/alberick-medisch-centrum-primary-logo-centered.svg" alt="Medisch Centrum Alberick Logo SVG">
            </div>
          </div>
          <div>Medisch Centrum Alberick</div>
        </router-link>

        <a role="button" class="navbar-burger burger" aria-label="menu" :aria-expanded="displayMenu" v-on:click="toggleMenu()">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-menu" :style="(displayNavbar ? 'display:block' : '')">
        <!-- navbar start, navbar end -->
        <div class="navbar-end">
          <div class="navbar-item">
            <button class="button is-medium is-white is-rounded" :class="{'is-active': displayContact}" v-on:click="toggleContact()">
              Contact
            </button>
          </div>
          <div class="navbar-item">
            <button class="button is-medium is-primary is-rounded" :class="{'is-active': displayMenu, 'is-outlined': !displayMenu}" v-on:click="toggleMenu()">
              Menu
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>

  <transition-page>
    <router-view />
  </transition-page>

  <footer class="footer" id="footer">
    <div class="container has-text-centered is-size-7">
      <p>
        ©
        <router-link to="/" class="link-hidden">Medisch Centrum Alberick</router-link> 2020.
        <router-link to="/privacy">Privacy</router-link>.
        <router-link to="/terms">Terms</router-link>. Website by
        <a href="https://boutinov.website" target="_blank">Boutinov</a>. Artwork design by
        <a href="https://freepik.com" target="_blank" class="link-hidden">pch.vector / Freepik</a>.
      </p>
    </div>
  </footer>

</div>
</template>

<script>
import TransitionPage from './transitions/TransitionPage.vue';

export default {
  name: 'App',
  data: function() {
    return {
      displayNavbar: false,
    };
  },
  components: {
    TransitionPage,
  },
  computed: {
    displayMenu() {
      return this.$route.name === 'menu';
    },
    displayContact() {
      return this.$route.name === 'page' && this.$route.params.slug === 'contact';
    },
  },
  methods: {
    toggleContact() {
      if (!this.displayContact) {
        this.$router.push("/contact");
      } else {
        this.$router.go(-1);
      }
    },
    toggleMenu() {
      if (!this.displayMenu) {
        this.$router.push("/menu");
      } else {
        this.$router.go(-1);
      }
    },
  }
}
</script>

<style lang="scss">
.navbar-item {
    font-weight: $weight-semibold;
}
#footer {
    a[href] {
        color: $primary;
    }
}

.navbar .button.is-white {
    background-color: rgba(255,255,255,0);
}

.navbar-logo-button {
  display: flex;
  flex-direction:row;
  align-items: center;
}

$navbar-logo-width: 1.75em;
$navbar-logo-negative-margin: 0.20652173913;
.navbar-logo {
  width: $navbar-logo-width;
  height: $navbar-logo-width;
  margin-right: 0.62em;
  .image {
      margin: $navbar-logo-width * $navbar-logo-negative-margin * -1;
      width: $navbar-logo-width * (1 + 2 * $navbar-logo-negative-margin);
      height: $navbar-logo-width * (1 + 2 * $navbar-logo-negative-margin);
      img {
        max-height: none;
      }
  }
}

@media (max-width: $tablet - 1px) {
    .navbar-brand > .navbar-item {
        padding-left: 1.5rem;
    }
}
</style>
