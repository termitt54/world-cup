const matches1 = [
  {
    teamone: '',
    teamtwo: '',
    scOne: 0,
    scTwo: 0,
    endGame: false
  },
]
const matches2 = [
    {
      teamone: '',
      teamtwo: '',
      scOne: 0,
      scTwo: 0,
      endGame: false
    },
    {
      teamone: '',
      teamtwo: '',
      scOne: 0,
      scTwo: 0,
      endGame: false
    }
]
const matches3 = [
  {
    teamone: '',
    teamtwo: '',
    scOne: 0,
    scTwo: 0,
    endGame: false
  },
  {
    teamone: '',
    teamtwo: '',
    scOne: 0,
    scTwo: 0,
    endGame: false
  },
  {
    teamone: '',
    teamtwo: '',
    scOne: 0,
    scTwo: 0,
    endGame: false
  }
]
const matches4 = [
    {
      teamone: '',
      teamtwo: '',
      scOne: 0,
      scTwo: 0,
      endGame: false
    },
    {
      teamone: '',
      teamtwo: '',
      scOne: 0,
      scTwo: 0,
      endGame: false
    },
    {
      teamone: '',
      teamtwo: '',
      scOne: 0,
      scTwo: 0,
      endGame: false
    },
    {
      teamone: '',
      teamtwo: '',
      scOne: 0,
      scTwo: 0,
      endGame: false
    },
]
const matches5 = [
    {
        teamone: '',
        teamtwo: '',
        scOne: 0,
        scTwo: 0,
        endGame: false
      },
      {
        teamone: '',
        teamtwo: '',
        scOne: 0,
        scTwo: 0,
        endGame: false
      },
      {
        teamone: '',
        teamtwo: '',
        scOne: 0,
        scTwo: 0,
        endGame: false
      },
      {
        teamone: '',
        teamtwo: '',
        scOne: 0,
        scTwo: 0,
        endGame: false
      },
      {
        teamone: '',
        teamtwo: '',
        scOne: 0,
        scTwo: 0,
        endGame: false
      }
]

const europe = {group: [], final: [], matches: {semifinal: matches4, final: matches2}}
const africa = {group: [], matches: matches5}
const asia = {group: [], matches: matches4}
const northAmerica = {group: [], semifinal: [],  matches: {toWC: matches3, semifinal: matches2}}
const southAmerica = {group: [], matches: matches1}
const other = {group: [], matches: matches2}

const stackState = {
    europe,
    africa,
    asia, 
    northAmerica,
    southAmerica,
    other
}

export const qualsStackReducer = (state = stackState, action) => {
    const ans = action.payload;
    switch(action.type) {
        case "STACK_EUROPE":
            return {...state, europe: {...state.europe, group: ans}}
        case "ADD_FINAL": 
            return {...state, europe: {...state.europe, final: [...state.europe.final, ans]}}    
        case "DRAW_EU": 
            return {...state, europe: {...state.europe, matches: {...state.europe.matches, semifinal: [          
            { ...state.europe.matches.semifinal[0], teamone: ans[0], teamtwo: ans[1] },
            { ...state.europe.matches.semifinal[1], teamone: ans[2], teamtwo: ans[3] },
            { ...state.europe.matches.semifinal[2], teamone: ans[4], teamtwo: ans[5] },
            { ...state.europe.matches.semifinal[3], teamone: ans[6], teamtwo: ans[7] }]}}} 
        case "DRAW_EU_FINAL":
            return {...state, europe: {...state.europe, matches: {...state.europe.matches, final: [          
                { ...state.europe.matches.final[0], teamone: ans[0], teamtwo: ans[1] },
                { ...state.europe.matches.final[1], teamone: ans[2], teamtwo: ans[3] }]}}}  
        case "STACK_AFRICA" : 
            return {...state, africa: {...state.africa, group: ans}}
        case "DRAW_AFRICA": 
            return {...state, africa: {...state.africa, matches: [          
              { ...state.africa.matches[0], teamone: ans[0], teamtwo: ans[1] },
              { ...state.africa.matches[1], teamone: ans[2], teamtwo: ans[3] },
              { ...state.africa.matches[2], teamone: ans[4], teamtwo: ans[5] },
              { ...state.africa.matches[3], teamone: ans[6], teamtwo: ans[7] },
              { ...state.africa.matches[4], teamone: ans[8], teamtwo: ans[9] }]}}
        case "STACK_ASIA" : 
            return {...state, asia: {...state.asia, group: ans}}
        case "DRAW_ASIA": 
            return {...state, asia: {...state.asia, matches: [          
              { ...state.asia.matches[0], teamone: ans[0], teamtwo: ans[1] },
              { ...state.asia.matches[1], teamone: ans[2], teamtwo: ans[3] },
              { ...state.asia.matches[2], teamone: ans[4], teamtwo: ans[5] },
              { ...state.asia.matches[3], teamone: ans[6], teamtwo: ans[7] },
              ]}}    
        case "STACK_NA":
            return {...state, northAmerica: {...state.northAmerica, group: ans}}   
        case "DRAW_NA": 
            return {...state, northAmerica: {...state.northAmerica, matches: {...state.northAmerica.matches, toWC: [          
            { ...state.northAmerica.matches.toWC[0], teamone: ans[0], teamtwo: ans[1] },
            { ...state.northAmerica.matches.toWC[1], teamone: ans[2], teamtwo: ans[3] },
            { ...state.northAmerica.matches.toWC[2], teamone: ans[4], teamtwo: ans[5] },
            ]}}} 
        case "NA_LAST":
            return {...state, northAmerica: {...state.northAmerica, semifinal: [ans]}}
        case "ADD_NA_SEMIFINAL": 
            return {...state, northAmerica: {...state.northAmerica, semifinal: [...state.northAmerica.semifinal, ans]}}  
        case "DRAW_NA_SEMIFINAL": 
            return {...state, northAmerica: {...state.northAmerica, matches: {...state.northAmerica.matches, semifinal: [          
              { ...state.northAmerica.matches.semifinal[0], teamone: ans[0], teamtwo: ans[1] },
              { ...state.northAmerica.matches.semifinal[1], teamone: ans[2], teamtwo: ans[3] }]}}}
        case "STACK_SA" : 
            return {...state, southAmerica: {...state.southAmerica, group: ans}}  
        case "DRAW_SA": 
            return {...state, southAmerica: {...state.southAmerica, matches: [          
              { ...state.southAmerica.matches[0], teamone: ans[0], teamtwo: ans[1] },
              ]}}   
        case "STACK_OTHER_OC": 
            return {...state, other: {...state.other, group: ans}}      
        case "STACK_OTHER": 
            return {...state, other: {...state.other, group: [...state.other.group, ans]}} 
        case "DRAW_OTHER": 
            return {...state, other: {...state.other, matches: [          
              { ...state.other.matches[0], teamone: ans[0], teamtwo: ans[1] },
              { ...state.other.matches[1], teamone: ans[2], teamtwo: ans[3] },
              ]}}         
        default: 
            return state    
    }
}