import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Cart1 } from "./components/Cart1";
import { Cart2 } from "./components/Cart2";
import { Cart3 } from "./components/Cart3";
import { Cart4 } from "./components/Cart4";
import { Cart5 } from "./components/Cart5";
import "./index.scss";

export const DrawNorthAmerica = () => {
  const carts = useSelector((state) => state.draw.northAmericaCart);
  const qualsGroupNorthAmerica = useSelector(state => state.quals.northAmericaGroups)
  const northAmericaTeams = useSelector(state => state.teams.northAmerica)
  const dispatch = useDispatch()
  const [teams, setTeams] = useState(northAmericaTeams)

  useEffect(() => {
    setTeams(teams.sort((a,b) => b.rating - a.rating))
  }, [teams])
  const drawOne = () => {
 /*    if(carts[0].length < 11) {
      return alert("Не заполнены данные")
    } */
    const arr = carts[0].map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value);
    dispatch({type: "DRAW_NORTH_AMERICA1", payload: arr})
  }

  const drawTwo = () => {
    const arr = carts[1].map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value);
    dispatch({type: "DRAW_NORTH_AMERICA2", payload: arr})
  }

  const drawThree = () => {
    const arr = carts[2].map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value);
    dispatch({type: "DRAW_NORTH_AMERICA3", payload: arr})
  }

  const drawFour = () => {
    const arr = carts[3].map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value);
    dispatch({type: "DRAW_NORTH_AMERICA4", payload: arr})
  }

  const drawFive = () => {
    const arr = carts[4].map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value);
    dispatch({type: "DRAW_NORTH_AMERICA5", payload: arr})
  }

  return (
    <div className="draw-north-america">
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
          <br />
          <button onClick={drawFive} className="btn btn_draw">Жеребьевка 5-ой корзины</button>
        </div>
      </div>

      <div className="groups">
        {qualsGroupNorthAmerica.map((group,idx) => {
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
    </div>
  );
};
