export interface CardHit {
  id: number,
  name: string,
  type: string,
  desc: string,
  race: string,
  name_en: string,
  archetype: string,
  atk: number,
  def: number,
  level: number,
  attribute: string
}

export const getCardImageUrlById = (id: number) => `https://files.yucards.ftranier.fr/${id}`