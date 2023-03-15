import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Game } from "../../../../../../Game";
import "./index.scss";

export const FinalStage = ({ sheduleFinal, sheduleThird }) => {
  const [openGame, setOpenGame] = useState(false);
  const [game, setGame] = useState({});
  const dispatch = useDispatch();

  const onClick = (match) => {
    setOpenGame(!openGame);
    setGame(match);
  };

  const change = (scoreOne, scoreTwo, game) => {
    game.teamone.rat[4] += (scoreOne * 4) / 10;
    game.teamtwo.rat[4] += (scoreTwo * 4) / 10;
    
    if(game.teamone.name === sheduleFinal[0].teamone.name && game.teamtwo.name === sheduleFinal[0].teamtwo.name) {
        if(scoreOne > scoreTwo) {
          game.teamone.rat[4] += 50
          game.teamtwo.rat[4] += 40
          game.teamone.gold += 1
          game.teamtwo.serebro += 1
          dispatch({type: "GOLD", payload: game.teamone})
          dispatch({type: "SEREBRO", payload: game.teamtwo})
        }
        if(scoreOne < scoreTwo) {
          game.teamone.rat[4] += 40
          game.teamtwo.rat[4] += 50
          game.teamone.serebro += 1
          game.teamtwo.gold += 1
          dispatch({type: "GOLD", payload: game.teamtwo})
          dispatch({type: "SEREBRO", payload: game.teamone})
        }
    } else {
        if(scoreOne > scoreTwo) {
          game.teamone.rat[4] += 35
          game.teamtwo.rat[4] += 30
          game.teamone.bronze += 1
          dispatch({type: "BRONZE", payload: game.teamone})
        }
        if(scoreOne < scoreTwo) {
          game.teamone.rat[4] += 30
          game.teamtwo.rat[4] += 35
          game.teamtwo.bronze += 1
          dispatch({type: "BRONZE", payload: game.teamtwo})
        }
    }
  };
  return (
    <>
      <div className="final">
        {sheduleFinal.map((game, idx) => {
          return (
            <div className={"eight__game eight__game1"}>
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

        {sheduleThird.map((game, idx) => {
          return (
            <div className={"eight__game eight__game2"}>
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
      </div>

      <Game
        openGame={openGame}
        setOpenGame={setOpenGame}
        game={game}
        change={change}
      />
    </>
  );
};
