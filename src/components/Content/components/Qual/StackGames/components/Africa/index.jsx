import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Game } from "../../../../../../Game";
import "./index.scss";

export const StackGamesAfrica = () => {
  const matches = useSelector((state) => state.qualsStack.africa);
  const [openGame, setOpenGame] = useState(false);
  const [stackGame, setStackGame] = useState({});
  const dispatch = useDispatch();

  const africaDraw = () => {
    let arr = matches.group;
    arr = arr
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    dispatch({ type: "DRAW_AFRICA", payload: arr });
  };

  const onClick = (match) => {
    setOpenGame(!openGame);
    setStackGame(match);
  };

  const change = (scoreOne, scoreTwo, game) => {
    if (scoreOne > scoreTwo) {
      dispatch({ type: "TEAM_AFRICA", payload: game.teamone });
    }

    if (scoreOne < scoreTwo) {
      dispatch({ type: "TEAM_AFRICA", payload: game.teamtwo });
    }
  };

  return (
    <div className="africa stack-games__africa">
      <button onClick={africaDraw} className="btn btn_draw">
        Жеребьевка
      </button>

      <div className="matches">
        {matches.matches.map((match) => {
          return (
            <div className="game">
              <div className="teamone">
                <img className="game__flag" src={match?.teamone?.flag} alt="" />
                {match?.teamone?.name ? match?.teamone?.name : "Empty"}
              </div>
              <div className="teamtwo">
                <img className="game__flag" src={match?.teamtwo?.flag} alt="" />
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
