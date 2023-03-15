import React, {  useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Game } from "../../../../../../Game";
import "./index.scss";

export const StackGamesNorthAmerica = () => {
  const group = useSelector((state) => state.qualsStack.northAmerica);
  const semifinal = useSelector(
    (state) => state.qualsStack.northAmerica.semifinal
  );
  const [openGame, setOpenGame] = useState(false);
  const [stackGame, setStackGame] = useState({});
  const dispatch = useDispatch();

  group.group.sort((a, b) => b.gf - a.gf);
  group.group.sort((a, b) => b.gd - a.gd);
  group.group.sort((a, b) => b.win - a.win);
  group.group.sort((a, b) => b.points - a.points);

  const onClick = (match) => {
    setOpenGame(!openGame);
    setStackGame(match);
  };

  const drawToWC = () => {
    let arr = [
      group.group[0],
      group.group[1],
      group.group[2],
      group.group[3],
      group.group[4],
      group.group[5],
    ];
    arr = arr
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    dispatch({ type: "DRAW_NA", payload: arr });
    dispatch({ type: "NA_LAST", payload: group.group[6] });
  };

  const clickDraw = () => {
    let arr = semifinal;
    arr = arr
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    dispatch({ type: "DRAW_NA_SEMIFINAL", payload: arr });
  };

  const change = (scoreOne, scoreTwo, game) => {
    if (semifinal.length < 4) {
      if (scoreOne > scoreTwo) {
        dispatch({ type: "ADD_NA_SEMIFINAL", payload: game.teamtwo });
        dispatch({ type: "TEAM_NA", payload: game.teamone });
      }

      if (scoreOne < scoreTwo) {
        dispatch({ type: "ADD_NA_SEMIFINAL", payload: game.teamone });
        dispatch({ type: "TEAM_NA", payload: game.teamtwo });
      }
    }

    if (semifinal.length === 4) {
      if (scoreOne > scoreTwo) {
        dispatch({ type: "STACK_OTHER", payload: game.teamone });
      }

      if (scoreOne < scoreTwo) {
        dispatch({ type: "STACK_OTHER", payload: game.teamtwo });
      }
    }
  };

  return (
    <div className="north_america stack-games__north_america">
      <table className="north_america__table">
        <thead>
          <tr>
            <th className="table__number">№</th>
            <th className="table__text">Команды</th>
            <th className="table__number">И</th>
            <th className="table__number">В</th>
            <th className="table__number">Н</th>
            <th className="table__number">П</th>
            <th className="table__number">ЗГ</th>
            <th className="table__number">ПГ</th>
            <th className="table__number">Раз</th>
            <th>Очки</th>
          </tr>
        </thead>

        {group?.group?.map((team, idx) => {
          return (
            <thead key={idx + 1}>
              <tr>
                <td>{idx + 1}</td>
                <td className="table__text">
                  <img className="table__flag" src={team?.flag} alt="" />
                  {team?.name}
                </td>
                <td>{team?.game}</td>
                <td>{team?.win}</td>
                <td>{team?.draw}</td>
                <td>{team?.lose}</td>
                <td>{team?.gf}</td>
                <td>{team?.ga}</td>
                <td>{team?.gd}</td>
                <td>{team?.points}</td>
              </tr>
            </thead>
          );
        })}
      </table>

      <div className="north_america__games">
        <button
          onClick={drawToWC}
          style={{ height: "5rem" }}
          className="btn btn_draw"
        >
          Жеребьевка
        </button>

        <div className="north_america__semi-final">
          <div className="matches">
            {group.matches.toWC.map((match) => {
              return (
                <div className="game">
                  <div className="teamone">
                    <img
                      className="game__flag"
                      src={match?.teamone?.flag}
                      alt=""
                    />
                    {match?.teamone?.name ? match?.teamone?.name : "Empty"}
                  </div>
                  <div className="teamtwo">
                    <img
                      className="game__flag"
                      src={match?.teamtwo?.flag}
                      alt=""
                    />
                    {match?.teamtwo?.name ? match?.teamtwo?.name : "Empty"}
                  </div>
                  <div onClick={() => onClick(match)} className="score">
                    <span>{match?.scOne}</span>
                    <span>{match?.scTwo}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="north_america__games">
        <button
          onClick={clickDraw}
          style={{ height: "5rem" }}
          className="btn btn_draw"
        >
          Жеребьевка
        </button>

        <div className="north_america__semi-final">
          <div className="matches">
            {group.matches.semifinal.map((match) => {
              return (
                <div className="game">
                  <div className="teamone">
                    <img
                      className="game__flag"
                      src={match?.teamone?.flag}
                      alt=""
                    />
                    {match?.teamone?.name ? match?.teamone?.name : "Empty"}
                  </div>
                  <div className="teamtwo">
                    <img
                      className="game__flag"
                      src={match?.teamtwo?.flag}
                      alt=""
                    />
                    {match?.teamtwo?.name ? match?.teamtwo?.name : "Empty"}
                  </div>
                  <div onClick={() => onClick(match)} className="score">
                    <span>{match?.scOne}</span>
                    <span>{match?.scTwo}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <>
        <Game
          openGame={openGame}
          setOpenGame={setOpenGame}
          game={stackGame}
          change={change}
        />
      </>
    </div>
  );
};
