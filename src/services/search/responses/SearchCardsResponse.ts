import {CardHit} from "../entities/CardHit";

export interface SearchCardsResponse {
  hits: CardHit[],
  limit: number,
  nbHits: number
}