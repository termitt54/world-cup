import React, {useState} from "react";
import { useDispatch} from "react-redux";
import './index.scss'

export const Cart5 = ({teams, setTeams}) => {
    const [dropdown, setDropdown] = useState(false)
    const [pick, setPick] = useState({name: "Выбери команду", flag: ''})
    const dispatch = useDispatch()

    const click = (e) => {
        setDropdown(false);
        setPick(e)

        dispatch({type: "NORTH_AMERICA_CART5", payload: e})
        setTeams(teams.filter(a => a.id !== e.id))
    };

    return (
        <div className="pick">
            <div onClick={() => setDropdown(dropdown === false ? true : false)} className="pick__team">
                {pick.flag === '' ? null : <img className="pick__flag" src={pick.flag} alt="" />}   {pick.name}
            </div>

            <div className={dropdown ? "pick__dropdown_active" : "pick__dropdown"}>
            {teams.map((a) => {
                return (
                    <div key={a.id} onClick={(e) => click(a)} className="pick__dropdown-team">
                         <img className="pick__flag" src={a.flag} alt="" /> {a.name} <span className="rating">{a.rating.toLocaleString("en-US", { maximumFractionDigits: 1, minimumFractionDigits: 1 })}</span>
                    </div>
                );
        })}
            </div>
        </div>
    )
}