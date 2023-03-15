import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Game } from "../../../../../../Game";
import "./index.scss";

export const StackGamesSouthAmerica = () => {
  const matches = useSelector((state) => state.qualsStack.southAmerica);
  const [openGame, setOpenGame] = useState(false);
  const [stackGame, setStackGame] = useState({});
  const dispatch = useDispatch();

  const southAmericaDraw = () => {
    let arr = matches.group;
    arr = arr
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    dispatch({ type: "DRAW_SA", payload: arr });
  };

  const onClick = (match) => {
    setOpenGame(!openGame);
    setStackGame(match);
  };

  const change = (scoreOne, scoreTwo, game) => {
    if (scoreOne > scoreTwo) {
      dispatch({ type: "STACK_OTHER", payload: game.teamone });
    }

    if (scoreOne < scoreTwo) {
      dispatch({ type: "STACK_OTHER", payload: game.teamtwo });
    }
  }

  return (
    <div className="southAmerica stack-games__southAmerica">
      <button onClick={southAmericaDraw} className="btn btn_draw">
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
