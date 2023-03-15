import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./index.scss";
import { europe } from "../../../../../data/europe";
import { asia } from "../../../../../data/asia";
import { africa } from "../../../../../data/africa";
import { southAmerica } from "../../../../../data/southAmerica";
import { northAmerica } from "../../../../../data/northAmerica";
import { oceania } from "../../../../../data/oceania";
import { Cart1 } from "./components/Cart1";
import { Cart2 } from "./components/Cart2";
import { Cart3 } from "./components/Cart3";
import { Cart4 } from "./components/Cart4";

export const DrawWC = () => {
  const wc = useSelector((state) => state.teamWC);
  const carts = useSelector(state => state.drawWC.cart)
  const groups = useSelector(state => state.groupsWC.groups)
  const dispatch = useDispatch()
  const [teams, setTeams] = useState([...wc.europe1, ...wc.europe2, ...wc.africa, ...wc.asia, ...wc.northAmerica, ...wc.southAmerica, ...wc.oceania, ...wc.other])
/*     const carts = [[    europe[0],
  europe[1],
  europe[2],
  europe[3],
  europe[4],
  europe[5],
  europe[6],
  europe[7],], [europe[8],
  europe[9],
  europe[10],
  europe[11],
  europe[12],
  asia[0],
  asia[1],
  asia[2],], [asia[3],
  africa[0],
  africa[1],
  africa[2],
  africa[3],
  africa[4],
  southAmerica[0],
  southAmerica[1],], [southAmerica[2],
  southAmerica[3],
  southAmerica[4],
  northAmerica[0],
  northAmerica[1],
  northAmerica[2],
  northAmerica[3],
  oceania[0]]]   */

  teams.map(team => {
    return team.rating = team.rat.reduce((a,b) => a + b, 0)
  })
  useEffect(() => {
    setTeams(teams.sort((a,b) => b.rating - a.rating))
  }, [teams])

  const drawOne = () => {
     const arr = carts[0]
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    dispatch({ type: "DRAW_WC1", payload: arr }); 
  };

  const drawTwo = () => {
     const arr = carts[1]
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    dispatch({ type: "DRAW_WC2", payload: arr }); 
  };

  const drawThree = () => {
     const arr = carts[2]
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    dispatch({ type: "DRAW_WC3", payload: arr }); 
  };

  const drawFour = () => {
     const arr = carts[3]
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    dispatch({ type: "DRAW_WC4", payload: arr }); 
  };
/*       useEffect(() => {
        setTeams([...wc.europe1, ...wc.europe2, ...wc.africa, ...wc.asia, ...wc.northAmerica, ...wc.southAmerica, ...wc.oceania, ...wc.other])
    }, [wc.europe1, wc.europe2, wc.africa, wc.asia, wc.northAmerica, wc.southAmerica, wc.oceania, wc.other])  */

  return (
    <div className="draw-wc">
      <div className="carts">
        <div className="cart cart1">
          <div className="cart__title">Корзина 1</div>
          <Cart1 teams={teams} setTeams={setTeams} />
          <Cart1 teams={teams} setTeams={setTeams} />
          <Cart1 teams={teams} setTeams={setTeams} />
          <Cart1 teams={teams} setTeams={setTeams} />
          <Cart1 teams={teams} setTeams={setTeams} />
          <Cart1 teams={teams} setTeams={setTeams} />
          <Cart1 teams={teams} setTeams={setTeams} />
          <Cart1 teams={teams} setTeams={setTeams} />
          <br />
          <button onClick={drawOne} className="btn btn_draw">
            Жеребьевка 1-ой корзины
          </button>
        </div>
        <div className="cart cart2">
          <div className="cart__title">Корзина 2</div>
          <Cart2 teams={teams} setTeams={setTeams} />
          <Cart2 teams={teams} setTeams={setTeams} />
          <Cart2 teams={teams} setTeams={setTeams} />
          <Cart2 teams={teams} setTeams={setTeams} />
          <Cart2 teams={teams} setTeams={setTeams} />
          <Cart2 teams={teams} setTeams={setTeams} />
          <Cart2 teams={teams} setTeams={setTeams} />
          <Cart2 teams={teams} setTeams={setTeams} />
          <br />
          <button onClick={drawTwo} className="btn btn_draw">
            Жеребьевка 2-ой корзины
          </button>
        </div>
        <div className="cart cart3">
          <div className="cart__title">Корзина 3</div>
          <Cart3 teams={teams} setTeams={setTeams} />
          <Cart3 teams={teams} setTeams={setTeams} />
          <Cart3 teams={teams} setTeams={setTeams} />
          <Cart3 teams={teams} setTeams={setTeams} />
          <Cart3 teams={teams} setTeams={setTeams} />
          <Cart3 teams={teams} setTeams={setTeams} />
          <Cart3 teams={teams} setTeams={setTeams} />
          <Cart3 teams={teams} setTeams={setTeams} />
          <br />
          <button onClick={drawThree} className="btn btn_draw">
            Жеребьевка 3-ей корзины
          </button>
        </div>
        <div className="cart cart4">
          <div className="cart__title">Корзина 4</div>
          <Cart4 teams={teams} setTeams={setTeams} />
          <Cart4 teams={teams} setTeams={setTeams} />
          <Cart4 teams={teams} setTeams={setTeams} />
          <Cart4 teams={teams} setTeams={setTeams} />
          <Cart4 teams={teams} setTeams={setTeams} />
          <Cart4 teams={teams} setTeams={setTeams} />
          <Cart4 teams={teams} setTeams={setTeams} />
          <Cart4 teams={teams} setTeams={setTeams} />
          <br />
          <button onClick={drawFour} className="btn btn_draw">
            Жеребьевка 4-ой корзины
          </button>
        </div>
      </div>

       <div className="groups">
        {groups.map((group, idx) => {
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
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};
