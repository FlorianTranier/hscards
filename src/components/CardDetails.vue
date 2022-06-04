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
      <div class="title">
        {{ selectedCard?.name ?? '' }}
      </div>

      <div class="info">
        <span class="attribute">{{ selectedCard.attribute }}</span>
        <span v-if="selectedCard.attribute && selectedCard.type"> / </span>
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
  grid-template-rows: 1fr 0.2fr 0.2fr auto 0.2fr;
  grid-template-columns: auto;
  align-items: flex-start;
  justify-content: center;
  background-color: #001020;
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

#close-btn {
  align-self: center;
  justify-self: center;
  padding: 2vh 0;
  width: 40%;
  outline: 2px solid white;
  cursor: pointer;
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