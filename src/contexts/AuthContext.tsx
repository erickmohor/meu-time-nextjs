'use client'
import { createContext, useContext } from 'react'
import { destroyCookie, setCookie } from 'nookies'

import { api } from '@/services/api'
import * as auth from '../services/auth'


interface IAuthProvider {
  children?: React.ReactNode
}

interface ISignInData {
  signIn(data: auth.ISignInRequestData): Promise<any>
  signOut(): void
}

export const AuthContext = createContext<ISignInData>({} as ISignInData)

export function AuthProvider({ children }: IAuthProvider) {

  async function signIn({ apiKey }: auth.ISignInRequestData) {
    const response: any = await auth.signIn({
      apiKey
    })

    if (response?.errors?.token) {
      return { error: 'API Key inválida'}
    }

    if (response?.response?.account) {
      setCookie(undefined, 'nextauth.api.key', apiKey, {
        maxAge: 60 * 60 * 24 * 7, // 7 days
      })
    }

    api.defaults.headers['x-rapidapi-key'] = apiKey

    location.href = '/'
  }

  async function signOut() {
    destroyCookie(undefined, 'nextauth.api.key')

    location.href = '/'
  }

  return (
    <AuthContext.Provider value={{ signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)

  return context
}
