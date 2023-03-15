import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Game } from "../../../../Game";
import { Cart1 } from "./components/Cart1";
import { Cart2 } from "./components/Cart2";
import { Cart3 } from "./components/Cart3";
import { Cart4 } from "./components/Cart4";
import { Cart5 } from "./components/Cart5";
import './index.scss';

export const DrawAfrica = () => {
    const cartStack = useSelector((state) => state.draw.africaStackCart);
    const carts = useSelector((state) => state.draw.africaCart);
    const africaTeams = useSelector(state => state.teams.africa)
    const dispatch = useDispatch()
    const [teams, setTeams] = useState(africaTeams)
    const qualsGroupAfrica = useSelector(state => state.quals.africaGroups)
    const [openGame, setOpenGame] = useState(false)
    const [stackGame, setStackGame] = useState({})

    useEffect(() => {
        setTeams(teams.sort((a,b) => b.rating - a.rating))
    }, [teams])

    useEffect(() => {
        dispatch({type: "AFRICA_STACK_CART", payload: [teams[53], teams[52], teams[51], teams[50], teams[49], teams[48], teams[47], teams[46]]})
    }, [teams, dispatch])

    const drawStack = () => {
        const arr = cartStack.cart.map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value);
        dispatch({type: "AFRICA_DRAW_STACK_MATCHES", payload: arr})
    }

    const drawOne = () => {
        const arr = carts[0].map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value);
        dispatch({type: "DRAW_AFRICA1", payload: arr})
    }
    
    const drawTwo = () => {
        const arr = carts[1].map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value);
        dispatch({type: "DRAW_AFRICA2", payload: arr})
    }
    
    const drawThree = () => {
        const arr = carts[2].map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value);
        dispatch({type: "DRAW_AFRICA3", payload: arr})
    }
    
    const drawFour = () => {
        const arr = carts[3].map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value);
        dispatch({type: "DRAW_AFRICA4", payload: arr})
    }
    
    const drawFive = () => {
        const arr = carts[4].map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value);
        dispatch({type: "DRAW_AFRICA5", payload: arr})
    }

    const onClick = (match) => {
      setOpenGame(!openGame)
      setStackGame(match)
    }

    const change = () => {
      if(stackGame.scOne > stackGame.scTwo) {
        setTeams(teams.filter(team => team.id !== stackGame.teamtwo.id))
      }

      if(stackGame.scOne < stackGame.scTwo) {
        setTeams(teams.filter(team => team.id !== stackGame.teamone.id))
      }
    }

    return (
        <div className="draw-africa">
            <div className="stack-matches">
                <button onClick={drawStack} className="btn btn_draw">Сформировать пары</button>

                <div className="matches">
                    {cartStack.matches.map(match => {
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
                                <div onClick={() => onClick(match)} className="score"><span>{match.scOne}</span><span>{match.scTwo}</span></div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="carts">
        <div className="cart cart1">
          <div className="cart__title">Корзина 1</div>
          <Cart1 teams={teams} setTeams={setTeams}/>
          <Cart1 teams={teams} setTeams={setTeams}/>
          <Cart1 teams={teams} setTeams={setTeams}/>
          <Cart1 teams={teams} setTeams={setTeams}/>
          <Cart1 teams={teams} setTeams={setTeams}/>
          <Cart1 teams={teams} setTeams={setTeams}/>
          <Cart1 teams={teams} setTeams={setTeams}/>
          <Cart1 teams={teams} setTeams={setTeams}/>
          <Cart1 teams={teams} setTeams={setTeams}/>
          <Cart1 teams={teams} setTeams={setTeams}/>
          <br />
          <button onClick={drawOne} className="btn btn_draw">Жеребьевка 1-ой корзины</button>
        </div>
        <div className="cart cart2">
          <div className="cart__title">Корзина 2</div>
          <Cart2 teams={teams} setTeams={setTeams}/>
          <Cart2 teams={teams} setTeams={setTeams}/>
          <Cart2 teams={teams} setTeams={setTeams}/>
          <Cart2 teams={teams} setTeams={setTeams}/>
          <Cart2 teams={teams} setTeams={setTeams}/>
          <Cart2 teams={teams} setTeams={setTeams}/>
          <Cart2 teams={teams} setTeams={setTeams}/>
          <Cart2 teams={teams} setTeams={setTeams}/>
          <Cart2 teams={teams} setTeams={setTeams}/>
          <Cart2 teams={teams} setTeams={setTeams}/>
          <br />
          <button onClick={drawTwo} className="btn btn_draw">Жеребьевка 2-ой корзины</button>
        </div>
        <div className="cart cart3">
          <div className="cart__title">Корзина 3</div>
          <Cart3 teams={teams} setTeams={setTeams}/>
          <Cart3 teams={teams} setTeams={setTeams}/>
          <Cart3 teams={teams} setTeams={setTeams}/>
          <Cart3 teams={teams} setTeams={setTeams}/>
          <Cart3 teams={teams} setTeams={setTeams}/>
          <Cart3 teams={teams} setTeams={setTeams}/>
          <Cart3 teams={teams} setTeams={setTeams}/>
          <Cart3 teams={teams} setTeams={setTeams}/>
          <Cart3 teams={teams} setTeams={setTeams}/>
          <Cart3 teams={teams} setTeams={setTeams}/>
          <br />
          <button onClick={drawThree} className="btn btn_draw">Жеребьевка 3-ей корзины</button>
        </div>
        <div className="cart cart4">
          <div className="cart__title">Корзина 4</div>
          <Cart4 teams={teams} setTeams={setTeams}/>
          <Cart4 teams={teams} setTeams={setTeams}/>
          <Cart4 teams={teams} setTeams={setTeams}/>
          <Cart4 teams={teams} setTeams={setTeams}/>
          <Cart4 teams={teams} setTeams={setTeams}/>
          <Cart4 teams={teams} setTeams={setTeams}/>
          <Cart4 teams={teams} setTeams={setTeams}/>
          <Cart4 teams={teams} setTeams={setTeams}/>
          <Cart4 teams={teams} setTeams={setTeams}/>
          <Cart4 teams={teams} setTeams={setTeams}/>
          <br />
          <button onClick={drawFour} className="btn btn_draw">Жеребьевка 4-ой корзины</button>
        </div>
        <div className="cart cart5">
          <div className="cart__title">Корзина 5</div>
          <Cart5 teams={teams} setTeams={setTeams}/>
          <Cart5 teams={teams} setTeams={setTeams}/>
          <Cart5 teams={teams} setTeams={setTeams}/>
          <Cart5 teams={teams} setTeams={setTeams}/>
          <Cart5 teams={teams} setTeams={setTeams}/>
          <Cart5 teams={teams} setTeams={setTeams}/>
          <Cart5 teams={teams} setTeams={setTeams}/>
          <Cart5 teams={teams} setTeams={setTeams}/>
          <Cart5 teams={teams} setTeams={setTeams}/>
          <Cart5 teams={teams} setTeams={setTeams}/>
            <br />
          <button onClick={drawFive} className="btn btn_draw">Жеребьевка 5-ой корзины</button>
        </div>
      </div>

      <div className="groups">
        {qualsGroupAfrica.map((group,idx) => {
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