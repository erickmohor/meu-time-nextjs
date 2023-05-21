import { PlayersTable } from '@/components/PlayersTable'
import { ContentContainer } from '@/components/ContentContainer'

import { PlayerProps } from '../types'


interface PlayersInformationProps {
  players: PlayerProps[] | null
}

export function PlayersInformation({ players }: PlayersInformationProps) {
  return (
    <>
      {
        players !== null && (
          <ContentContainer title='Jogadores'>
            {
              players.length > 0 ? (
                <PlayersTable
                  data={players}
                />
              ) : (
                <div>
                  <h1 className='text-lg text-stone-300'>Nenhum jogador encontrado.</h1>
                </div>
              )
            }
          </ContentContainer>
        )
      }
    </>
  )
}
