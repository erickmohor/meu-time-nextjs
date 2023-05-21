import { BarChart } from '@/components/BarChart'
import { ContentContainer } from '@/components/ContentContainer'
import { TeamsStatisticsTable } from '@/components/TeamsStatisticsTable'

import { LineUpProps, TeamsStatisticsProps } from '../types'


interface ITeamsStatistics {
  teamsStatistics: TeamsStatisticsProps | null,
  teamsStatisticsLineUp: LineUpProps[]
}

export function TeamsStatistics({
  teamsStatistics,
  teamsStatisticsLineUp
}: ITeamsStatistics) {
  return (
    <ContentContainer title='Estatísticas do Time'>
      {
        teamsStatistics ? (
          <div>

            <div>
              <TeamsStatisticsTable
                title='Resultados'
                data={teamsStatistics}
              />
            </div>

            {
              teamsStatisticsLineUp?.length > 0 && (
                <div className='mb-16'>
                  <h1 className='text-gray-500 text-2xl mb-5'>
                    Formação mais utilizada
                  </h1>
                  <p className='text-stone-300 text-xl mb-5'>
                    {
                      teamsStatisticsLineUp.map((lineUp, index) => {
                        if (index !== teamsStatisticsLineUp.length - 1) {
                          return (`${lineUp.formation} || `)
                        } else {
                          return (lineUp.formation)
                        }
                      })
                    }
                  </p>
                </div>
              )
            }

            <div className='flex flex-col items-center'>
              <h1 className='text-gray-500 text-2xl mb-5'>
                Gráfico
              </h1>
              {
                teamsStatistics?.goals && (
                  <BarChart goals={teamsStatistics.goals} />
                )
              }
            </div>

          </div>

        ) : (
          <h1 className='text-lg text-stone-300'>Nenhuma estatística encontrada.</h1>
        )

      }

    </ContentContainer>
  )
}