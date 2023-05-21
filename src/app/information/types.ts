export interface CountryProps {
  name: string,
  code: string,
  flag: string
}

export interface LeagueProps {
  league: {
    id: number,
    name: string,
    type: string,
    logo: string
  },
  country: {
    name: string,
    code: string,
    flag: string
  },
  seasons: Array<
    {
      year: number,
      start: string,
      end: string,
      current: boolean,
      coverage: {
        fixtures: {
          events: boolean,
          lineups: boolean,
          statistics_fixtures: boolean,
          statistics_players: boolean
        },
        standings: boolean,
        players: boolean,
        top_scorers: boolean,
        top_assists: boolean,
        top_cards: boolean,
        injuries: boolean,
        predictions: boolean,
        odds: boolean
      }
    }
  >
}

export interface TeamProps {
  team: {
    id: number | null,
    name: string | null,
    code: string | null,
    country: string | null,
    founded: number | null,
    national: boolean | null,
    logo: string | null,
  },
  venue: {
    id: number | null,
    name: string | null,
    address: string | null,
    city: string | null,
    capacity: number | null,
    surface: string | null,
    image: string | null,
  }
}

export interface PlayerProps {
  player?: {
    id?: number,
    name?: string,
    firstname?: string,
    lastname?: string,
    age?: number,
    birth?: {
      date?: string,
      place?: string,
      country?: string
    },
    nationality?: string,
    height?: string,
    weight?: string,
    injured?: boolean,
    photo?: string
  },
  statistics?: [
    {
      team?: {
        id?: number,
        name?: string,
        logo?: string
      },
      league?: {
        id?: number,
        name?: string,
        country?: string,
        logo?: string,
        flag?: string,
        season?: number
      },
      games?: {
        appearences?: number,
        lineups?: number,
        minutes?: number,
        number?: null,
        position?: string,
        rating?: string,
        captain?: boolean
      },
      substitutes?: {
        in?: number,
        out?: number,
        bench?: number
      },
      shots?: {
        total?: number,
        on?: number
      },
      goals?: {
        total?: number,
        conceded?: null,
        assists?: number,
        saves?: number
      },
      passes?: {
        total?: number,
        key?: number,
        accuracy?: number
      },
      tackles?: {
        total?: number,
        blocks?: number,
        interceptions?: number
      },
      duels?: {
        total?: null,
        won?: null
      },
      dribbles?: {
        attempts?: number,
        success?: number,
        past?: null
      },
      fouls?: {
        drawn?: number,
        committed?: number
      },
      cards?: {
        yellow?: number,
        yellowred?: number,
        red?: number
      },
      penalty?: {
        won?: number,
        commited?: null,
        scored?: number,
        missed?: number,
        saved?: null
      }
    }
  ]
}


export interface TeamsStatisticsProps {
  league?: {
    id: number,
    name: string,
    country: string,
    logo: string,
    flag: string,
    season: number
  },
  team?: {
    id: number,
    name: string,
    logo: string,
  },
  form?: string,
  fixtures?: {
    played: {
      home: number,
      away: number,
      total: number
    },
    wins: {
      home: number,
      away: number,
      total: number
    },
    draws: {
      home: number,
      away: number,
      total: number
    },
    loses: {
      home: number,
      away: number,
      total: number,
    }
  },
  goals: {
    for: {
      total: {
        home: number,
        away: number,
        total: number,
      },
      average: {
        home: string,
        away: string,
        total: string,
      },
      minute: {
        '0-15': {
          total: number | null,
          percentage: string | null
        },
        '16-30': {
          total: number | null,
          percentage: string | null
        },
        '31-45': {
          total: number | null,
          percentage: string | null
        },
        '46-60': {
          total: number | null,
          percentage: string | null
        },
        '61-75': {
          total: number | null,
          percentage: string | null
        },
        '76-90': {
          total: number | null,
          percentage: string | null
        },
        '91-105': {
          total: number | null,
          percentage: string | null
        },
        '106-120': {
          total: number | null,
          percentage: string | null
        }
      }
    },
    against: {
      total: {
        home: number,
        away: number,
        total: number,
      },
      average: {
        home: string,
        away: string,
        total: string,
      },
      minute: {
        '0-15': {
          total: number | null,
          percentage: string | null
        },
        '16-30': {
          total: number | null,
          percentage: string | null
        },
        '31-45': {
          total: number | null,
          percentage: string | null
        },
        '46-60': {
          total: number | null,
          percentage: string | null
        },
        '61-75': {
          total: number | null,
          percentage: string | null
        },
        '76-90': {
          total: number | null,
          percentage: string | null
        },
        '91-105': {
          total: number | null,
          percentage: string | null
        },
        '106-120': {
          total: number | null,
          percentage: string | null
        }
      }
    }
  },
  biggest?: {
    streak: {
      wins: number,
      draws: number,
      loses: number,
    },
    wins: {
      home: string,
      away: string,
    },
    loses: {
      home: string,
      away: string,
    },
    goals: {
      for: {
        home: number,
        away: number,
      },
      against: {
        home: number,
        away: number,
      }
    }
  },
  clean_sheet?: {
    home: number,
    away: number,
    total: number,
  },
  failed_to_score?: {
    home: number,
    away: number,
    total: number,
  },
  penalty?: {
    scored: {
      total: number,
      percentage: string,
    },
    missed: {
      total: 0,
      percentage: string,
    },
    total: number,
  },
  lineups?: [
    {
      formation: string,
      played: number,
    },
    {
      formation: string,
      played: number,
    },
    {
      formation: string,
      played: number,
    },
    {
      formation: string,
      played: number
    }
  ],
  cards?: {
    yellow: {
      '0-15': {
        total: number | null,
        percentage: string | null
      },
      '16-30': {
        total: number | null,
        percentage: string | null
      },
      '31-45': {
        total: number | null,
        percentage: string | null
      },
      '46-60': {
        total: number | null,
        percentage: string | null
      },
      '61-75': {
        total: number | null,
        percentage: string | null
      },
      '76-90': {
        total: number | null,
        percentage: string | null
      },
      '91-105': {
        total: number | null,
        percentage: string | null
      },
      '106-120': {
        total: number | null,
        percentage: string | null
      }
    },
    red: {
      '0-15': {
        total: number | null,
        percentage: string | null
      },
      '16-30': {
        total: number | null,
        percentage: string | null
      },
      '31-45': {
        total: number | null,
        percentage: string | null
      },
      '46-60': {
        total: number | null,
        percentage: string | null
      },
      '61-75': {
        total: number | null,
        percentage: string | null
      },
      '76-90': {
        total: number | null,
        percentage: string | null
      },
      '91-105': {
        total: number | null,
        percentage: string | null
      },
      '106-120': {
        total: number | null,
        percentage: string | null
      }
    }
  }
}

export interface LineUpProps {
  formation: string,
  played: number,
}