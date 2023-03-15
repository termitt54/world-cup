import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Game } from "../../../../../../Game";
import "./index.scss";

export const Eight = ({ shedule }) => {
  const [openGame, setOpenGame] = useState(false);
  const [game, setGame] = useState({});
  const dispatch = useDispatch()

  const onClick = (match) => {
    setOpenGame(!openGame);
    setGame(match);
  };

  const change = (scoreOne, scoreTwo, game) => {
    game.teamone.rat[4] += (scoreOne * 3) / 10;
    game.teamtwo.rat[4] += (scoreTwo * 3) / 10;
    if(scoreOne > scoreTwo) {
        dispatch({type: "QUATER", payload: game.teamone})
        game.teamtwo.rat[4] += 20
    }
    if(scoreOne < scoreTwo) {
        dispatch({type: "QUATER", payload: game.teamtwo})
        game.teamone.rat[4] += 20
    }
  };
  

  return (
    <div className="eight">
      {shedule.map((game, idx) => {
        return (
          <div className={"eight__game eight__game" + (idx + 1)}>
            <div className="teamone">
              <img className="game__flag" src={game?.teamone?.flag} alt="" />
              {game?.teamone?.name ? game?.teamone?.name : "Empty"}
            </div>
            <div className="teamtwo">
              <img className="game__flag" src={game?.teamtwo?.flag} alt="" />
              {game?.teamtwo?.name ? game?.teamtwo?.name : "Empty"}
            </div>
            <div onClick={() => onClick(game)} className="score">
              <span>{game?.scOne}</span>
              <span>{game?.scTwo}</span>
            </div>
          </div>
        );
      })}

      <Game
        openGame={openGame}
        setOpenGame={setOpenGame}
        game={game}
        change={change}
      />
    </div>
  );
};
