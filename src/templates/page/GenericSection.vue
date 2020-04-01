<template>
<section class="section" :class="section.classes" :style="_style">
  <div class="container">
    <h3 class="title is-4" v-html="section.title" v-if="titleIsOutsideColumn"></h3>
    <div class="columns">
      <div class="column is-9">
        <h3 class="title is-4" v-html="section.title" v-if="titleIsInsideColumn"></h3>
        <div class="content" v-html="section.content" v-if="section.content"></div>
      </div>
      <aside-component class="column is-3" v-if="section.aside === true && section.aside_elements" v-bind:aside_elements="section.aside_elements" :class="section.aside_classes" :style="section.aside_style" />
    </div>
    <div class="columns is-multiline is-variable is-2" v-if="section.menu_items && section.menu_items.length">
      <div class="column is-6" v-for="item in section.menu_items" v-bind:key="item.slug">
        <menu-item :slug="item.slug" :title="item.title" :hasradius="true" />
      </div>
    </div>
    <div class="columns is-multiline" v-if="section.panels && section.panels.length" style="margin-top:1rem;">
      <div class="column is-6" v-for="(item, index) in section.panels" v-bind:key="index">
        <panel-component v-bind:panel="item" />
      </div>
    </div>
  </div>
</section>
</template>

<script>
import AsideComponent from './Aside.vue';
import PanelComponent from './Panel.vue';
import MenuItem from '../menu/MenuItem.vue';

export default {
  components: {
    AsideComponent,
    MenuItem,
    PanelComponent,
  },
  props: {
    section: {
      type: Object,
      // classes
      // style
      // title (HTML)
      // content (HTML)
      // aside_elements []:
      //    {type, label, hint, href}
      // aisde_classes
      // aside_style
      // panels []:
      //  {title, content, image, image_class, image_style}
    }
  },
  computed: {
    titleIsOutsideColumn() {
      return this.section.title && !(this.section.aside && this.section.aside_elements);
    },
    titleIsInsideColumn() {
      return this.section.title && this.section.aside && this.section.aside_elements;
    },
    _style() {
      return this.section.style + (!this.section.title ? 'padding-top:0;' : '');
    },
  }

}
</script>
