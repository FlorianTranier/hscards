<script setup lang="ts">
import { typesFilter } from '../stores/searchFilterStore'
import { ref, watchEffect } from 'vue'
import { searchCards } from '../services/search/search'
import { results } from '../stores/cardStore'
import { view, ViewType } from '../stores/layoutStore'
import SearchFilterMultiSelect from './SearchFilterMultiSelect.vue'
import { EnumHelpers } from '../helpers/EnumHelpers'
import { CardType } from '../enums/CardType'

const searchLanguage = ref('fr')
const searchValue = ref('')
const searchOffset = ref(0)
const displayTypeFilter = ref(false)

watchEffect(() => {
  searchCards(searchLanguage.value, searchValue.value, 0, typesFilter.value).then(data => results.value = data.hits )
  searchOffset.value = 0
})

const switchViewType = () =>
  view.value = view.value === ViewType.GRID ? ViewType.LIST : ViewType.GRID

const switchLanguage = () =>
  searchLanguage.value = searchLanguage.value === 'fr' ? 'en' : 'fr'

window.onscroll = () => {
  let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight + 200 >= document.documentElement.offsetHeight
  console.log(document.documentElement.scrollTop, window.innerHeight, document.documentElement.offsetHeight)
  if (bottomOfWindow) {
    searchOffset.value += 20
    searchCards(searchLanguage.value, searchValue.value, searchOffset.value, typesFilter.value).then(data => results.value.push(...data.hits) )
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
            class="icons inverted"
          >
          <img
            v-show="view === ViewType.LIST"
            src="../assets/list.svg"
            alt=""
            class="icons inverted"
          >
        </button>
        <button
          class="viewButton"
          @click="switchLanguage"
        >
          <img
            v-show="searchLanguage === 'fr'"
            src="../assets/fr_flag.svg"
            alt=""
            class="icons"
          >
          <img
            v-show="searchLanguage === 'en'"
            src="../assets/uk_flag.svg"
            alt=""
            class="icons"
          >
        </button>
      </div>

      <div id="filters">
        <button
          :class="{button__active: displayTypeFilter}"
          @click="displayTypeFilter = !displayTypeFilter"
        >
          <span>Type</span>
          <img
            src="../assets/arrow-bottom.svg"
            alt=""
            class="icons inverted"
          >
        </button>
        <SearchFilterMultiSelect
          v-show="displayTypeFilter"
          class="filter"
          :values="EnumHelpers.getNames(CardType)"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

#wrapper {
  display: grid;
  max-width: 100vw;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 2fr .1fr;
  grid-column-gap: 1rem;
  grid-row-gap: .4rem;
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

#filters {
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  button {
    display: flex;
    border-radius: 1em;
    gap: .5em;
    padding: .5em;
    background-color: inherit;
    color: white;
    border: .2em solid white;
    cursor: pointer;

    >img {
      width: 1.2em;
      margin: auto;
    }

    &.button__active {
      background-color: var(--secondary-bg-color);
    }


  }
}

.inverted {
  filter: invert(1);
}

.filter {
  position: absolute;
  top: 100%;
  width: 100%;
}

</style>