import { api } from './api'

// import { countriesMock } from '@/mocks/countriesMock'

export async function getCountries() {

  // return countriesMock

  try {
    const { data, status } = await api.get('/countries')
      
    if (status === 200 && data?.response) {
      return data.response
    }
  } catch (error) {
    console.log(error)
    return []
  }

}