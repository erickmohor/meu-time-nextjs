
import { cookies } from 'next/headers'

import Login from './login/page'
import Information from './information/page'

import { AuthProvider } from '@/contexts/AuthContext'


export default function Home() {
  const isAuthenticated = cookies().has('nextauth.api.key')
  
  return (
    <AuthProvider>
      {
        isAuthenticated ? <Information /> : <Login />
      }
    </AuthProvider>
  )
}