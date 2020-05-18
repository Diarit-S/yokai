<template>
  <div class="articles">
    <h1>This is an about page</h1>
    <single-article v-for="article in articles" :key="article.id" :article="article">
    </single-article>
  </div>
</template>

<script>
import jsonArticles from '@/Data/articles.json'

import SingleArticle from './SingleArticle.vue'

export default {
  name: 'Articles',
  components: {
    SingleArticle
  },
  data() {
    return {
      articles: jsonArticles
    }
  }
}
</script>
