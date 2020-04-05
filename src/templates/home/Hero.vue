<template>
<section class="hero is-fullheight is-light" id="home-hero">
  <div class="hero-body">
    <div class="container">
      <div class="columns align-items-center">
        <div class="column is-6">
          <figure id="hero-logo">
            <div class="image">
              <img src="@/assets/alberick-medisch-centrum-primary-logo-centered.svg" alt="Medisch Centrum Alberick Logo SVG">
            </div>
          </figure>
          <div class="title is-2">Medisch Centrum</div>
          <div class="title is-1">Alberick</div>
          <!-- <router-link to="#start" class="button is-primary is-large is-rounded is-hidden-mobile">Begin</router-link> -->
        </div>
        <div class="column is-6 is-hidden-mobile">
          <figure class="image" id="hero-image">
            <img src="@/assets/home/two-doctors.svg" alt="">
          </figure>
        </div>
      </div>
      <p class="is-hidden-tablet" v-html="about.content"></p>
    </div>
  </div>
  <div class="hero-foot has-text-grey-light is-hidden-mobile is-hidden-tablet-only is-hidden-desktop-only">
    <small>Scroll om meer te leren</small>
    <div class="icon-circle-thick"></div>
  </div>
</section>
</template>

<script>
export default {
  props: {
    about: Object
  }
}
</script>

<style lang="scss">
#home-hero {
    background-image: url('../../assets/home/hero-bg-blobs.svg'), linear-gradient(180deg, #ffffff 0%, #fbfbfb 100%);
    background-position: center, center;
    background-repeat: no-repeat, no-repeat;
    background-size: 130vh, cover;

    .columns {
        text-align: center;

        @media (min-width: $desktop) {
            background-size: max(72rem, 160vh), cover;
            text-align: left;
        }
    }

    .title {
        font-weight: 800;
        color: #222222;
    }
    .title.is-2 {
        font-size: 7.9vw;
        margin-bottom: 0;
        @media (min-width: $desktop) {
            font-size: 2rem;
        }
        @media (min-width: $widescreen) {
            font-size: 2.6666666667rem;
        }
    }
    .title.is-1 {
        font-size: 17vw;
        line-height: 19vw;
        @media (min-width: $desktop) {
            line-height: 5.2rem;
            font-size: 5rem;
        }
        @media (min-width: $widescreen) {
            line-height: 7rem;
            font-size: 6rem;
            margin-bottom: 6.25rem;
        }
    }
    .hero-foot {
        text-align: center;
        font-size: 1.3125rem;
    }
}

#hero-image {
    width: 48vh;
    margin-left: auto;
    margin-right: -4px;
}

$hero-logo-width: 6.25rem;
$hero-logo-negative-margin: 0.20652173913;
#hero-logo {
    width: $hero-logo-width;
    height: $hero-logo-width;
    margin-bottom: 2rem;
    margin-left: auto;
    margin-right: auto;

    @media (min-width: $tablet) {
        margin-left: 0;
    }

    .image {
        margin: $hero-logo-width * $hero-logo-negative-margin * -1;
        width: $hero-logo-width * (1 + 2 * $hero-logo-negative-margin);
        height: $hero-logo-width * (1 + 2 * $hero-logo-negative-margin);
    }
}

.icon-circle-thick {
    width: 1.2222222222rem;
    height: 1.2222222222rem;
    border-radius: 100%;
    border: 3px solid $grey-light;
    margin: 0.3rem auto 1.5rem;
}
</style>
