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
      <div class="name">
        {{ selectedCard?.name ?? '' }}
      </div>

      <div
        v-if="selectedCard.level"
        class="level"
      >
        Level/Rank : {{ selectedCard.level }}
      </div>

      <div v-if="selectedCard.archetype">
        Archetype : {{ selectedCard.archetype }}
      </div>

      <div class="info">
        <span class="attribute">{{ selectedCard.attribute }}</span>
        <span v-if="selectedCard.attribute && selectedCard.race"> / </span>
        <span class="race">{{ selectedCard.race }}</span>
        <span v-if="selectedCard.race && selectedCard.type"> / </span>
        <span class="type">{{ selectedCard.type }}</span>
      </div>

      <div class="description">
        {{ selectedCard.desc }}
      </div>
      <div
        v-if="selectedCard.atk || selectedCard.def"
        class="stats"
      >
        <span
          v-if="selectedCard.atk"
          class="atk"
        >ATK : {{ selectedCard.atk }}</span>
        <span v-if="selectedCard.atk && selectedCard.def"> / </span>
        <span
          v-if="selectedCard.def"
          class="def"
        >DEF : {{ selectedCard.def }}</span>
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
  grid-template-rows: 1fr repeat(auto-fit, minmax(0.2fr, 1fr));
  grid-template-columns: auto;
  align-items: flex-start;
  justify-content: center;
  background-color: var(--bg-color);
  padding: 2vh 2vw;
  grid-gap: 2vw;
  grid-row-gap: 2vh;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  overflow-y: auto;
  outline: 2px solid white;
  max-height: 90%;
  min-width: 70%;
}

.picture {

  >img {
    height: 40vh;
  }
}

.name {
  font-size: 1.2rem;
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
  width: 30vw;
  outline: 2px solid white;
  cursor: pointer;
  background-color: inherit;
  transition: background-color 100ms;

  &:hover {
    background-color: var(--accent-color);
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