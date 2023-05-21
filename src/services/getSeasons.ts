import { api } from './api'

// import { seasonsMock } from '@/mocks/seasonsMock'

export async function getSeasons() {

  // return seasonsMock

  try {
    const { data, status } = await api.get('/leagues/seasons')
      
    if (status === 200 && data?.response) {
      return data.response
    }
  } catch (error) {
    console.log(error)
    return []
  }

}