<template>
<div id="page" :class="{'alternate-sections': page.highlightAlternateSections}">
  <div v-if="loading" class="loading">
    Loading...
  </div>

  <div v-if="error" class="error">
    {{ error }}
  </div>
  <div v-if="page">
    <div class="page-head">
      <div class="container">
        <h2 class="title is-3 has-text-weight-bold page-title">{{page.title}}</h2>
      </div>
    </div>
    <text-section v-for="(section, index) in page.sections" v-bind:key="index" v-bind:section="section" />
  </div>
</div>
</template>

<script>
import TextSection from './TextSection.vue';

export default {
  components: {
    TextSection,
  },
  props: {

  },
  data() {
    return {
      loading: false,
      page: null,
      error: null,
    }
  },
  created() {
    // fetch the data when the view is created and the data is
    // already being observed
    this.fetchData()
  },
  watch: {
    // call again the method if the route changes
    '$route': 'fetchData'
  },

  // page: {
  //   title: 'Spoed',
  //   highlightAlternateSections: true,
  //   sections: [{
  //       type: 'text',
  //       title: 'Bij levensbedreigende situaties',
  //       content: '<a href="#">Bel 112</a> bij een levensbedreigende situatie als elke seconde telt.',
  //       classes: '',
  //       style: '',
  //       aside: {
  //         classes: '',
  //         style: '',
  //         elements: [{
  //           type: 'button',
  //           label: 'Bel',
  //           hint: '',
  //           href: 'tel:000',
  //         }, ]
  //       }
  //     },
  //     {
  //       type: 'text',
  //       title: 'Binnen kantooruren',
  //       content: 'Voor spoedgevallen tussen 8.00 en 17.00 uur kunt u ons bellen op&nbsp;<a href="#">077-3828182 toets 1</a>. <br>Wilt u voor een spoedvisite meteen aan de assistente aangeven op welk adres de arts moet komen en het telefoonnummer waarop u bereikbaar bent.',
  //       aside: {
  //         elements: [{
  //           type: 'button',
  //           label: 'Bel',
  //           hint: '',
  //           href: 'tel:000',
  //         }, ]
  //       }
  //     },
  //     {
  //       type: 'text',
  //       title: 'Buiten kantooruren',
  //       content: '<p>Avonds vanaf 17.00 uur tot \'s morgens 8.00 uur, in het weekend en tijdens de feestdagen kunt een beroep doen op de Huisartsenpost. U moet altijd eerst bellen op telefoonnummer: <a href="#">0900</a> – <a href="#">8818</a> (<strong>€ 0,15 p.m</strong>).<br>U krijgt een gediplomeerde triage assistente aan de lijn die uw gegevens noteert en ingaat op uw hulpvraag.</p><p>De Huisartsenpost is alleen bedoeld voor spoedgevallen.</p><p>Alle huisartsen in de regio Noord-Limburg werken buiten kantooruren in extra diensten samen op de huisartsenposten in Venlo en Venray. De huisartsenpost is uitsluitend bedoeld voor spoedgevallen \'s avonds, \'s nachts, of het weekend. In alle andere gevallen kunt u de volgende werkdag terecht bij uw eigen huisarts</p><p>Voor uitgebreide informatie over de huisartsenpost klikt u hier. U leest hier waarvoor de huisartsenpost wel of juist niet voor bedoeld is en hoe de huisartsenpost werk.</p>',
  //       aside: {
  //         elements: [{
  //           type: 'button',
  //           label: 'Bel',
  //           hint: '<strong>€ 0,15 p/min</strong>',
  //           href: 'tel:000',
  //         }, ]
  //       }
  //     },
  //   ]
  // }
  // }
  // },
  methods: {
    fetchData() {
      this.error = this.page = null;
      this.loading = true;
      // replace `getPost` with your data fetching util / API wrapper
      // getPost(this.$route.params.id, (err, page) => {
      //   this.loading = false;
      //   if (err) {
      //     this.error = err.toString();
      //   } else {
      //     this.page = page;
      //   }
      // })
    },
  }
}
</script>

<style lang="scss">
.page-head {
    padding: 0 1.5rem;
}
.page-title {
    padding-top: 4rem;
    padding-bottom: 2rem;
}
.alternate-sections {
    & > .section:nth-child(even) {
        background-color: #f8f8f8;
    }
}
</style>
