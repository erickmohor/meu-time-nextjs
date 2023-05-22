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
              <h1 className='text-lg text-stone-300 mb-1'>País:</h1>
              <div className='flex flex-col justify-center items-center gap-1'>
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
              <h1 className='text-lg text-stone-300 mb-1'>Temporada: </h1>
              <span className='text-md text-stone-100'>{season}</span>
            </div>
          )
        }

        {
          league && (
            <div className='flex flex-col gap-2'>
              <h1 className='text-lg text-stone-300 mb-1'>Liga: </h1>
              <div className='flex flex-col justify-center items-center gap-1'>
                <Image className='rounded bg-white' src={league.league.logo} alt='country flag' width={42} height={42} unoptimized />
                <span className='text-md text-stone-100'>{league.league.name}</span>
              </div>
            </div>
          )
        }

        {
          team && (
            <div className='flex flex-col gap-2'>
              <h1 className='text-lg text-stone-300 mb-1'>Time: </h1>
              <div className='flex flex-col justify-center items-center gap-1'>
                {
                  team?.team?.logo !== null && (
                    <Image className='rounded' src={team.team.logo} alt='country flag' width={42} height={42} unoptimized />
                  )
                }
                <span className='text-md text-stone-100'>{team.team.name}</span>
              </div>
            </div>
          )
        }

      </div>
    </ContentContainer>
  )

}