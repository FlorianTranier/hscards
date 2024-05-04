export interface CardHit {
  name: string
  set: string
  cardClass: string
  dbfId: number
  health: number
  id: string
  type: string
  attack: number
  cost: number
  text: string
  race: string
  races: string[]
  referencedTags: string[]
  battlegroundsPremiumDbfId: number
  techLevel: number
  isBattlegroundsPoolMinion: boolean
}

export const getCardImageUrlById = (id: string) => `https://art.hearthstonejson.com/v1/render/latest/enUS/256x/${id}.png`