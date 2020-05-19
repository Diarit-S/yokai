<template>
  <b-container class="mt-5 px-5">
    <b-row>
      <b-col
        v-for="article in articles"
        :key="article.id"
        sm="12"
        md="6"
        lg="4"
        class="d-flex justify-content-center align-items-center"
      >
        <b-card
          :img-src="article.imageLink"
          img-alt="Image"
          img-top
          no-header
          bg-variant="dark-red"
          class="border-0 mb-5"
        >
          <b-card-body class="p-1">
            <b-card-title>{{ article.title }}</b-card-title>
            <b-card-text>{{ article.p1 }}</b-card-text>
            <b-button
              class="w-100"
              variant="darker-red"
              :to="{ name: 'Article', params: { slug: article.slug } }"
              >DÉCOUVRIR</b-button
            >
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Articles',
  data() {
    return {
      articles: []
    }
  },
  created() {
    axios
      .get('https://raw.githubusercontent.com/Diarit-S/json-test/master/articles.json')
      .then(res => (this.articles = res.data))
  }
}
</script>
