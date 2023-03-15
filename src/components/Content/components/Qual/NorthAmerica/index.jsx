import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Groups } from "../../../../Groups";
import { Shedule } from "../../../../Shedule";
import './index.scss'


export const QualNorthAmerica = () => {
    const teams = useSelector(state => state.teams.northAmerica)
    const groups = useSelector((state) => state.quals.northAmericaGroups);
    const groupOne = useSelector(state => state.shedule.na_group1)
    const groupTwo = useSelector(state => state.shedule.na_group2)
    const groupThree = useSelector(state => state.shedule.na_group3)
    const groupFour = useSelector(state => state.shedule.na_group4)
    const groupFive = useSelector(state => state.shedule.na_group5)
    const groupSix = useSelector(state => state.shedule.na_group6)
    const groupSeven = useSelector(state => state.shedule.na_group7)
    const [shedule, setShedule] = useState([])
    const dispatch = useDispatch()

    const sortGroups = JSON.parse(JSON.stringify(groups))
    sortGroups.map(group => group.sort((a,b) => b.gf - a.gf))
    sortGroups.map(group => group.sort((a,b) => b.gd - a.gd))
    sortGroups.map(group => group.sort((a,b) => b.win - a.win))
    sortGroups.map(group => group.sort((a,b) => b.points - a.points))

    useEffect(() => {
      const arr = sortGroups.map(group => group[0])
      const toStack = teams.map(team => arr.map(team => team?.name).includes(team?.name) ? team : null).filter(team => team !== null)
      dispatch({type: "STACK_NA", payload: toStack})
     }, [dispatch, sortGroups])
  
    useEffect(() => {
      dispatch({type: "NA_GROUP1", payload: groups[0]})
      dispatch({type: "NA_GROUP2", payload: groups[1]})
      dispatch({type: "NA_GROUP3", payload: groups[2]})
      dispatch({type: "NA_GROUP4", payload: groups[3]})
      dispatch({type: "NA_GROUP5", payload: groups[4]})
      dispatch({type: "NA_GROUP6", payload: groups[5]})
      dispatch({type: "NA_GROUP7", payload: groups[6]})
    }, [dispatch, groups])
  
  
    useEffect(() => {
      setShedule([groupOne, groupTwo, groupThree, groupFour, groupFive, groupSix, groupSeven])
    }, [groupOne, groupTwo, groupThree, groupFour, groupFive, groupSix, groupSeven])
    return (
      <div className="na_groups">
        <Groups groups={sortGroups} />
        <Shedule shedule={shedule}/>
      </div>
    )
}