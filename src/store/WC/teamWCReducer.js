const europe1 = []
const europe2 = []
const africa = []
const asia = []
const southAmerica = []
const northAmerica = []
const oceania = []
const other = []

const teamState = {
    europe1,europe2,africa,asia,northAmerica,southAmerica,oceania,other
}

export const teamWCReducer = (state = teamState, action) => {
    const ans = action.payload
    switch(action.type) {
        case "TEAM_EUROPE": 
            return {...state, europe1: ans}
        case "TEAM_EUROPE2": 
            return {...state, europe2: [...state.europe2, ans]}   
        case "TEAM_AFRICA": 
            return {...state, africa: [...state.africa, ans]}
        case "TEAM_ASIA": 
            return {...state, asia: [...state.asia, ans]}   
        case "TEAM_SA": 
            return {...state, southAmerica: ans}
        case "TEAM_NA": 
            return {...state, northAmerica: [...state.northAmerica, ans]}     
        case "TEAM_OCEANIA": 
            return {...state, oceania: ans}   
        case "TEAM_OTHER": 
            return {...state, other: [...state.other, ans]}                  
        default: 
            return state    
    }
}