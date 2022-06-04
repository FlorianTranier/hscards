import { Ref, ref } from 'vue'
import { CardHit } from '../services/search/entities/CardHit'

export const results: Ref<CardHit[]> = ref([])

export const selectedCard: Ref<CardHit | undefined> = ref()