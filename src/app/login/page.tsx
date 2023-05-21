'use client'
import { useState, FormEvent, useContext } from 'react'

import { AuthContext } from '@/contexts/AuthContext'

import { Button } from '@/components/Button'


export default function Login() {
  const [apiKey, setApiKey] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const { signIn } = useContext(AuthContext)

  async function handleSignIn(event: FormEvent) {
    event.preventDefault()

    setIsLoading(true)
    setErrorMessage('')

    if (!apiKey) {
      setIsLoading(false)
      return setErrorMessage('Digite uma API Key')
    }
    
    const response: any = await signIn({apiKey})
    
    if (response?.error) {
      setErrorMessage(response?.error)
    }
    
    setIsLoading(false)
  }
  
  return (
    <div className="h-screen max-h-[1080px] bg-cover bg-[url('../assets/background.png')] flex items-center justify-center">

      <div className='bg-gray-950 bg-opacity-70 flex flex-col md:flex-row w-[400px] md:w-[740px] h-[500px] border-gray-800 border-2 rounded-lg'>
          
        {/* Image */}
        <div className="w-[50%] bg-cover bg-no-repeat bg-[url('../assets/soccer.png')]" style={{opacity: 0.7}}>
        </div>

        {/* Form */}
        <div className='md:w-[50%] p-5 mt-20 text-center space-y-10'>
          {
            errorMessage && (
              <div className='mx-5 mb-5 p-1 bg-red-950 border-[1px] border-red-800 text-red-200'>
                <span>{errorMessage}</span>
              </div>
            )
          }

          <h1 className="mb-5 text-2xl font-bold text-stone-200">
            Meu Time
          </h1>
          <form onSubmit={handleSignIn} className="w-full flex flex-col items-center gap-2">
            <input
              className="bg-slate-800 h-14 appearance-none border-2 border-slate-700 rounded w-full py-2 px-4 text-gray-400 leading-tight focus:outline-none focus:bg-slate-800 focus:border-green-800"
              type="text"
              placeholder="Informe a sua chave da API"
              onChange={event => setApiKey(event.target.value)}
            />
            <Button
              key='submit'
              name='submit'
              text='Entrar'
              disabled={isLoading}
              loading={isLoading}
              type="submit"
            />
          </form>

          <span className='inline-block mt-5 text-stone-200'>
            Não tem uma conta? {' '}
            <a 
              href='https://dashboard.api-football.com/register' 
              target='_blank'
              rel="noreferrer"
              className='underline underline-offset-2 hover:text-green-700 hover:underline'
            >
                Cadastre-se
            </a>
          </span>

        </div>

      </div>

    </div>
  )
}
