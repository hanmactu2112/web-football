import React from 'react'
import LeagueListGroup from './top-league/LeagueListGroup'
import LeagueAllListGroup from './all-league/LeagueAllListGroup'

const LeagueList = () => {
  return (
    <div className="flex flex-col w-full">
        <LeagueListGroup />
        <LeagueAllListGroup />
    </div>
  )
}

export default LeagueList