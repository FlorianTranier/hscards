<script setup lang="ts">
import { selectedCard } from '../stores/cardStore'
import { getCardImageUrlById } from '../services/search/entities/CardHit'

</script>

<template>
  <div>
    <div
      v-if="selectedCard"
      id="outside"
      @click="selectedCard = undefined"
    />
    <div
      v-if="selectedCard"
      id="container"
    >
      <div class="picture">
        <img
          :src="getCardImageUrlById(selectedCard.id)"
          alt=""
        >
      </div>

      <div id="detailsWrapper">
        <div class="name">
          {{ selectedCard?.name ?? '' }}
        </div>

        <div
          v-if="selectedCard.techLevel"
          class="level"
        >
          Level/Rank : {{ selectedCard.techLevel }}
        </div>

        <div v-if="selectedCard.cardClass">
          Class : {{ selectedCard.cardClass }}
        </div>

        <div class="info">
          <span class="race">{{ selectedCard.race }}</span>
          <span v-if="selectedCard.race && selectedCard.type"> / </span>
          <span class="type">{{ selectedCard.type }}</span>
        </div>

        <div class="description">
          {{ selectedCard.text }}
        </div>
        <div
          v-if="selectedCard.attack || selectedCard.health"
          class="stats"
        >
          <span
            v-if="selectedCard.attack"
            class="atk"
          >ATK : {{ selectedCard.attack }}</span>
          <span v-if="selectedCard.attack && selectedCard.health"> / </span>
          <span
            v-if="selectedCard.health"
            class="def"
          >DEF : {{ selectedCard.health }}</span>
        </div>
      </div>

      <div
        id="close-btn"
        @click="selectedCard = undefined"
      >
        FERMER
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

#container {
  display: grid;
  background-color: var(--bg-color);
  grid-template-columns: auto;
  align-items: flex-start;
  justify-content: center;
  padding: 2vh 2vw;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  overflow-y: auto;
  outline: 2px solid white;
  max-height: 90%;
  width: min(40em, 90%);
}

#detailsWrapper {
  background-color: var(--secondary-bg-color);
  border-radius: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  row-gap: .7rem;
}

.picture {
  margin-bottom: 1rem;
  >img {
    height: 40vh;
  }
}

.name {
  font-size: 1.5rem;
  font-style: italic;
}

.description {
  text-align: left;
}

#close-btn {
  position: sticky;
  bottom: 0;
  align-self: center;
  justify-self: center;
  padding: 2vh 0;
  width: 20em;
  outline: 2px solid white;
  cursor: pointer;
  background-color: inherit;
  transition: background-color 100ms;
  margin-top: 1rem;

  &:hover {
    background-color: var(--secondary-bg-color);
  }
}

#outside {
  position: fixed;
  top: 0;
  left: 0;
  background-color: black;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  opacity: 0.5;
}

</style>