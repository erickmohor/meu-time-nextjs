import { TableHTMLAttributes } from 'react'

import { TeamsStatisticsProps } from '@/app/information/types'


type TableProps = TableHTMLAttributes<HTMLTableElement> & {
  title: string,
  data: TeamsStatisticsProps,
}

export function TeamsStatisticsTable({ title, data, ...rest }: TableProps) {
  return (
    <div className='mt-2 mb-16'>

      <h1 className='text-gray-500 text-2xl mb-5'>
        {title}
      </h1>

      <table className='w-full' {...rest}>
        
        <thead className='h-12 border-b-[1px] border-gray-700 text-stone-400'>
          <tr className=''>
            <th>Total de Jogos</th>
            <th>Total de Vitórias</th>
            <th>Total de Derrotas</th>
            <th>Total de Empates</th>
          </tr>
        </thead>

        <tbody>
          <tr key={data?.league?.id} className='h-10 border-b-[1px] border-gray-700 text-stone-300'>
            <td>{data?.fixtures?.played.total}</td>
            <td>{data?.fixtures?.wins.total}</td>
            <td>{data?.fixtures?.loses.total}</td>
            <td>{data?.fixtures?.draws.total}</td>
          </tr>
        </tbody>

      </table>

    </div>
  )
}