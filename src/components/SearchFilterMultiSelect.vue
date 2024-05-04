<script setup lang="ts">

import { FilterType } from '../enums/FilterType'
import { ref, watchEffect } from 'vue'
import { racesFilter, techLevelsFilter } from '../stores/searchFilterStore'

const props = defineProps<{
  filterType: FilterType
  values: string[]
}>()

const checkedTypes = ref<string[]>([])

watchEffect(() => {
  switch (props.filterType) {
  case FilterType.RACE: racesFilter.value = checkedTypes.value
    break
  case FilterType.TECHLEVEL: techLevelsFilter.value = checkedTypes.value.map(value => value.length)
  }
})

</script>

<template>
  <div>
    <div id="wrapper">
      <div
        v-for="value in values"
        :key="value"
        class="checkbox"
      >
        <input
          :id="value"
          v-model="checkedTypes"
          type="checkbox"
          :value="value"
        >
        <label :for="value">
          {{ value }}
        </label>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
#wrapper {
  display: grid;
  position: relative;
  grid-template-columns: repeat(auto-fit, minmax(10em, 20em));
  background-color: var(--secondary-bg-color);
  justify-content: center;
  padding: 1em;
  border-radius: 1rem;
  grid-column-gap: 1em;
  grid-row-gap: .3em;
}

.checkbox {
  text-align: left;
  font-size: 1.05em;
  border: solid 1px var(--accent-color);
  border-radius: 1rem;
  background-color: black;

  >label {
    display: flex;
    cursor: pointer;
    border-radius: 1rem;
    padding: .2em .6em;
  }

  > input {
    display: none;
  }

  input[type=checkbox]:checked + label {
    background-color: var(--accent-color);
  }
}

</style>