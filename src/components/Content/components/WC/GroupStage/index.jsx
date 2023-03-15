import React, { useEffect,  useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Game } from "../../../../Game";
import "./index.scss";

export const GroupStage = () => {
  const teams = useSelector(state => state.teams)
  const allTeams = [...teams.europe, ...teams.asia, ...teams.africa, ...teams.oceania, ...teams.southAmerica, ...teams.northAmerica]
  const groups = useSelector((state) => state.groupsWC.groups);
  const shedule = useSelector((state) => state.sheduleWC.shedule);
  const [openGame, setOpenGame] = useState(false);
  const [game, setGame] = useState({});
  const dispatch = useDispatch();

  groups.map(group => group.map(team => {
    return team.rating = team.rat?.reduce((a,b) => a + b)
  }))

  const sortGroups = JSON.parse(JSON.stringify(groups));
  sortGroups.map((group) => group.sort((a, b) => b.wc?.gf - a.wc?.gf));
  sortGroups.map((group) => group.sort((a, b) => b.wc?.gd - a.wc?.gd));
  sortGroups.map((group) => group.sort((a, b) => b.wc?.win - a.wc?.win));
  sortGroups.map((group) => group.sort((a, b) => b.wc?.points - a.wc?.points));

  const onClick = (match) => {
    setOpenGame(!openGame);
    setGame(match);
  };

  let totalGames = sortGroups.map(group => {
    return group.reduce((a, b) => a + b.wc?.game, 0)
  }).reduce((a,b) => a + b, 0)

useEffect(() => {
  if(totalGames === 96) {
    const arr = [
      sortGroups[0][0],
      sortGroups[0][1],
      sortGroups[1][0],
      sortGroups[1][1],
      sortGroups[2][0],
      sortGroups[2][1],
      sortGroups[3][0],
      sortGroups[3][1],
      sortGroups[4][0],
      sortGroups[4][1],
      sortGroups[5][0],
      sortGroups[5][1],
      sortGroups[6][0],
      sortGroups[6][1],
      sortGroups[7][0],
      sortGroups[7][1]
    ]
    const toEight = allTeams.map(team => arr.map(team => team.name).includes(team.name) ? team : null).filter(team => team !== null)
    dispatch({ type: "EIGHTH", payload: toEight });
  }
}, [totalGames])

  useEffect(() => {
    dispatch({ type: "GET_SHEDULE", payload: groups });
  }, [dispatch, groups]);

  const change = (scoreOne, scoreTwo, game) => {
    dispatch({ type: "ADD_GAME", payload: game });

    game.teamone.wc.game += 1;
    game.teamtwo.wc.game += 1;
    game.teamone.wc.gf += scoreOne;
    game.teamtwo.wc.gf += scoreTwo;
    game.teamone.wc.ga += scoreTwo;
    game.teamtwo.wc.ga += scoreOne;
    game.teamone.wc.gd = game.teamone.wc.gf - game.teamone.wc.ga;
    game.teamtwo.wc.gd = game.teamtwo.wc.gf - game.teamtwo.wc.ga;
    game.teamone.rat[4] += (scoreOne * 2) / 10;
    game.teamtwo.rat[4] += (scoreTwo * 2) / 10;


    if (scoreOne > scoreTwo) {
      game.teamone.wc.points += 3;
      game.teamone.wc.win += 1;
      game.teamtwo.wc.lose += 1;
      game.teamone.rat[4] += 15;
    }

    if (scoreOne < scoreTwo) {
      game.teamtwo.wc.points += 3;
      game.teamtwo.wc.win += 1;
      game.teamone.wc.lose += 1;
      game.teamtwo.rat[4] += 15;
    }

    if (scoreOne === scoreTwo) {
      game.teamone.wc.points += 1;
      game.teamtwo.wc.points += 1;
      game.teamone.wc.draw += 1;
      game.teamtwo.wc.draw += 1;
      game.teamone.rat[4] += 5;
      game.teamtwo.rat[4] += 5;
    }
  };

  return (
    <div className="world-cup">
      <div className="group-stage">
        {sortGroups.map((group, idx) => {
          return (
            <table className={"group group" + (idx + 1)}>
              <thead>
                <th>№</th>
                <th>Группа {idx + 1}</th>
                <th>И</th>
                <th>В</th>
                <th>Н</th>
                <th>П</th>
                <th>ЗГ</th>
                <th>ПГ</th>
                <th>Р</th>
                <th>О</th>
              </thead>

              {group.map((team, idx) => {
                return (
                  <tbody>
                    <td className="group__num">{idx + 1}</td>
                    <td className="group__text">
                      <img className="group__flag" src={team.flag} alt="" />
                      {team.name}
                    </td>
                    <td className="group__num">{team.wc?.game}</td>
                    <td className="group__num">{team.wc?.win}</td>
                    <td className="group__num">{team.wc?.draw}</td>
                    <td className="group__num">{team.wc?.lose}</td>
                    <td className="group__num">{team.wc?.gf}</td>
                    <td className="group__num">{team.wc?.ga}</td>
                    <td className="group__num">{team.wc?.gd}</td>
                    <td className="group__num">{team.wc?.points}</td>
                  </tbody>
                );
              })}
            </table>
          );
        })}

        <div className="group-stage__shedule">
          <Game
            openGame={openGame}
            setOpenGame={setOpenGame}
            game={game}
            change={change}
          />
          {shedule.map((game, idx) => {
            return (
              <div key={idx + 1} className="tour__match">
                <div className="tour__teamone">
                  <img
                    className="tour__flag"
                    src={game?.teamone?.flag}
                    alt=""
                  />
                </div>
                <div
                  onClick={() => onClick(game)}
                  className={game.endGame ? "tour__score-green" : "tour__score"}
                >
                  {game?.scOne}:{game?.scTwo}
                </div>
                <div className="tour__teamtwo">
                  <img
                    className="tour__flag"
                    src={game?.teamtwo?.flag}
                    alt=""
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
