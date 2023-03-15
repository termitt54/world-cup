import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Game } from "../../../../Game";
import { Cart1 } from "./components/Cart1";
import { Cart2 } from "./components/Cart2";
import { Cart3 } from "./components/Cart3";
import { Cart4 } from "./components/Cart4";
import { Cart5 } from "./components/Cart5";
import './index.scss';

export const DrawOceania = () => {
    const cartStack1 = useSelector((state) => state.draw.oceaniaStackCart1);
    const cartStack2 = useSelector((state) => state.draw.oceaniaStackCart2);
    const carts = useSelector((state) => state.draw.oceaniaCart);
    const oceaniaTeams = useSelector(state => state.teams.oceania)
    const dispatch = useDispatch()
    const [teams, setTeams] = useState(oceaniaTeams)
    const qualsGroupOceania = useSelector(state => state.quals.oceaniaGroups)
    const [openGame, setOpenGame] = useState(false)
    const [stackGame, setStackGame] = useState({})

    useEffect(() => {
        setTeams(teams.sort((a,b) => b.rating - a.rating))
    }, [teams])

    useEffect(() => {
        dispatch({type: "OCEANIA_STACK_CART1", payload: [teams[10], teams[9], teams[8], teams[7], teams[6], teams[5], teams[4], teams[3]]})
    }, [teams, dispatch])

    const drawStack = () => {
        const arr = cartStack1.cart.map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value);
        dispatch({type: "OCEANIA_DRAW_STACK_MATCHES1", payload: arr})
    }

    const drawOne = () => {
        const arr = carts[0].map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value);
        dispatch({type: "DRAW_OCEANIA1", payload: arr})
    }
    
    const drawTwo = () => {
        const arr = carts[1].map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value);
        dispatch({type: "DRAW_OCEANIA2", payload: arr})
    }
    
    const drawThree = () => {
        const arr = carts[2].map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value);
        dispatch({type: "DRAW_OCEANIA3", payload: arr})
    }
    
    const drawFour = () => {
        const arr = carts[3].map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value);
        dispatch({type: "DRAW_OCEANIA4", payload: arr})
    }
    
    const drawFive = () => {
        const arr = carts[4].map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value);
        dispatch({type: "DRAW_OCEANIA5", payload: arr})
    }

    const onClick = (match) => {
      setOpenGame(!openGame)
      setStackGame(match)
    }

    const drawStack1 = () => {
      const arr = cartStack2.cart
      dispatch({type: "OCEANIA_DRAW_STACK_MATCHES2", payload: arr})

    }

    const change = () => {
      if(cartStack2.cart.length < 4) {

        if(stackGame.scOne > stackGame.scTwo) {
          dispatch({type: "OCEANIA_STACK_CART2", payload: [stackGame.teamone]})
          setTeams(teams.filter(team => team.id !== stackGame.teamtwo.id))
        }
        if(stackGame.scOne < stackGame.scTwo) {
          dispatch({type: "OCEANIA_STACK_CART2", payload: [stackGame.teamtwo]})
          setTeams(teams.filter(team => team.id !== stackGame.teamone.id))
        }
      }

      if(cartStack2.cart.length === 4) {
        if(stackGame.scOne > stackGame.scTwo) {
          setTeams(teams.filter(team => team.id !== stackGame.teamtwo.id))
        }
  
        if(stackGame.scOne < stackGame.scTwo) {
          setTeams(teams.filter(team => team.id !== stackGame.teamone.id))
        } 
      }
    }

    return (
        <div className="draw-oceania">
            <div className="stack-matches">
                <button onClick={drawStack} className="btn btn_draw">Сформировать пары</button>

                <div className="matches">
                    {cartStack1.matches.map(match => {
                        return (
                            <div className="game">
                                <div className="teamone">
                                    <img className="game__flag" src={match.teamone.flag} alt="" />
                                    {match.teamone.name ? match.teamone.name : "Empty"}
                                </div>
                                <div className="teamtwo">
                                    <img className="game__flag" src={match.teamtwo.flag} alt="" />
                                    {match.teamtwo.name ? match.teamtwo.name : "Empty"}
                                </div>
                                <div onClick={() => onClick(match)} className="score"><span>{match?.scOne}</span><span>{match?.scTwo}</span></div>
                            </div>
                        )
                    })}
                </div>
                
            </div>

            <div className="stack-matches">
            <button onClick={drawStack1} className="btn btn_draw">Сформировать пары</button>
                <div  className="matches">
                    {cartStack2.matches.map(match => {
                        return (
                            <div className="game">
                                <div className="teamone">
                                    <img className="game__flag" src={match?.teamone?.flag} alt="" />
                                    {match?.teamone?.name ? match.teamone.name : "Empty"}
                                </div>
                                <div className="teamtwo">
                                    <img className="game__flag" src={match?.teamtwo?.flag} alt="" />
                                    {match?.teamtwo?.name ? match.teamtwo.name : "Empty"}
                                </div>
                                <div onClick={() => onClick(match)} className="score"><span>{match?.scOne}</span><span>{match?.scTwo}</span></div>
                            </div>
                        )
                    })}
                </div>
                
            </div>
            

            <div className="carts">
        <div className="cart cart1">
          <div className="cart__title">Корзина 1</div>
          <Cart1 teams={teams} setTeams={setTeams}/>
          <br />
          <button onClick={drawOne} className="btn btn_draw">Жеребьевка 1-ой корзины</button>
        </div>
        <div className="cart cart2">
          <div className="cart__title">Корзина 2</div>
          <Cart2 teams={teams} setTeams={setTeams}/>
          <br />
          <button onClick={drawTwo} className="btn btn_draw">Жеребьевка 2-ой корзины</button>
        </div>
        <div className="cart cart3">
          <div className="cart__title">Корзина 3</div>
          <Cart3 teams={teams} setTeams={setTeams}/>
          <br />
          <button onClick={drawThree} className="btn btn_draw">Жеребьевка 3-ей корзины</button>
        </div>
        <div className="cart cart4">
          <div className="cart__title">Корзина 4</div>
          <Cart4 teams={teams} setTeams={setTeams}/>
          <br />
          <button onClick={drawFour} className="btn btn_draw">Жеребьевка 4-ой корзины</button>
        </div>
        <div className="cart cart5">
          <div className="cart__title">Корзина 5</div>
          <Cart5 teams={teams} setTeams={setTeams}/>
            <br />
          <button onClick={drawFive} className="btn btn_draw">Жеребьевка 5-ой корзины</button>
        </div>
      </div>

      <div style={{justifyContent: "center"}} className="groups">
        {qualsGroupOceania.map((group,idx) => {
          return (
            <div key={idx + 1} className="group">
              <div className="group__title">Группа {idx + 1}</div>
              {group.map((team, idx) => {
                return (
                  <div key={idx + 1} className="group__team">
                    <div className="number">{idx + 1}</div>
                    <img src={team.flag} className="flag" alt="" />
                    <div className="name">{team.name}</div>
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>

      <>
        <Game openGame={openGame} setOpenGame={setOpenGame} game={stackGame} change={change}/>
      </>
        </div>
    )
}