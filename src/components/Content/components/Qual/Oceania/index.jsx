import React, { useEffect, useMemo, useState } from "react";
import {  useDispatch, useSelector } from "react-redux";
import { Groups } from "../../../../Groups";
import { Shedule } from "../../../../Shedule";
import "./index.scss";

export const QualOceania = () => {
  const teams = useSelector(state => state.teams.oceania)
  const groups = useSelector((state) => state.quals.oceaniaGroups);
  const groupOne = useSelector(state => state.shedule.oc_group1)
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
    if(totalGames === 40) {
      const arr = sortGroups.map(group => {return group[1]})
      const toStack = teams.map(team => arr.map(team => team.name).includes(team.name) ? team : null).filter(team => team !== null)
      dispatch({type: "STACK_OTHER_OC", payload: toStack})
      const arr1 = [sortGroups[0][0]]
      const toWC = teams.map(team => arr1.map(team => team.name).includes(team.name) ? team : null).filter(team => team !== null)
      dispatch({type: "TEAM_OCEANIA", payload: toWC})
    }
  }, [totalGames])

  useEffect(() => {
    dispatch({type: "OC_GROUP1", payload: groups[0]})
  }, [dispatch, groups])


  useEffect(() => {
    setShedule([groupOne])
  }, [groupOne])
  return (
    <div className="oc_groups">
      <Groups groups={sortGroups} />
      <Shedule shedule={shedule}/>
    </div>
  );
};
