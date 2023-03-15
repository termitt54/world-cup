import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";


export const PageRating = () => {
    const teams = useSelector(state => state.teams)
    const [rating, setRating] = useState([])
    const [filter, setFilter] = useState("all")
    const option = [
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

    useEffect(() => {
        setRating([...teams.europe, ...teams.asia, ...teams.africa, ...teams.northAmerica, ...teams.southAmerica, ...teams.oceania])
    }, [teams.europe,teams.asia,teams.africa,teams.northAmerica,teams.southAmerica,teams.oceania])

    rating.map(team => {
        return team.rating = team.rat.reduce((a,b) => a + b, 0)
    })
    rating.sort((a,b) => b.rating - a.rating) 

    const [filterTeams, setFilterTeams] = useState(rating)
    useMemo(() => {
        const filtered = rating.filter(team => filter === "all" ? rating : team.continent.includes(filter))
        setFilterTeams(filtered)
    }, [filter, rating])

    return (
        <div className="page-rating">
            <select onChange={(e) => setFilter(e.target.value)} className="page-rating__select" name="" id="">
                {option.map(opt => {
                    return (
                        <option key={opt.id} value={opt.value}>{opt.title}</option>
                    )
                })}
            </select>


            <table className="page-rating__table">
                <tbody>
                    <tr>
                        <th>№</th>
                        <th>name</th>
                        <th>1</th>
                        <th>2</th>
                        <th>3</th>
                        <th>4</th>
                        <th>5</th>
                        <th>Rating</th>
                    </tr>
                </tbody>

            {filterTeams.map((team, idx) => {
                return (
                    <tbody key={idx + 1}>
                        <tr>
                            <td>{idx + 1}</td>
                            <td className="page-rating__name">
                                <img className="page-rating__flag" src={team.flag} alt="" />
                                {team.name}</td>
                            <td>{team.rat[0].toLocaleString("en-US", { maximumFractionDigits: 1, minimumFractionDigits: 1 })}</td>
                            <td>{team.rat[1].toLocaleString("en-US", { maximumFractionDigits: 1, minimumFractionDigits: 1 })}</td>
                            <td>{team.rat[2].toLocaleString("en-US", { maximumFractionDigits: 1, minimumFractionDigits: 1 })}</td>
                            <td>{team.rat[3].toLocaleString("en-US", { maximumFractionDigits: 1, minimumFractionDigits: 1 })}</td>
                            <td>{team.rat[4].toLocaleString("en-US", { maximumFractionDigits: 1, minimumFractionDigits: 1 })}</td>
                            <td>{team.rating.toLocaleString("en-US", { maximumFractionDigits: 1, minimumFractionDigits: 1 })}</td>
                        </tr>
                    </tbody>
                )
            })}    
            </table>
        </div>
    )
}