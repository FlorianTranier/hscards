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
  width: 30vw;
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