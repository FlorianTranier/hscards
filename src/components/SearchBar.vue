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
          <img
            src="../assets/list.svg"
            alt=""
            class="icons"
          >
        </button>
        <button
          class="viewButton"
          :class="{selected: view === 'grid'}"
          @click="view = 'grid'"
        >
          <img
            src="../assets/grid.svg"
            alt=""
            class="icons"
          >
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

#wrapper {
  display: grid;
  grid-template-rows: 1fr .9fr;
  grid-row-gap: 2rem;
  align-items: stretch;
  justify-content: stretch;
}

#viewButtons {
  display: flex;
  justify-content: stretch;
  flex-direction: row;
  border-radius: .2rem;
  outline: .3rem solid var(--accent-color);
}

.viewButton {
  cursor: pointer;
  background-color: inherit;
  color: inherit;
  border: none;
  width: 100%;

  &.selected {
    background-color: var(--accent-color);
    color: white;
  }

  .icons {
    position: relative;
    height: 2rem;
    display: inline-block;
    filter: invert(100%);
  }
}

#searchBar {
  padding: 1rem;
  font-size: 1.2rem;
  font-style: italic;
  outline: .2rem solid var(--bg-color);
  border-radius: .2rem;

  &:focus-visible {
    outline: .2rem solid var(--accent-color);
  }
}

</style>