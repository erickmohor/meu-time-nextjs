'use client'
import { useState, useEffect, useRef } from 'react'

import { Select } from '@/components/Select'
import { Loading } from '@/components/Loading'
import { Header } from './components/Header'
import { TeamsStatistics } from './components/TeamsStatistics'
import { ContentContainer } from '@/components/ContentContainer'
import { PlayersInformation } from './components/PlayersInformation'
import { SelectedInformation } from './components/SelectedInformation'

import { getSeasons } from '@/services/getSeasons'
import { getLeagues } from '@/services/getLeagues'
import { getPlayers } from '@/services/getPlayers'
import { getCountries } from '@/services/getCountries'
import { getTeamsStatistics } from '@/services/getTeamsStatistics'
import { getTeamsInformation } from '@/services/getTeamsInformation'

import {
  CountryProps,
  LeagueProps,
  LineUpProps,
  PlayerProps,
  TeamProps,
  TeamsStatisticsProps
} from './types'


export default function Information() {
  const [country, setCountry] = useState<CountryProps | null>(null)
  const [countries, setCountries] = useState<CountryProps[]>([])

  const [season, setSeason] = useState<string | null>(null)
  const [seasons, setSeasons] = useState<string[]>([])

  const [league, setLeague] = useState<LeagueProps | null>(null)
  const [leagues, setLeagues] = useState<LeagueProps[]>([])

  const [team, setTeam] = useState<TeamProps | null>(null)
  const [teams, setTeams] = useState<TeamProps[]>([])

  const [teamsStatistics, setTeamsStatistics] = useState<TeamsStatisticsProps | null>(null)
  const [teamsStatisticsLineUp, setTeamsStatisticsLineUp] = useState<LineUpProps[]>([])

  const [players, setPlayers] = useState<PlayerProps[] | null>(null)

  const [isLoadingMenu, setIsLoadingMenu] = useState(false)
  const [isLoadingData, setIsLoadingData] = useState(false)

  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    async function getCountriesAndSeasons() {
      setIsLoadingMenu(true)

      setCountries(await getCountries())
      setSeasons(await getSeasons())

      setIsLoadingMenu(false)
    }

    getCountriesAndSeasons()
  }, [])

  async function handleSelectedCountry(selectedCountryName: string) {
    setIsLoadingMenu(true)

    if (formRef.current !== null) {
      formRef.current.reset()
    }

    setLeague(null)
    setTeam(null)
    setSeason(null)
    setTeamsStatistics(null)
    setLeagues([])
    setPlayers(null)

    const countrySelected = countries.find(country => country.name === selectedCountryName) as CountryProps
    setCountry(countrySelected)

    setIsLoadingMenu(false)
  }

  async function handleGetLeagues(seasonNumber: string) {
    setIsLoadingMenu(true)

    setSeason(seasonNumber)
    if (country?.name && seasonNumber) {
      setLeagues(await getLeagues(country?.name, seasonNumber))
    }

    setIsLoadingMenu(false)
  }

  async function handleSelectedLeague(selectedLeagueId: number) {
    setIsLoadingMenu(true)

    const leagueSelected = leagues.find(league => league.league.id === selectedLeagueId) as LeagueProps
    setLeague(leagueSelected)

    setIsLoadingMenu(false)
  }

  async function handleGetTeams(leagueId: number) {
    setIsLoadingMenu(true)

    if (country?.name && season && leagueId) {
      setTeams(await getTeamsInformation(country.name, season, leagueId))
    }

    setIsLoadingMenu(false)
  }

  async function handleSelectedTeam(selectedTeamId: number) {
    setIsLoadingMenu(true)
    setIsLoadingData(true)

    const teamSelected = teams.find(team => team.team.id === selectedTeamId) as TeamProps
    setTeam(teamSelected)

    setIsLoadingData(false)
    setIsLoadingMenu(false)
  }

  async function handleGetPlayers(teamId: number) {
    setIsLoadingMenu(true)

    if (teamId && season && league?.league?.id) {
      setPlayers(await getPlayers(teamId, season, league.league.id))
    }

    setIsLoadingMenu(false)
  }

  async function handleTeamsStatistics(teamId: number) {
    setIsLoadingMenu(true)

    if (teamId && season && league?.league?.id) {
      const statisticsResponse = await getTeamsStatistics(teamId, season, league.league.id)

      setTeamsStatistics(statisticsResponse)

      let higherPlayedNumber = 0

      let lineUpWithHigherPlayedNumber: LineUpProps[] = []

      await Promise.all(
        statisticsResponse.lineups.map((lineUp: LineUpProps) => {
          if (lineUp.played > higherPlayedNumber) {
            higherPlayedNumber = lineUp.played
          }
        })
      )

      await Promise.all(
        statisticsResponse.lineups.map((lineUp: LineUpProps) => {
          if (lineUp.played === higherPlayedNumber) {
            lineUpWithHigherPlayedNumber.push(lineUp)
          }
        })
      )

      setTeamsStatisticsLineUp(lineUpWithHigherPlayedNumber)
    }

    setIsLoadingMenu(false)
  }


  return (
    <div className="min-h-screen h-full min-w-screen w-screen bg-gradient-to-br from-custom-blue-800 to-custom-blue-700">

      <Header />

      <div className='flex flex-col customInfo:flex-row px-20 justify-start items-start gap-10'>

        <aside className='w-full customInfo:w-1/4'>

          <ContentContainer title='Menu'>

            <Select
              label='País'
              disabled={isLoadingMenu}
              onChange={(event) => handleSelectedCountry(event.target.value)}
            >
              <option value="">Selecione um país</option>
              {countries &&
                countries.map((country: CountryProps) => (
                  <option key={country.name} value={country.name}>{country.name}</option>
                ))
              }
            </Select>

            <form ref={formRef}>
              <Select
                label='Temporada'
                disabled={isLoadingMenu}
                onChange={(event) => handleGetLeagues(event.target.value)}
              >
                <option value="">Selecione uma temporada</option>
                {seasons &&
                  seasons.map((season: string) => (
                    <option key={season} value={season}>{season}</option>
                  ))
                }
              </Select>
            </form>

            <Select
              label='Liga'
              disabled={isLoadingMenu}
              onChange={(event) => {
                handleSelectedLeague(Number(event.target.value))
                handleGetTeams(Number(event.target.value))
              }}
            >
              {
                leagues.length > 0 ? (
                  <>
                    <option value="">Selecione uma liga</option>
                    {leagues &&
                      leagues.map((league: LeagueProps) => (
                        <option key={league.league.id} value={league.league.id}>{league.league.name}</option>
                      ))
                    }
                  </>
                ) : (
                  <option value="">Nenhuma liga encontrada</option>
                )
              }
            </Select>

            <Select
              label='Time'
              disabled={isLoadingMenu}
              onChange={(event) => {
                handleSelectedTeam(Number(event.target.value))
                handleGetPlayers(Number(event.target.value))
                handleTeamsStatistics(Number(event.target.value))
              }}
            >
              {
                teams.length > 0 ? (
                  <>
                    <option value="">Selecione um time</option>
                    {
                      teams &&
                      teams.map((team: TeamProps) => (
                        <option key={team.team.id} value={Number(team.team.id)}>{team.team.name}</option>
                      ))
                    }
                  </>
                ) : (
                  <option value="">Nenhum time encontrado</option>
                )
              }
            </Select>

            {isLoadingMenu && <Loading size='md' />}

          </ContentContainer>

        </aside>

        <main className='w-full customInfo:w-3/4'>

          {/* Selected Information */}
          <SelectedInformation
            country={country}
            season={season}
            league={league}
            team={team}
          />

          {/* Players Information */}
          {
            !isLoadingData &&
            <PlayersInformation
              players={players}
            />
          }


          {/* Teams Statistics */}
          {
            teamsStatistics !== null && !isLoadingData && (
              <TeamsStatistics
                teamsStatistics={teamsStatistics}
                teamsStatisticsLineUp={teamsStatisticsLineUp}
              />
            )
          }

          {
            isLoadingData && (
              <div className='flex justify-center'>
                <Loading size='md' />
              </div>
            )
          }

        </main>

      </div>

    </div>
  )
}