import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Game } from "../Game";
import "./index.scss";

export const Shedule = ({ shedule }) => {
  const [openGame, setOpenGame] = useState(false);
  const [game, setGame] = useState({});
  const dispatch = useDispatch();

  const onClick = (match) => {
    setOpenGame(!openGame);
    setGame(match);
  };

  const continent = () => {
    if (game.teamone.continent === "south america" && game.teamtwo.continent === "south america") {
      dispatch({ type: "ADD_SA_GAME", payload: game });
    }
    if (game.teamone.continent === "europe" && game.teamtwo.continent === "europe") {
      dispatch({ type: "ADD_EU_GAME", payload: game });
    }
    if (game.teamone.continent === "asia" && game.teamtwo.continent === "asia") {
      dispatch({ type: "ADD_AS_GAME", payload: game });
    }
    if (game.teamone.continent === "africa" && game.teamtwo.continent === "africa") {
      dispatch({ type: "ADD_AF_GAME", payload: game });
    }
    if (game.teamone.continent === "north america" && game.teamtwo.continent === "north america") {
      dispatch({ type: "ADD_NA_GAME", payload: game });
    }
    if (game.teamone.continent === "oceania" && game.teamtwo.continent === "oceania") {
      dispatch({ type: "ADD_OC_GAME", payload: game });
    }
  };

  const change = (scoreOne, scoreTwo, game) => {
    continent();
    game.teamone.game += 1;
    game.teamtwo.game += 1;
    game.teamone.gf += scoreOne;
    game.teamtwo.gf += scoreTwo;
    game.teamone.ga += scoreTwo;
    game.teamtwo.ga += scoreOne;
    game.teamone.gd = game.teamone.gf - game.teamone.ga;
    game.teamtwo.gd = game.teamtwo.gf - game.teamtwo.ga;
    game.teamone.rat[4] += scoreOne / 10;
    game.teamtwo.rat[4] += scoreTwo / 10;

    if (scoreOne > scoreTwo) {
      game.teamone.points += 3;
      game.teamone.win += 1;
      game.teamtwo.lose += 1;

      game.teamone.rat[4] += 12;
    }

    if (scoreOne < scoreTwo) {
      game.teamtwo.points += 3;
      game.teamtwo.win += 1;
      game.teamone.lose += 1;

      game.teamtwo.rat[4] += 12;
    }

    if (scoreOne === scoreTwo) {
      game.teamone.points += 1;
      game.teamtwo.points += 1;
      game.teamone.draw += 1;
      game.teamtwo.draw += 1;

      game.teamone.rat[4] += 4;
      game.teamtwo.rat[4] += 4;
    }
  };

  return (
    <div className="shedule">
      <Game
        openGame={openGame}
        setOpenGame={setOpenGame}
        game={game}
        change={change}
      />
      {shedule.map((game, idx) => {
        return (
          <div className="shedule__groups" key={idx + 1}>
            {game.map((game, idx) => {
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
                    className={
                      game.endGame ? "tour__score-green" : "tour__score"
                    }
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
        );
      })}
    </div>
  );
};
