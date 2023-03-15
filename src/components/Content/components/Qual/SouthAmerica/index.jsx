import React, { useEffect, useMemo, useState } from "react";
import {  useDispatch, useSelector } from "react-redux";
import { Groups } from "../../../../Groups";
import { Shedule } from "../../../../Shedule";
import "./index.scss";

export const QualSouthAmerica = () => {
  const teams = useSelector(state => state.teams.southAmerica)
  const groups = useSelector((state) => state.quals.southAmericaGroups);
  const groupOne = useSelector(state => state.shedule.sa_group1)
  const groupTwo = useSelector(state => state.shedule.sa_group2)
  const [shedule, setShedule] = useState([])
  const dispatch = useDispatch()

  const sortGroups = JSON.parse(JSON.stringify(groups))
  useMemo(() => {
    sortGroups.map(group => group.sort((a,b) => b.gf - a.gf))
    sortGroups.map(group => group.sort((a,b) => b.gd - a.gd))
    sortGroups.map(group => group.sort((a,b) => b.win - a.win))
    sortGroups.map(group => group.sort((a,b) => b.points - a.points))
  }, [sortGroups])

  let totalGames = sortGroups.map(group => {return group.reduce((a,b) => a + b.game, 0)}).reduce((a,b) => a + b, 0)

  useEffect(() => {
    if(totalGames === 80) {
      const arr = sortGroups.map(group => {return group[2]})
      const toStack = teams.map(team => arr.map(team => team.name).includes(team.name) ? team : null).filter(team => team !== null)
      dispatch({type: "STACK_SA", payload: toStack})
      const arr1 = [sortGroups[0][0], sortGroups[1][0], sortGroups[0][1], sortGroups[1][1]]
      const toWC = teams.map(team => arr1.map(team => team.name).includes(team.name) ? team : null).filter(team => team !== null)
      dispatch({type: "TEAM_SA", payload: toWC})
    }
  }, [totalGames])

  useEffect(() => {
    dispatch({type: "SA_GROUP1", payload: groups[0]})
    dispatch({type: "SA_GROUP2", payload: groups[1]})
  }, [dispatch, groups])


  useEffect(() => {
    setShedule([groupOne, groupTwo])
  }, [groupOne, groupTwo])
  return (
    <div className="sa_groups">
      <Groups groups={sortGroups} />
      <Shedule shedule={shedule}/>
    </div>
  );
};
