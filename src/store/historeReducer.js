
const gold = {}
const serebro = {}
const bronze = {}
const prize = []

const historyState = {
    gold,
    serebro,
    bronze,
    prize
}

export const historyReducer = (state = historyState, action) => {
    const ans = action.payload
    switch(action.type) {
        case "GOLD":
            return {...state, gold: ans}
        case "SEREBRO":
                return {...state, serebro: ans}
        case "BRONZE":
            return {...state, bronze: ans}
        case "PRIZE": 
            return {...state, prize: [...state.prize, ans]}                
        default: 
            return state    
    }
}