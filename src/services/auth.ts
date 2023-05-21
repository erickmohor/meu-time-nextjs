import { api } from './api'


export interface ISignInRequestData {
  apiKey: string
}

export function signIn(data: ISignInRequestData): Promise<any> {
  const { apiKey } = data
  api.defaults.headers['x-rapidapi-key'] = apiKey

  return new Promise((resolve, reject) => {
    api.get('/status')
      .then((response) => resolve(response.data))
      .catch((error) => {
        console.log('auth login error: ', error)
        reject(error)
      })
  })
}