import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Groups } from "../../../../Groups";
import { Shedule } from "../../../../Shedule";
import './index.scss'

export const QualAsia = () => {
    const teams = useSelector(state => state.teams.asia)
    const groups = useSelector((state) => state.quals.asiaGroups);
    const groupOne = useSelector(state => state.shedule.as_group1)
    const groupTwo = useSelector(state => state.shedule.as_group2)
    const groupThree = useSelector(state => state.shedule.as_group3)
    const groupFour = useSelector(state => state.shedule.as_group4)
    const groupFive = useSelector(state => state.shedule.as_group5)
    const groupSix = useSelector(state => state.shedule.as_group6)
    const groupSeven = useSelector(state => state.shedule.as_group7)
    const groupEigth = useSelector(state => state.shedule.as_group8)
    const [shedule, setShedule] = useState([])
    const dispatch = useDispatch()


  
    const sortGroups = JSON.parse(JSON.stringify(groups))
    sortGroups.map(group => group.sort((a,b) => b.gf - a.gf))
    sortGroups.map(group => group.sort((a,b) => b.gd - a.gd))
    sortGroups.map(group => group.sort((a,b) => b.win - a.win))
    sortGroups.map(group => group.sort((a,b) => b.points - a.points))

    let totalGames = sortGroups.map(group => {return group.reduce((a,b) => a + b.game, 0)}).reduce((a,b) => a + b, 0)

    useEffect(() => {
      if(totalGames === 320) {
        const arr = sortGroups.map(group => {return group[0]})
        const toStack = teams.map(team => arr.map(team => team.name).includes(team.name) ? team : null).filter(team => team !== null)
        dispatch({type: "STACK_ASIA", payload: toStack})
      }
    }, [totalGames])
  
    useEffect(() => {
      dispatch({type: "AS_GROUP1", payload: groups[0]})
      dispatch({type: "AS_GROUP2", payload: groups[1]})
      dispatch({type: "AS_GROUP3", payload: groups[2]})
      dispatch({type: "AS_GROUP4", payload: groups[3]})
      dispatch({type: "AS_GROUP5", payload: groups[4]})
      dispatch({type: "AS_GROUP6", payload: groups[5]})
      dispatch({type: "AS_GROUP7", payload: groups[6]})
      dispatch({type: "AS_GROUP8", payload: groups[7]})
    }, [dispatch, groups])
  
  
    useEffect(() => {
      setShedule([groupOne, groupTwo, groupThree, groupFour, groupFive, groupSix, groupSeven, groupEigth])
    }, [groupOne, groupTwo, groupThree, groupFour, groupFive, groupSix, groupSeven, groupEigth])
    return (
      <div className="as_groups">
        <Groups groups={sortGroups} />
        <Shedule shedule={shedule}/>
      </div>
    )
}