import Image from 'next/image'

import { ContentContainer } from '@/components/ContentContainer'

import { CountryProps, LeagueProps, TeamProps } from '../types'


interface SelectedInformationProps {
  country: CountryProps | null,
  season: string | null,
  league: LeagueProps | null,
  team: TeamProps | null
}

export function SelectedInformation({ country, season, league, team }: SelectedInformationProps) {
  return (
    <ContentContainer>
      <div className='flex justify-around items-stretch gap-10 flex-wrap'>

        {
          country?.name ? (
            <div className='flex flex-col gap-2'>
              <h1 className='text-lg text-stone-300'>País:</h1>
              <div className='flex justify-center items-center gap-5'>
                <Image className='rounded' src={country.flag} alt='country flag' width={56} height={56} />
                <span className='text-md text-stone-100'>{country.name}</span>
              </div>

            </div>
          ) : (
            <h1 className='text-lg text-stone-300'>Selecione as opções ao lado</h1>
          )
        }

        {
          season && (
            <div className='flex flex-col gap-2'>
              <h1 className='text-lg text-stone-300'>Temporada: </h1>
              <span className='text-md text-stone-100'>{season}</span>
            </div>
          )
        }

        {
          league && (
            <div className='flex flex-col gap-2'>
              <h1 className='text-lg text-stone-300'>Liga: </h1>
              <span className='text-md text-stone-100'>{league.league.name}</span>
            </div>
          )
        }

        {
          team && (
            <div className='flex flex-col gap-2'>
              <h1 className='text-lg text-stone-300'>Time: </h1>
              <span className='text-md text-stone-100'>{team.team.name}</span>
            </div>
          )
        }

      </div>
    </ContentContainer>
  )

}