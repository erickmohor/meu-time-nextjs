import { TableHTMLAttributes } from 'react'
import Image from 'next/image'

import { PlayerProps } from '@/app/information/types'


type TableProps = TableHTMLAttributes<HTMLTableElement> & {
  data: PlayerProps[] | null,
}

export function PlayersTable({ data, ...rest }: TableProps) {
  return (
    <table className='w-full' {...rest}>
      <thead className='h-12 border-b-[1px] border-gray-700 text-stone-400'>
        <tr className='text-sm md:text-lg'>
          <th>Foto</th>
          <th>Nome</th>
          <th>Idade</th>
          <th>Nacionalidade</th>
        </tr>
      </thead>
      <tbody>
        { data &&
          data.map(player => (
            <tr key={player?.player?.id} className='h-20 border-b-[1px] border-gray-700 text-stone-300'>
              <td>
                {
                  player?.player?.photo &&
                  <Image className='rounded-full h-auto max-w-lg mx-auto' src={player?.player?.photo} alt='foto do jogador' width={64} height={64} unoptimized />
                }
              </td>
              <td>{player?.player?.firstname} {player?.player?.lastname}</td>
              <td>{player?.player?.age} anos</td>
              <td>{player?.player?.nationality}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}