<template>
<section class="section is-medium">
  <div class="container">
    <div class="title is-4 has-text-centered-tablet margin-bottom-large" v-html="section.title"></div>
    <div class="columns is-multiline">
      <div class="column is-4 big-numbers" v-for="(item, index) in section.elements" v-bind:key="index" :class="elementClass(index, section.elements.length)">
        <div v-if="item.value !== '1'">{{item.value}}</div>
        <figure class="image doctor-profile-numbers" v-else>
          <img src="@/assets/home/doctor-profile-generic.svg" alt="Een dokter" v-if="item.icon === 'woman'">
          <img src="@/assets/home/doctor-profile-generic-man.svg" alt="Een dokter" v-if="item.icon === 'man'">
        </figure>
        <div v-html="item.label"></div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  props: {
    section: Object
  },
  methods: {
    elementClass(index, length) {
      if (length % 3 === 0) {
        return null;
      }
      if (length === 5) {
        return index === 3 ? 'is-offset-2' : null;
      }
      if (length === 2 || length === 4) {
        return index % 2 ? null : 'is-offset-2';
      }
      if (length === 7) {
        return index == 6 ? null : 'is-offset-4';
      }
      if (length === 8) {
        return index == 6 ? null : 'is-offset-2';
      }
      return null;
    }
  }
}
</script>

<style lang="scss">
.big-numbers {
    font-size: $size-6;

    & > div:first-child {
        font-size: 3em;
        color: #222222;
        margin-right: 0.5em;

    }

    @media (max-width: $tablet - 1px) {
        display: flex !important;
        flex-direction: row;
        align-items: center;
        padding-top: 0.5em;
        padding-bottom: 0.5em;

        & > div:first-child {
            line-height: 1em;
        }
    }

    @media (min-width: $tablet) {
        margin: 1rem 0;
        text-align: center;
        font-size: $size-5;

        & > div:first-child {
            font-size: 4rem;
            float: none;
            margin-right: 0;
        }
    }
}

.doctor-profile-numbers {
    width: 3em;
    margin: 0 0.75em 0 -0.5em;

    @media (min-width: $tablet) {
        width: 83px;
        margin: 13px auto;
    }
}
</style>
