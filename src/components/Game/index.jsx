import { random } from "chance-percent";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import './index.scss';

export const Game = ({openGame, setOpenGame, game, change}) => {
    const teams = useSelector(state => state.teams)
    const [allTeams, setAllTeams] = useState([])
    const [scoreOne, setScoreOne] = useState(0)
    const [scoreTwo, setScoreTwo] = useState(0)

    useEffect(() => {
        setAllTeams([...teams.europe, ...teams.asia, ...teams.africa, ...teams.northAmerica, ...teams.southAmerica, ...teams.oceania].sort((a,b) => b.rating - a.rating))
    }, [teams.europe,teams.asia,teams.africa,teams.northAmerica,teams.southAmerica,teams.oceania])

    useEffect(() => {
        setScoreOne(game?.scOne ? game.scOne : 0)
        setScoreTwo(game?.scTwo ? game.scTwo : 0)
    }, [game.scOne, game.scTwo])

    const posOne = allTeams.indexOf(game.teamone) + 1
    const posTwo = allTeams.indexOf(game.teamtwo) + 1


    const generateScore = () => {
        const diff = 0
        console.log(posOne, "&&", posTwo);
    }

    const applyScore = () => {
        setOpenGame(!openGame)
        game.endGame = true
        game.scOne = scoreOne
        game.scTwo = scoreTwo
        change(scoreOne, scoreTwo, game)
    }

    return (
        <div className={openGame ? 'game_active' : 'game'}>
            <div className="game__content">
               <div className="igra">
                    <div className="igra__teamone">
                        <img className="igra__flag" src={game.teamone?.flag ? game.teamone?.flag : null} alt="" />
                        {game.teamone?.name ? game.teamone.name : "Empty"}
                    </div>
                    <div className="igra__teamtwo">
                        <img className="igra__flag" src={game.teamtwo?.flag ? game.teamtwo?.flag : null} alt="" />
                        {game.teamtwo?.name ? game.teamtwo.name : "Empty"}
                    </div>
                    <div className="igra__score">
                        <input min={0} value={scoreOne} onChange={(e) => setScoreOne(+e.target.value)} type="number" name="" id="" />
                        <input min={0} value={scoreTwo} onChange={(e) => setScoreTwo(+e.target.value)} type="number" name="" id="" />
                    </div>
               </div>

               <div className="buttons">
                    {/* <button className={game.endGame ? "none" : ""} onClick={() => generateScore()}>Генерация результата</button> */}
                    <button className={game.endGame ? "none" : ""} onClick={() => applyScore()}>Применить</button>
                    <button onClick={() => setOpenGame(!openGame)}>Закрыть</button>
               </div> 
            </div>
        </div>
    )
}