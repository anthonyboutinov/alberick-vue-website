<template>
<div>
  <address class="margin-bottom">
    <span v-html="contact.address_line_1"></span>
    <span v-if="contact.address_line_2">
      <br>
      <span v-html="contact.address_line_2"></span>
    </span>
    <br>
    <small class="has-text-grey" v-html="contact.extra" v-if="contact.extra"></small>
  </address>
  <a v-if="contact.map_href" :href="contact.map_href" target="_blank" class="button is-rounded is-primary is-outlined margin-bottom-medium">Map</a>
  <div>

    <span v-if="contact.telephone">Tel:
      <a :href="telephoneHref">{{contact.telephone}}</a>
    </span>

    <span v-if="contact.fax">
      <br>Fax: {{contact.fax}}</span>

    <span v-if="contact.email">
      <br>E-mail:
      <a :href="'mailto:' + contact.email">{{contact.email}}</a>
      <span v-if="contact.email_extra" v-html="contact.email_extra"></span>
    </span>

    <span v-if="contact.social_links">
      <br>
      <a class="icon is-medium margin-top" :href="socialLink.href" target="_blank" v-for="socialLink in contact.social_links" v-bind:key="socialLink.slug.value" :title="socialLink.slug.label">
        <i class="fab fa-2x" :class="'fa-' + socialLink.slug.value"></i>
        <span class="sr-only">{{socialLink.slug.label}}</span>
      </a>
    </span>
  </div>
</div>
</template>

<script>
export default {
  props: {
    contact: Object,
  },
  computed: {
    telephoneHref() {
      return 'tel:' + this.contact.telephone.replace(/[^0-9*#+]/g, "");
    },
  }
}
</script>
