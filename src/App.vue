<script setup lang="ts">
import CardHitsGrid from './components/CardHitsGrid.vue'
import CardDetails from './components/CardDetails.vue'
import SearchBar from './components/SearchBar.vue'
import CardHitsList from './components/CardHitsList.vue'
import HeaderTitle from './components/HeaderTitle.vue'
import { view } from './stores/layoutStore'

</script>

<template>
  <CardDetails id="details" />
  <main>
    <HeaderTitle />
    <SearchBar id="searchComponent" />
    <CardHitsList v-if="view === 'list'" />
    <CardHitsGrid v-if="view === 'grid'" />
  </main>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Dosis:wght@300;400;500&display=swap');

#app {
  font-family: 'Dosis', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  box-sizing: border-box;
}

:root {
  --bg-color: #111111;
  --secondary-bg-color: #093145;
  --accent-color: #0074D9;
  background-color: var(--bg-color);
  color: #ffffff;
  margin: 0;
}

main {
  padding: 1vh 5vw;
  display: grid;
  grid-template-rows: .1fr auto auto;
  align-items: start;
  justify-content: stretch;
  row-gap: 2vh;
}

#searchComponent {
}

#details {
}

@media only screen and (min-width: 1280px) {
  main {
    margin: 5vh 15vw;
  }
}

</style>
