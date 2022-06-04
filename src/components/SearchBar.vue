<script setup lang="ts">
import { searchCards } from '../services/search/search'
import { ref, watchEffect } from 'vue'
import { results } from '../stores/cardStore'

const searchValue = ref('')

watchEffect(() => {
  searchCards(searchValue.value).then(data => results.value = data.hits )
})
</script>

<template>
  <input
    id="searchBar"
    v-model="searchValue"
    type="text"
    name="searchBar"
    placeholder="Search cards here"
    autofocus
  >
</template>

<style scoped>

#searchBar {
  padding: 1rem;
  font-size: 1.2rem;
  font-style: italic;
  text-align: center;
  border-radius: 10px;
}

</style>