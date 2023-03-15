import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const PageTeams = () => {
  const teams = useSelector(state => state.teams)
  const [rating, setRating] = useState([])
  const [filter, setFilter] = useState("all")
  const navigate = useNavigate()
  const options = [
      {
          id: 1,
          value: "all",
          title: "Все команды"
      },
      {
          id: 2,
          value: "europe",
          title: "Европа"
      },
      {
          id: 3,
          value: "asia",
          title: "Азия"
      },
      {
          id: 4,
          value: "africa",
          title: "Африка"
      },
      {
          id: 5,
          value: "south america",
          title: "Южная Америка"
      },
      {
          id: 6,
          value: "north america",
          title: "Северная Америка"
      },
      {
          id: 7,
          value: "oceania",
          title: "Океания"
      },
  ]

  const [filterTeams, setFilterTeams] = useState(rating)
  useMemo(() => {
      const filtered = rating.filter(team => filter === "all" ? rating : team.continent.includes(filter))
      setFilterTeams(filtered)
  }, [filter, rating])

  useEffect(() => {
      setRating([...teams.europe, ...teams.asia, ...teams.africa, ...teams.northAmerica, ...teams.southAmerica, ...teams.oceania])
  }, [teams.europe,teams.asia,teams.africa,teams.northAmerica,teams.southAmerica,teams.oceania])

  rating.map(team => {
      return team.rating = team.rat.reduce((a,b) => a + b, 0)
  })
  rating.sort((a,b) => b.rating - a.rating)

  const goToTeam = (team) => {
    navigate(`/teams/${team.name}`, {state: {team}})
  }

  return (
    <>
      <select onChange={(e) => setFilter(e.target.value)} className="teams__select" name="" id="">
            {options.map(option => {
                return (
                    <option key={option.id} value={option.value}>{option.title}</option>
                )
            })}
      </select>

      <div className="teams">
        {filterTeams.map((team) => {
          return (
            <div onClick={() => goToTeam(team)} key={team.id} className="team">
              <img src={team.flag} alt="" className="team__flag" />
              <div className="team__name">{team.name}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};
