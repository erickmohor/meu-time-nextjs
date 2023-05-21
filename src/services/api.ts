import axios from 'axios'
import { parseCookies } from 'nookies'


const { 'nextauth.api.key': apiKey } = parseCookies()

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_FOOTBALL_API_URL
})

api.defaults.headers['x-rapidapi-host'] = 'v3.football.api-sports.io'

if (apiKey) {
  api.defaults.headers['x-rapidapi-key'] = `${apiKey}`
}