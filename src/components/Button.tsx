import { ButtonHTMLAttributes } from 'react'

import { Loading } from './Loading'


type InputProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  key: string,
  name: string,
  text: string,
  loading?: boolean,
  variant?: 'primary' | 'secondary'
}

export function Button({ key, name, text, loading = false, ...rest }: InputProps) {
  return (
    <button
      key={key}
      name={name}
      className="w-1/4 mt-4 bg-green-800 text-stone-200 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
      {...rest}
    >
      {loading ? <Loading size='sm' loadingColor='light' /> : text}
    </button>
  )
}