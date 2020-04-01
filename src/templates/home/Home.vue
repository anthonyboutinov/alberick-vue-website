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
            <router-link to="#start" class="button is-primary is-large is-rounded">Begin</router-link>
          </div>
          <div class="column is-6">
            <figure class="image" id="hero-image">
              <img src="@/assets/two-doctors.svg" alt="">
            </figure>
          </div>
        </div>
      </div>
    </div>
    <div class="hero-foot has-text-grey-light">
      <small>Scroll om meer te leren</small>
      <div class="icon-circle-thick"></div>
    </div>
  </section>
  <section class="section is-medium">
    <a id="start"></a>
    <div class="container is-9">
      <figure class="image" style="margin-bottom:0.5rem">
        <img src="@/assets/photo-alberick-building.jpg" srcset="@/assets/photo-alberick-building.jpg 701w, @/assets/photo-alberick-building@2x.jpg 1402w" alt="">
      </figure>
      <div class="has-text-right" style="margin-bottom:1.5rem">Alberickstraat 193, 5922 BR, Venlo</div>
      <p class="is-size-4">Welkom op de website van de huisartsenpraktijk van het Medisch Centrum Alberick.</p>
    </div>
  </section>
  <section class="section is-medium">
    <div class="container">
      <div class="columns align-items-flex-end">
        <div class="column is-6">
          <figure class="image" id="img-facebook-reactions">
            <img src="/images/facebook-reactions.svg" alt="">
          </figure>
        </div>
        <div class="column is-6">
          <p class="is-size-5">Follow us on Facebook to keep track of our latest news and updates.</p>
          <a href="#" class="button is-rounded is-large is-primary" target="_blank">Go to Facebook</a>
        </div>
      </div>
    </div>
  </section>
  <section class="section is-medium">
    <div class="container">
      <div class="title is-4 has-text-centered margin-bottom-large">Bij Medisch Centrum Alberick werken</div>
      <div class="columns is-multiline">
        <div class="column is-4 big-numbers">
          <div>4</div>
          huisartsen
        </div>
        <div class="column is-4 big-numbers">
          <figure class="image" style="width:83px;margin: 13px auto;">
            <img src="/images/doctor-profile-generic.svg" alt="Doctor">
          </figure>
          een waarnemend huisarts
        </div>
        <div class="column is-4 big-numbers">
          <div>9</div>
          doktersassistentes
        </div>
        <div class="column is-4 big-numbers is-offset-2">
          <div>3</div>
          praktijkondersteuners
        </div>
        <div class="column is-4 big-numbers">
          <div>3</div>
          praktijkondersteuner huisarts geestelijke gezondheidszorg
        </div>
      </div>
    </div>
  </section>
  <section class="" style="background-color: #dad5eb">
    <figure class="image">
      <img src="@/assets/map-monochrome.png" srcset="@/assets/map-monochrome.png 1440w, @/assets/map-monochrome@2x.png 2550w" alt="Map of the area">
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
  <section class="section is-medium">
    <div class="container">
      <div class="columns align-items-flex-end">
        <div class="column is-7 is-size-5">
          <p>Tevens werken één of meer dagen in de week nog andere disciplines in onze praktijk: een diëtiste van het <a href="#">Groene Kruis</a>, steunkousen-specialisten <a href="#">Jolanda</a> en Sandra en podotherapie <a href="#">Hermanns</a>.
          </p>
        </div>
        <div class="column is-5">
          <figure class="image" id="img-woman-waving-hand">
            <img src="@/assets/illustration-woman-waving-hand.svg" alt="">
          </figure>
        </div>
      </div>
    </div>
  </section>
  <section class="section is-medium">
    <div class="container">
      <figure class="image margin-bottom-medium" style="width:439px">
        <img src="@/assets/logo-apotheek-pans.png" alt="Apotheek Pans">
      </figure>
      <div class="is-size-5">
        <p>Ook is er een apotheek gevestigd — Service Apotheek Pans.</p>
      </div>
      <a href="#" target="_blank" class="button is-primary is-outlined is-rounded margin-top-medium is-medium">Visit Website</a>
    </div>
  </section>
  <section class="section is-medium">
    <div class="container">
      <div class="columns is-mobile is-multiline justify-content-space-around align-items-center">
        <div class="column is-narrow">
          <figure class="image margin-bottom-medium" style="width:125px;margin-top:2rem;">
            <img src="@/assets/logos/cohesie-logo.png" srcset="@/assets/logos/cohesie-logo.png 125w, @/assets/logos/cohesie-logo@2x.png 250w" alt="Cohesie">
          </figure>
        </div>
        <div class="column is-narrow">
          <figure class="image margin-bottom-medium" style="width:112px">
            <img src="@/assets/logos/hazo24-logo.svg" alt="Hazo24">
          </figure>
        </div>
        <div class="column is-narrow">
          <figure class="image margin-bottom-medium" style="width:229px">
            <img src="@/assets/logos/provico-logo.png" alt="Provico">
          </figure>
        </div>
      </div>
      <div class="columns is-mobile is-multiline justify-content-space-around align-items-center margin-bottom-medium-negate">
        <div class="column is-narrow">
          <figure class="image margin-bottom-medium" style="width:326px">
            <img src="@/assets/logos/thuisartsnl-logo.png" srcset="@/assets/logos/thuisartsnl-logo.png 326w, @/assets/logos/thuisartsnl-logo@2x.png 652w" alt="Thuisarts.NL">
          </figure>
        </div>
        <div class="column is-narrow">
          <figure class="image margin-bottom-medium" style="width:307px">
            <img src="@/assets/logos/uwzorgonline-logo.png" srcset="@/assets/logos/uwzorgonline-logo.png 307w, @/assets/logos/uwzorgonline-logo@3x.png, 614w" alt="Uw Zorg Online">
          </figure>
        </div>
      </div>
    </div>
  </section>
</div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {}
}
</script>

<style lang="scss">
#home-hero {
    background-image: url('/images/hero-bg-blobs.svg'), linear-gradient(180deg, #ffffff 0%, #fefefe 100%);
    background-position: center, center;
    background-repeat: no-repeat, no-repeat;
    background-size: 130vh, cover;

    @media (min-width: $desktop) {
        background-size: max(72rem, 160vh), cover;
    }

    .title {
        font-weight: 800;
        color: #222222;
    }
    .title.is-2 {
        font-size: 2.6666666667rem;
        margin-bottom: 0;
    }
    .title.is-1 {
        font-size: 6.3888888889rem;
        line-height: 7rem;
        margin-bottom: 6.25rem;
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
    margin-bottom: 2rem;
    margin-left: auto;
    margin-right: auto;
    @media (min-width: $tablet) {
        width: 22.75rem;
        margin-top: -4rem;
        margin-bottom: -4rem;
    }
}

#img-woman-waving-hand {
    width: 65vw;
    @media (min-width: $tablet) {
        width: 19.9375rem;
        margin-top: -4rem;
        margin-bottom: -4rem;
    }
}

.big-numbers {
    text-align: center;
    margin: 1rem 0;
    font-size: $size-5;
    & > div:first-child {
        font-size: 4rem;
        color: #222222;
    }
}
</style>
