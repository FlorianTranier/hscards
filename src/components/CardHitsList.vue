<script setup lang="ts">
import { results, selectedCard } from '../stores/cardStore'
import { getCardImageUrlById } from '../services/search/entities/CardHit'

</script>

<template>
  <div>
    <div id="resultsWrapper">
      <div
        v-for="card in results"
        :key="card.id"
        class="cardHit"
      >
        <div
          class="picture"
          @click="selectedCard = card"
        >
          <img
            :src="getCardImageUrlById(card.id)"
            alt=""
          >
        </div>

        <div class="name">
          {{ card.name }}
        </div>

        <div
          v-if="card.techLevel"
          class="level"
        >
          Level/Rank : {{ card.techLevel }}
        </div>

        <div v-if="card.cardClass">
          Class : {{ card.cardClass }}
        </div>

        <div class="info">
          <span class="race">{{ card.race }}</span>
          <span v-if="card.race && card.type"> / </span>
          <span class="type">{{ card.type }}</span>
        </div>

        <div
          v-if="card.attack || card.health"
          class="stats"
        >
          <span
            v-if="card.attack"
            class="atk"
          >ATK : {{ card.attack }}</span>
          <span v-if="card.attack && card.health"> / </span>
          <span
            v-if="card.health"
            class="def"
          >DEF : {{ card.health }}</span>
        </div>

        <div class="description">
          {{ card.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

#resultsWrapper {
  display: flex;
  gap: 2vh;
  flex-direction: column;
}

.cardHit {
  border-bottom: 2px solid lightgray;
  padding: 2vh;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(6, auto);
  grid-row-gap: 2vh;
  grid-column-gap: 2vw;
  align-items: center;
  justify-content: center;

  >.picture {
    grid-row: 1/7;
    cursor: pointer;
    padding: 2rem;
    transition: 100ms;

    &:hover, &:focus, &:focus-visible {
      box-shadow: inset 0 0 4rem -2rem #0074D9;
      border-radius: 1rem;
    }
  }

  >.name {
    font-size: 1.2rem;
    font-style: italic;
  }

  >.description {
    text-align: left;
  }

  >.description, >.stats {
    grid-column: 2/3;
  }

  >.picture>img {
    height: 18vh;
    margin: auto;
  }
}

</style>