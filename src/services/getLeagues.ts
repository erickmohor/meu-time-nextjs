import { api } from './api'

import { leaguesMock } from '@/mocks/leaguesMock'

export async function getLeagues(countryName: string, season: string) {

  return leaguesMock

  // try {
  //   const { data, status } = await api.get(`/leagues?season=${season}&country=${countryName}`)
      
  //   if (status === 200 && data?.response) {
  //     return data.response
  //   }
  // } catch (error) {
  //   console.log(error)
  //   return []
  // }

}