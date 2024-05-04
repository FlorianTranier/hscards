import axios from 'axios'
import { SearchCardsResponse } from './responses/SearchCardsResponse'

const BASE_URL = 'https://search.ftranier.fr/'

const client = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Authorization': 'Bearer YTzCv9hB6eb823203acda2e94f42e8c3b1f77703f72f3cc62fd4edec819b2c0b1f52e887'
  }
})

export const searchCards = async (searchLanguage: string, query: string, offset = 0, races: string[], techLevels: number[]): Promise<SearchCardsResponse> => {
  let url = `indexes/hs-cards-${searchLanguage}/search?q=${query}&offset=${offset}&limit=40&filter=set="BATTLEGROUNDS"`
  
  if (races.length > 0) {
    url += `AND (${races.map(type => `races = "${type}"`).join(' AND ')})`
  }
  
  if (techLevels.length > 0) {
    if (url.includes('filter')) {
      url += ` AND (${techLevels.map(attribute => `techLevel = "${attribute}"`).join(' OR ')})`
    } else {
      url += `&filter=(${techLevels.map(attribute => `techLevel = "${attribute}"`).join(' OR ')})`
    }
  }
  return <SearchCardsResponse>(await client.get(url)).data
}