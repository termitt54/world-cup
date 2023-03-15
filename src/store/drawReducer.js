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
const matches6 = [
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
    },
    {
        teamone: '',
        teamtwo: '',
        scOne: 0,
        scTwo: 0,
        endGame: false
    },
]

const europeCart = [[], [], [], [], []]
const africaStackCart = {cart: [], matches: matches4}
const africaCart = [[], [], [], [], []]
const asiaStackCart = {cart: [], matches: matches6}
const asiaCart = [[], [], [], [], []]
const southAmericaCart = [[], [], [], [], []]
const northAmericaCart = [[], [], [], [], []]
const oceaniaStackCart1 = {cart: [], matches: matches4}
const oceaniaStackCart2 = {cart: [], matches: matches2}
const oceaniaCart = [[], [], [], [], []]

const drawState = {
    europeCart,
    africaStackCart,
    africaCart,
    asiaCart,
    asiaStackCart,
    southAmericaCart,
    northAmericaCart,
    oceaniaStackCart1,
    oceaniaStackCart2,
    oceaniaCart
}

export const drawReducer = (state = drawState, action) => {
    switch(action.type) {
        case "EUROPE_CART1": 
            return {...state, europeCart: {...state.europeCart, "0": [...state.europeCart[0], action.payload]}}
        case "EUROPE_CART2": 
            return {...state, europeCart: {...state.europeCart, "1": [...state.europeCart[1], action.payload]}}  
        case "EUROPE_CART3": 
            return {...state, europeCart: {...state.europeCart, "2": [...state.europeCart[2], action.payload]}} 
        case "EUROPE_CART4": 
            return {...state, europeCart: {...state.europeCart, "3": [...state.europeCart[3], action.payload]}} 
        case "EUROPE_CART5": 
            return {...state, europeCart: {...state.europeCart, "4": [...state.europeCart[4], action.payload]}}
        case "SOUTH_AMERICA_CART1": 
            return {...state, southAmericaCart: {...state.southAmericaCart, "0": [...state.southAmericaCart[0], action.payload]}}
        case "SOUTH_AMERICA_CART2": 
            return {...state, southAmericaCart: {...state.southAmericaCart, "1": [...state.southAmericaCart[1], action.payload]}}  
        case "SOUTH_AMERICA_CART3": 
            return {...state, southAmericaCart: {...state.southAmericaCart, "2": [...state.southAmericaCart[2], action.payload]}} 
        case "SOUTH_AMERICA_CART4": 
            return {...state, southAmericaCart: {...state.southAmericaCart, "3": [...state.southAmericaCart[3], action.payload]}} 
        case "SOUTH_AMERICA_CART5": 
            return {...state, southAmericaCart: {...state.southAmericaCart, "4": [...state.southAmericaCart[4], action.payload]}} 
        case "NORTH_AMERICA_CART1": 
            return {...state, northAmericaCart: {...state.northAmericaCart, "0": [...state.northAmericaCart[0], action.payload]}}
        case "NORTH_AMERICA_CART2": 
            return {...state, northAmericaCart: {...state.northAmericaCart, "1": [...state.northAmericaCart[1], action.payload]}}  
        case "NORTH_AMERICA_CART3": 
            return {...state, northAmericaCart: {...state.northAmericaCart, "2": [...state.northAmericaCart[2], action.payload]}} 
        case "NORTH_AMERICA_CART4": 
            return {...state, northAmericaCart: {...state.northAmericaCart, "3": [...state.northAmericaCart[3], action.payload]}} 
        case "NORTH_AMERICA_CART5": 
            return {...state, northAmericaCart: {...state.northAmericaCart, "4": [...state.northAmericaCart[4], action.payload]}}           
        case "AFRICA_STACK_CART": 
            return {...state, africaStackCart: {...state.africaStackCart, cart: [...action.payload]}}
        case "AFRICA_DRAW_STACK_MATCHES": 
            return {...state, africaStackCart: {...state.africaStackCart, matches: [
              {
                teamone: action.payload[0],
                teamtwo: action.payload[7],
                scOne: 0,
                scTwo: 0,
                endGame: false
              },
              {
                teamone: action.payload[1],
                teamtwo: action.payload[6],
                scOne: 0,
                scTwo: 0,
                endGame: false
              },
              {
                teamone: action.payload[2],
                teamtwo: action.payload[5],
                scOne: 0,
                scTwo: 0,
                endGame: false
              },
              {
                teamone: action.payload[3],
                teamtwo: action.payload[4],
                scOne: 0,
                scTwo: 0,
                endGame: false
              }]}}
        case "AFRICA_CART1": 
              return {...state, africaCart: {...state.africaCart, "0": [...state.africaCart[0], action.payload]}}
        case "AFRICA_CART2": 
              return {...state, africaCart: {...state.africaCart, "1": [...state.africaCart[1], action.payload]}}  
        case "AFRICA_CART3": 
              return {...state, africaCart: {...state.africaCart, "2": [...state.africaCart[2], action.payload]}} 
        case "AFRICA_CART4": 
              return {...state, africaCart: {...state.africaCart, "3": [...state.africaCart[3], action.payload]}} 
        case "AFRICA_CART5": 
              return {...state, africaCart: {...state.africaCart, "4": [...state.africaCart[4], action.payload]}} 
        case "ASIA_STACK_CART": 
              return {...state, asiaStackCart: {...state.asiaStackCart, cart: [...action.payload]}}      
        case "ASIA_DRAW_STACK_MATCHES": 
              return {...state, asiaStackCart: {...state.asiaStackCart, matches: [
                {
                  teamone: action.payload[0],
                  teamtwo: action.payload[11],
                  scOne: 0,
                  scTwo: 0,
                  endGame: false
                },
                {
                  teamone: action.payload[1],
                  teamtwo: action.payload[10],
                  scOne: 0,
                  scTwo: 0,
                  endGame: false
                },
                {
                  teamone: action.payload[2],
                  teamtwo: action.payload[9],
                  scOne: 0,
                  scTwo: 0,
                  endGame: false
                },
                {
                  teamone: action.payload[3],
                  teamtwo: action.payload[8],
                  scOne: 0,
                  scTwo: 0,
                  endGame: false
                },
                {
                  teamone: action.payload[4],
                  teamtwo: action.payload[7],
                  scOne: 0,
                  scTwo: 0,
                  endGame: false
                },
                {
                  teamone: action.payload[5],
                  teamtwo: action.payload[6],
                  scOne: 0,
                  scTwo: 0,
                  endGame: false
                }]}}
        case "ASIA_CART1": 
              return {...state, asiaCart: {...state.asiaCart, "0": [...state.asiaCart[0], action.payload]}}
        case "ASIA_CART2": 
              return {...state, asiaCart: {...state.asiaCart, "1": [...state.asiaCart[1], action.payload]}}  
        case "ASIA_CART3": 
              return {...state, asiaCart: {...state.asiaCart, "2": [...state.asiaCart[2], action.payload]}} 
        case "ASIA_CART4": 
              return {...state, asiaCart: {...state.asiaCart, "3": [...state.asiaCart[3], action.payload]}} 
        case "ASIA_CART5": 
              return {...state, asiaCart: {...state.asiaCart, "4": [...state.asiaCart[4], action.payload]}} 
        case "OCEANIA_STACK_CART1": 
              return {...state, oceaniaStackCart1: {...state.oceaniaStackCart1, cart: [...action.payload]}}   
        case "OCEANIA_STACK_CART2": 
              return {...state, oceaniaStackCart2: {...state.oceaniaStackCart2, cart: [...state.oceaniaStackCart2.cart , ...action.payload]}}         
        case "OCEANIA_DRAW_STACK_MATCHES1": 
              return {...state, oceaniaStackCart1: {...state.oceaniaStackCart1, matches: [
                {
                  teamone: action.payload[0],
                  teamtwo: action.payload[7],
                  scOne: 0,
                  scTwo: 0,
                  endGame: false
                },
                {
                  teamone: action.payload[1],
                  teamtwo: action.payload[6],
                  scOne: 0,
                  scTwo: 0,
                  endGame: false
                },
                {
                  teamone: action.payload[2],
                  teamtwo: action.payload[5],
                  scOne: 0,
                  scTwo: 0,
                  endGame: false
                },
                {
                  teamone: action.payload[3],
                  teamtwo: action.payload[4],
                  scOne: 0,
                  scTwo: 0,
                  endGame: false
                }]}}
        case "OCEANIA_DRAW_STACK_MATCHES2": 
                return {...state, oceaniaStackCart2: {...state.oceaniaStackCart2, matches: [
                  {
                    teamone: action.payload[0],
                    teamtwo: action.payload[1],
                    scOne: 0,
                    scTwo: 0,
                    endGame: false
                  },
                  {
                    teamone: action.payload[2],
                    teamtwo: action.payload[3],
                    scOne: 0,
                    scTwo: 0,
                    endGame: false
                  },
                ]}}
        case "OCEANIA_CART1": 
              return {...state, oceaniaCart: {...state.oceaniaCart, "0": [...state.oceaniaCart[0], action.payload]}}
        case "OCEANIA_CART2": 
              return {...state, oceaniaCart: {...state.oceaniaCart, "1": [...state.oceaniaCart[1], action.payload]}}  
        case "OCEANIA_CART3": 
              return {...state, oceaniaCart: {...state.oceaniaCart, "2": [...state.oceaniaCart[2], action.payload]}} 
        case "OCEANIA_CART4": 
              return {...state, oceaniaCart: {...state.oceaniaCart, "3": [...state.oceaniaCart[3], action.payload]}} 
        case "OCEANIA_CART5": 
              return {...state, oceaniaCart: {...state.oceaniaCart, "4": [...state.oceaniaCart[4], action.payload]}} 
        default: 
            return state    
    }
}