<template>
  <b-container class="article">
    <div class="d-flex">
      <h1>{{ article.title }}</h1>
      <div class="red-line w-100"></div>
    </div>
    <img class="w-100 mb-5" :src="article.imageLink" alt="image" />
    <p>{{ article.p1 }}</p>
  </b-container>
</template>

<script>
import jsonArticles from '@/Data/articles.json'

export default {
  name: 'SingleArticle',
  computed: {
    articleSlug() {
      return this.$route.params.slug
    },
    article() {
      return jsonArticles.find(article => article.slug === this.articleSlug)
    }
  }
}
</script>

<style lang="scss">
@import '@/styles/colors';

.red-line {
  border-bottom: solid 2px $dark-red;
  transform: translate(10px, -18px);
}
</style>
