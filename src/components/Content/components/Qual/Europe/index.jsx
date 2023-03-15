import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Groups } from "../../../../Groups";
import { Shedule } from "../../../../Shedule";
import './index.scss'

export const QualEurope = () => {
    const teams = useSelector(state => state.teams.europe)
    const groups = useSelector((state) => state.quals.europeGroups);
    const groupOne = useSelector(state => state.shedule.ue_group1)
    const groupTwo = useSelector(state => state.shedule.ue_group2)
    const groupThree = useSelector(state => state.shedule.ue_group3)
    const groupFour = useSelector(state => state.shedule.ue_group4)
    const groupFive = useSelector(state => state.shedule.ue_group5)
    const groupSix = useSelector(state => state.shedule.ue_group6)
    const groupSeven = useSelector(state => state.shedule.ue_group7)
    const groupEigth = useSelector(state => state.shedule.ue_group8)
    const groupNine = useSelector(state => state.shedule.ue_group9)
    const groupTen = useSelector(state => state.shedule.ue_group10)
    const groupEleven = useSelector(state => state.shedule.ue_group11)
    const [shedule, setShedule] = useState([])
    const dispatch = useDispatch()


    const sortGroups = JSON.parse(JSON.stringify(groups))
    sortGroups.map(group => group.sort((a,b) => b.gf - a.gf))
    sortGroups.map(group => group.sort((a,b) => b.gd - a.gd))
    sortGroups.map(group => group.sort((a,b) => b.win - a.win))
    sortGroups.map(group => group.sort((a,b) => b.points - a.points))

    let totalGames = sortGroups.map(group => {return group.reduce((a,b) => a + b.game, 0)}).reduce((a,b) => a + b, 0)

    useEffect(() => {
      if(totalGames === 440) {
        const arr = sortGroups.map(group => {return group[0]})
        const toWC = teams.map(team => arr.map(team => team.name).includes(team.name) ? team : null).filter(team => team !== null)
        dispatch({type: "TEAM_EUROPE", payload: toWC})
      }
    }, [totalGames])
  
    useEffect(() => {
      dispatch({type: "EU_GROUP1", payload: groups[0]})
      dispatch({type: "EU_GROUP2", payload: groups[1]})
      dispatch({type: "EU_GROUP3", payload: groups[2]})
      dispatch({type: "EU_GROUP4", payload: groups[3]})
      dispatch({type: "EU_GROUP5", payload: groups[4]})
      dispatch({type: "EU_GROUP6", payload: groups[5]})
      dispatch({type: "EU_GROUP7", payload: groups[6]})
      dispatch({type: "EU_GROUP8", payload: groups[7]})
      dispatch({type: "EU_GROUP9", payload: groups[8]})
      dispatch({type: "EU_GROUP10", payload: groups[9]})
      dispatch({type: "EU_GROUP11", payload: groups[10]})
    }, [dispatch, groups])

     useEffect(() => {
      const arr = sortGroups.map(group => group[1])
      const toStack = teams.map(team => arr.map(team => team?.name).includes(team?.name) ? team : null).filter(team => team !== null)
      dispatch({type: "STACK_EUROPE", payload: toStack})
     }, [dispatch, sortGroups])
     
    useEffect(() => {
      setShedule([groupOne, groupTwo, groupThree, groupFour, groupFive, groupSix, groupSeven, groupEigth, groupNine, groupTen, groupEleven])
    }, [groupOne, groupTwo, groupThree, groupFour, groupFive, groupSix, groupSeven, groupEigth, groupNine, groupTen, groupEleven])
    return (
      <div className="eu_groups">
        <Groups groups={sortGroups} />
        <Shedule shedule={shedule}/>
      </div>
    )
}