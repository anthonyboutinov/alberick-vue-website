<template>
<div id="app">

  <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation" id="navbar">
    <div class="container">
      <div class="navbar-brand">
        <router-link class="navbar-item is-size-7-rem" to="/">
          Alberick
          <span class="is-hidden-xxs">—</span> Medisch Centrum
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
        <router-link to="/" class="link-hidden">Alberick</router-link> 2020.
        <router-link to="/privacy-policy">Privacy &amp; Cookies</router-link>.
        <router-link to="/terms">T&amp;C's</router-link>. Website by
        <a href="https://boutinov.com" target="_blank">Boutinov.com</a>. Artwork design by
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
      return this.$route.name === 'contact';
    },
  },
  methods: {
    toggleContact() {
      if (!this.displayContact) {
        this.$router.push("contact");
      } else {
        this.$router.go(-1);
      }
    },
    toggleMenu() {
      if (!this.displayMenu) {
        this.$router.push("menu");
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
footer.footer {
    a[href] {
        color: $primary;
    }
}

.navbar .button.is-white {
    background-color: rgba(255,255,255,0);
}

@media (max-width: $tablet - 1px) {
    .navbar-brand > .navbar-item {
        padding-left: 1.5rem;
    }
}
@media (max-width: 290px) {
    .is-hidden-xxs {
        display: none;
    }
}
</style>
