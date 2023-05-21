import { api } from './api'

// import { playersMock } from '@/mocks/playersMock'

export async function getPlayers(teamId: number, season: string, leagueId: number) {

  // return playersMock

  try {
    const { data, status } = await api.get(`/players?season=${season}&team=${teamId}&league=${leagueId}`)
      
    if (status === 200 && data?.response) {
      return data.response
    }
  } catch (error) {
    console.log(error)
    return []
  }

}