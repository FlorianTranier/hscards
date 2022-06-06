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
          v-if="card.level"
          class="level"
        >
          Level/Rank : {{ card.level }}
        </div>

        <div v-if="card.archetype">
          Archetype : {{ card.archetype }}
        </div>

        <div class="info">
          <span class="attribute">{{ card.attribute }}</span>
          <span v-if="card.attribute && card.race"> / </span>
          <span class="race">{{ card.race }}</span>
          <span v-if="card.race && card.type"> / </span>
          <span class="type">{{ card.type }}</span>
        </div>

        <div
          v-if="card.atk || card.def"
          class="stats"
        >
          <span
            v-if="card.atk"
            class="atk"
          >ATK : {{ card.atk }}</span>
          <span v-if="card.atk && card.def"> / </span>
          <span
            v-if="card.def"
            class="def"
          >DEF : {{ card.def }}</span>
        </div>

        <div class="description">
          {{ card.desc }}
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