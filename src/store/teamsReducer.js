import { europe } from "../data/europe";
import { asia } from "../data/asia";
import { africa } from "../data/africa";
import { oceania } from "../data/oceania";
import { northAmerica } from "../data/northAmerica";
import { southAmerica } from "../data/southAmerica";

const teamsState = {
  europe,
  asia,
  africa,
  northAmerica,
  southAmerica,
  oceania,
};

export const teamsReducer = (state = teamsState, action) => {
  const ans = action.payload
      switch(action.type) {
        case "NEW": 
        return {
          ...state,
          europe: state.europe.map((team) => {
            if (team.id === ans[0]) {
              return { ...team, rat: ans[1],  game: team.game = 0, win: team.win = 0, draw: team.draw = 0, lose: team.lose = 0, ga: team.ga = 0, gd: team.gd = 0, gf: team.gf = 0, points: team.points = 0, wc: ans[2] };
            }
            return team;
          }),
          ...state,
          asia: state.asia.map((team) => {
            if (team.id === ans[0]) {
              return { ...team, rat: ans[1],  game: team.game = 0, win: team.win = 0, draw: team.draw = 0, lose: team.lose = 0, ga: team.ga = 0, gd: team.gd = 0, gf: team.gf = 0, points: team.points = 0, wc: ans[2] };
            }
            return team;
          }),
          ...state,
          africa: state.africa.map((team) => {
            if (team.id === ans[0]) {
              return { ...team, rat: ans[1],  game: team.game = 0, win: team.win = 0, draw: team.draw = 0, lose: team.lose = 0, ga: team.ga = 0, gd: team.gd = 0, gf: team.gf = 0, points: team.points = 0, wc: ans[2] };
            }
            return team;
          }),
          ...state,
          oceania: state.oceania.map((team) => {
            if (team.id === ans[0]) {
              return { ...team, rat: ans[1],  game: team.game = 0, win: team.win = 0, draw: team.draw = 0, lose: team.lose = 0, ga: team.ga = 0, gd: team.gd = 0, gf: team.gf = 0, points: team.points = 0, wc: ans[2] };
            }
            return team;
          }),
          ...state,
          northAmerica: state.northAmerica.map((team) => {
            if (team.id === ans[0]) {
              return { ...team, rat: ans[1],  game: team.game = 0, win: team.win = 0, draw: team.draw = 0, lose: team.lose = 0, ga: team.ga = 0, gd: team.gd = 0, gf: team.gf = 0, points: team.points = 0, wc: ans[2] };
            }
            return team;
          }),
          ...state,
          southAmerica: state.southAmerica.map((team) => {
            if (team.id === ans[0]) {
              return { ...team, rat: ans[1],  game: team.game = 0, win: team.win = 0, draw: team.draw = 0, lose: team.lose = 0, ga: team.ga = 0, gd: team.gd = 0, gf: team.gf = 0, points: team.points = 0, wc: ans[2] };
            }
            return team;
          }),
        };
        default:
            return state    
      }
};
