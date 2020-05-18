<template>
  <div class="article">
    <h1>{{ article.slug }}</h1>
  </div>
</template>

<script>
export default {
  name: 'SingleArticle',
  props: {
    article: {
      type: Object,
      required: true
    }
  }
}
</script>
