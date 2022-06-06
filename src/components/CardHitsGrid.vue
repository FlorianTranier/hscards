<script setup lang="ts">
import { results, selectedCard } from '../stores/cardStore'
import { getCardImageUrlById } from '../services/search/entities/CardHit'

</script>

<template>
  <div>
    <div id="grid">
      <div
        v-for="card in results"
        :key="card.id"
        class="cardHit"
        @click="selectedCard = card"
      >
        <div
          class="picture"
        >
          <img
            :src="getCardImageUrlById(card.id)"
            alt=""
          >
        </div>

        <div class="name">
          {{ card.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
#grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(150px, 100%), 1fr));
  grid-gap: 2rem;
}

.cardHit {
  cursor: pointer;
}

.picture > img {
  width: 100%;
}
</style>