<template>
<section class="section columns-section" :class="section.classes" :style="section.style">
  <div class="container">

    <h3 class="title is-4" v-html="section.title" v-if="section.title"></h3>
    <div class="columns" v-if="section.content">
      <div class="column is-9">
        <div class="content" v-html="section.content" v-if="section.content" :class="{'is-size-5': section.emphasis_on_content}"></div>
      </div>
    </div>

    <div class="columns is-variable is-3 columns-section-columns">

      <div class="column" v-for="(column, index) in section.columns" v-bind:key="index">

        <a :href="column.href" v-if="column.href" target="_blank">
          <column-article-component v-bind:column="column" />
        </a>

        <column-article-component v-bind:column="column" v-else />

      </div>

    </div>
  </div>
</section>
</template>

<script>
import ColumnArticleComponent from "./ColumnArticle.vue";

export default {
  components: {
    ColumnArticleComponent
  },
  props: {
    section: {
      type: Object,
    }
  }
}
</script>

<style lang="scss">
.columns-section-columns {
    align-items: stretch;
}
</style>
