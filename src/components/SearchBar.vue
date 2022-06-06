<script setup lang="ts">
import { searchCards } from '../services/search/search'
import { ref, watchEffect } from 'vue'
import { results } from '../stores/cardStore'
import { view } from '../stores/layoutStore'

const searchValue = ref('')

watchEffect(() => {
  searchCards(searchValue.value).then(data => results.value = data.hits )
})
</script>

<template>
  <div>
    <div id="wrapper">
      <input
        id="searchBar"
        v-model="searchValue"
        type="text"
        name="searchBar"
        placeholder="Search cards here"
        autofocus
      >
      <div id="viewButtons">
        <button
          class="viewButton"
          :class="{selected: view === 'list'}"
          @click="view = 'list'"
        >
          LIST
        </button>
        <button
          class="viewButton"
          :class="{selected: view === 'grid'}"
          @click="view = 'grid'"
        >
          GRID
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

#wrapper {
  display: grid;
  grid-template-rows: 1fr .9fr;
  align-items: stretch;
  justify-content: stretch;
}

#viewButtons {
  display: flex;
  justify-content: stretch;
  flex-direction: row;
  border-radius: 0 0 .2rem .2rem;
  border: .1rem solid white;
}

.viewButton {
  cursor: pointer;
  background-color: inherit;
  color: inherit;
  border: none;
  width: 100%;

  &.selected {
    background-color: white;
    color: black;
  }
}

#searchBar {
  padding: 1rem;
  font-size: 1.2rem;
  font-style: italic;
  text-align: center;
  border: .1rem solid white;
  border-bottom: none;
  border-radius: .2rem .2rem 0 0;
}

</style>