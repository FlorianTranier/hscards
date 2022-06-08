<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { searchCards } from '../services/search/search'
import { results } from '../stores/cardStore'
import { view, ViewType } from '../stores/layoutStore'

const searchValue = ref('')
const searchOffset = ref(0)

watchEffect(() => {
  searchCards(searchValue.value).then(data => results.value = data.hits )
  searchOffset.value = 0
})

const switchViewType = () =>
  view.value = view.value === ViewType.GRID ? ViewType.LIST : ViewType.GRID


window.onscroll = () => {
  let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight
  if (bottomOfWindow) {
    searchOffset.value += 20
    searchCards(searchValue.value, searchOffset.value).then(data => results.value.push(...data.hits) )
  }
}

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
          @click="switchViewType"
        >
          <img
            v-show="view === ViewType.GRID"
            src="../assets/grid.svg"
            alt=""
            class="icons"
          >
          <img
            v-show="view === ViewType.LIST"
            src="../assets/list.svg"
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
  max-width: 100vw;
  grid-template-rows: 1fr;
  grid-template-columns: 2fr .1fr;
  grid-column-gap: 1rem;
  align-items: stretch;
  justify-content: stretch;
}

#viewButtons {
  display: flex;
  justify-content: stretch;
  flex-direction: row;
  border-radius: .2rem;
  //outline: .3rem solid var(--accent-color);
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
  display: inline-block;
  padding: 0 .6rem;
  border-radius: 1rem;

  &:focus-visible {
    outline: .2rem solid var(--accent-color);
  }
}

</style>