<template>
  <b-container v-if="article" class="article">
    <div class="d-flex mb-3">
      <h1>{{ article.title }}</h1>
      <div class="red-line"></div>
    </div>
    <p>{{ article.p2 }}</p>
    <img
      style="max-width: 60%"
      class="w-100 my-5 align-self-center"
      :src="article.imageLink"
      alt="image"
    />
    <p>{{ article.p1 }}</p>
  </b-container>
</template>

<script>

export default {
  name: 'SingleArticle',
  computed: {
    articleSlug() {
      return this.$route.params.slug
    },
    article() {
      return this.$store.getters.articles.find(article => article.slug === this.articleSlug)
    }
  }
}
</script>

<style lang="scss">
@import '@/styles/colors';

.article {
  display: flex;
  flex-direction: column;
}

.red-line {
  border-bottom: solid 2px $dark-red;
  transform: translate(10px, -18px);
  flex-grow: 1;
}
</style>
