import { api } from './api'

// import { teamsStatisticsMock } from '@/mocks/teamsStatisticsMock'

export async function getTeamsStatistics(teamId: number, season: string, leagueId: number) {

  // return teamsStatisticsMock

  try {
    const { data, status } = await api.get(`/teams/statistics?season=${season}&team=${teamId}&league=${leagueId}`)
      
    if (status === 200 && data?.response) {
      return data.response
    }
  } catch (error) {
    console.log(error)
    return []
  }

}