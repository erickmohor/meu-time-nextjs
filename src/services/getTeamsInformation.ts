import { api } from './api'

// import { teamsInformationMock } from '@/mocks/teamsInformationMock'

export async function getTeamsInformation(countryName: string, season: string, leagueId: number) {

  // return teamsInformationMock

  try {
    const { data, status } = await api.get(`/teams?season=${season}&country=${countryName}&league=${leagueId}`)
      
    if (status === 200 && data?.response) {
      return data.response
    }
  } catch (error) {
    console.log(error)
    return []
  }

}