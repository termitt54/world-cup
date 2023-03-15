import { useLocation } from "react-router-dom"


export const PageCurrentTeam = () => {
    const { state } = useLocation()
    const team = state.team
    return (
        <div className="current-team">
            <img className="current-team__flag" src={team.flag  } alt="" />
            <div className="current-team__name">{team.name}</div> 
            <div className="current-team__gold">Золото: {team.gold}</div>
            <div className="current-team__serebro">Серебро: {team.serebro}</div>
            <div className="current-team__bronze">Бронза: {team.bronze}</div>
            <div className="current-team__rating">Рейтинг: {team.rating}</div>
        </div>
    )
}