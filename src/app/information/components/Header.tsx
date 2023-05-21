import { useContext } from 'react'
import { SignOut } from 'phosphor-react'

import { AuthContext } from '@/contexts/AuthContext'


export function Header() {
  const { signOut } = useContext(AuthContext)

  return (
    <header className='w-full h-50 bg-gray-900 flex justify-end items-center py-4 px-10 mb-10'>
      <button
        className="flex justify-center items-center gap-2 w-24 h-12 border-2 border-green-800 text-stone-200 uppercase py-4 mr-10 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
        onClick={() => signOut()}
      >
        Sair
        <SignOut size={20} />
      </button>
    </header>
  )
}