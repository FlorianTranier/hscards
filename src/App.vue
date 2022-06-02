<script setup lang="ts">
import SearchBar from './components/SearchBar.vue'
import CardHits from './components/CardHits.vue'

</script>

<template>

    <main>
      <SearchBar />
      <CardHits />
    </main>

</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Dosis:wght@300;400;500&display=swap');

#app {
  font-family: 'Dosis', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

:root {
  background-color: rgba(0, 0, 0, 0.85);
  color: #ffffff;
}

main {
  margin: 5vh 5vw;
  display: grid;
  grid-template-rows: 5vh 1fr;
  row-gap: 2vh;
}

@media only screen and (min-width: 1280px) {
  main {
    margin: 5vh 35vw;
  }
}

</style>
