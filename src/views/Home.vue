<template>
  <b-container style="max-width: 800px" class="d-flex align-items-center flex-column">
    <div class="title-container">
      <h1>Bienvenue parmi les Yokai</h1>
      <div class="red-circle"></div>
    </div>
    <p class="text-center mt-5">
      Les yōkai (妖怪) sont des « esprits », « fantômes », « démons » ou encore « apparitions
      étranges » issus du folklore japonais. Il en existe plus d’une centaine et ils sont souvent
      représentés comme des esprits malfaisant à l’apparence effrayante, malicieux et responsables
      des tracas quotidiens ou inhabituels dont sont victimes les hommes.
    </p>
    <b-button :to="{ name: 'Articles' }" class="mt-5" variant="dark-red"
      >Découvrire le bestaire</b-button
    >
  </b-container>
</template>

<script>
import axios from 'axios'

// @ is an alias to /src

export default {
  name: 'Home',
  components: {},
  methods: {
    async imgSrc() {
      console.log('teeest')
      const url = `http://vimeo.com/api/v2/video/594992609.json`
      const testo = await axios.get(url)
      console.log(testo)
    }
  },
  mounted(){
    this.imgSrc()
  }
}
</script>

<style lang="scss">
@import '@/styles/colors';

.title-container {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 5rem;
  margin-bottom: 5rem;

  .red-circle {
    border-radius: 50%;
    background-color: $dark-red;
    min-width: 150px;
    min-height: 150px;
    position: absolute;
    z-index: -1;
  }
}
</style>
