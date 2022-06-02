<script setup lang="ts">
import {results} from '../stores/cardStore'

</script>

<template>
  <div id="resultsWrapper">
    <div v-for="card in results" :key="card.id" class="cardHit">
      <div id="picture">
        <img src="https://picsum.photos/200/300" alt="">
      </div>

      <div id="name">{{ card.name }}</div>

      <div id="info">
        <span id="attribute">{{card.attribute}}</span>
        <span v-if="card.attribute && card.type"> / </span>
        <span id="type">{{card.type}}</span>
      </div>

      <div id="description">{{card.desc}}</div>
      <div id="stats" v-if="card.atk || card.def">
        <span id="atk" v-if="card.atk">ATK : {{card.atk}}</span>
        <span v-if="card.atk && card.def"> / </span>
        <span id="def" v-if="card.def">DEF : {{card.def}}</span>
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
  border: 2px solid lightgray;
  padding: 2vh;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, auto);
  grid-row-gap: 2vh;
  align-items: center;

  >#picture {
    grid-row: 1/3;
  }

  >#name {
    font-weight: bold;
  }

  >#description, >#stats {
    grid-column: 1/3;
  }

  >#picture>img {
    height: 15vh;
    margin: auto;
  }
}

</style>