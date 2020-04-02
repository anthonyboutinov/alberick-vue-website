<template>
<div class="checkerboard-sections">
  <section class="hero is-fullheight is-light" id="home-hero">
    <div class="hero-body">
      <div class="container">
        <div class="columns align-items-center">
          <div class="column is-6">
            <div id="hero-logo">LOGO</div>
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
        <p class="is-hidden-tablet">
          We are a general practice medical center caring for nearly 11,000 patients in and around Blerick. We provide consultations, examinations, operations and home visits. We also provide services and care via Uw Zorg Online.
        </p>
      </div>
    </div>
    <div class="hero-foot has-text-grey-light is-hidden-mobile is-hidden-tablet-only is-hidden-desktop-only">
      <small>Scroll om meer te leren</small>
      <div class="icon-circle-thick"></div>
    </div>
  </section>
  <section class="section is-medium">
    <a id="start"></a>
    <div class="container is-9">
      <figure class="image is-fillwidth-mobile" style="margin-bottom:0.5rm">
        <img src="@/assets/home/photo-alberick-building.jpg" srcset="@/assets/home/photo-alberick-building.jpg 701w, @/assets/home/photo-alberick-building@2x.jpg 1402w" alt="">
      </figure>
      <router-link to="/contact">
        <div class="has-text-right-tablet" style="margin-bottom:1.5rm">Alberickstraat&nbsp;193, 5922&nbsp;BR,&nbsp;Venlo</div>
      </router-link>
      <p class="is-size-4 is-hidden-mobile">Welkom op de website van de huisartsenpraktijk van het Medisch&nbsp;Centrum&nbsp;Alberick.</p>
    </div>
  </section>
  <section class="section is-medium">
    <div class="container">
      <div class="columns align-items-flex-end">
        <div class="column is-6">
          <figure class="image" id="img-facebook-reactions">
            <img src="@/assets/home/facebook-reactions.svg" alt="Facebook reactions (love, laugh, thumbs up, surprised)" class="is-hidden-mobile">
            <img src="@/assets/home/facebook-reactions-mobile.svg" alt="Facebook reactions (love, laugh, thumbs up, surprised)" class="is-hidden-tablet">
          </figure>
        </div>
        <div class="column is-6">
          <p class="is-size-5">Follow us on Facebook to keep track of our latest news and&nbsp;updates.</p>
          <a href="#" class="button is-rounded is-large is-primary" target="_blank">Go to Facebook</a>
        </div>
      </div>
    </div>
  </section>
  <numbers-component />
  <section class="" style="background-color: #dad5eb">
    <figure class="image map">
      <img src="@/assets/home/map-monochrome.png" srcset="@/assets/home/map-monochrome.png 1440w, @/assets/home/map-monochrome@2x.png 2550w" alt="Map of the area" class="is-hidden-mobile">
    </figure>
    <div class="section">
      <div class="container is-size-5">
        <div class="columns">
          <div class="column is-9">
            We provide general practitioner care for nearly 11,000 patients in and around Blerick.
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="section is-medium is-clipped">
    <div class="container">
      <div class="columns align-items-flex-end is-mobile">
        <div class="column is-7-tablet is-9ish-mobile-woman-waving-hand is-size-5">
          <figure class="image img-woman-waving-hand is-hidden-tablet">
            <img src="@/assets/home/illustration-woman-waving-hand.svg" alt="">
          </figure>
          <p>Tevens werken één of meer dagen in de week nog andere disciplines in onze praktijk: een diëtiste van het
            <a href="#">Groene Kruis</a>, steunkousen-specialisten
            <a href="#">Jolanda</a> en Sandra en podotherapie
            <a href="#">Hermanns</a>.
          </p>
        </div>
        <div class="column is-5-tablet is-hidden-mobile">
          <figure class="image img-woman-waving-hand">
            <img src="@/assets/home/illustration-woman-waving-hand.svg" alt="">
          </figure>
        </div>
      </div>
    </div>
  </section>
  <apotheek-component />
  <logos-component />
</div>
</template>

<script>
import LogosComponent from './Logos.vue'
import ApotheekComponent from './Apotheek.vue'
import NumbersComponent from './Numbers.vue'

export default {
  name: 'Home',
  components: {
    LogosComponent,
    ApotheekComponent,
    NumbersComponent,
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
            font-size: 6.3888888889rem;
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

#hero-logo {
    width: 6.25rem;
    height: 6.25rem;
    line-height: 6.25rem;
    font-size: 0.75em;
    border: 1px solid #aca2cc;
    text-align: center;
    border-radius: 100%;
    color: #aca2cc;
    margin-bottom: 1rem;
    margin-left: auto;
    margin-right: auto;

    @media (min-width: $tablet) {
        margin-left: 0;
    }
}

.icon-circle-thick {
    width: 1.2222222222rem;
    height: 1.2222222222rem;
    border-radius: 100%;
    border: 3px solid $grey-light;
    margin: 0.3rem auto 1.5rem;
}

#img-facebook-reactions {
    width: 65vw;
    margin-bottom: -1em;
    margin-left: 0;
    margin-right: auto;
    @media (min-width: $tablet) {
      margin-bottom: 2em;
        width: 22.75rem;
        margin-top: -4em;
        margin-bottom: -4em;
    }
}

.image.img-woman-waving-hand {
    width: 60vw;

    @media (max-width: $tablet - 1) {
        float: right;
        shape-outside: polygon(100% 0%, 94% 23%, 57% 31%, 45% 66%, 0 78%, 0 100%, 100% 100%);

        position: relative;
        margin-right: -3em;
        margin-bottom: 0;
        margin-top: calc(20vw);
    }

    @media (min-width: $tablet) {
        width: 19.9375rem;
        margin-top: -4rem;
        margin-bottom: -4rem;
    }
}

.image.map {
    padding-top: 50%;
    background-image: url("../../assets/home/map-monochrome.png");
    background-size: cover;

    @media (min-width: $tablet) {
        padding-top: 0;
        // padding-top: 34.7533632287%;
    }
    // & > img {
    //     bottom: 0;
    //     left: 0;
    //     position: absolute;
    //     right: 0;
    //     top: 0;
    // }
}
</style>
