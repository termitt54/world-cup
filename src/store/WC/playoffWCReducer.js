const shedule8 = [
    {
        teamone: "",
        teamtwo: "",
        scOne: 0,
        scTwo: 0,
        endGame: false,
      },
      {
        teamone: "",
        teamtwo: "",
        scOne: 0,
        scTwo: 0,
        endGame: false,
      },
      {
        teamone: "",
        teamtwo: "",
        scOne: 0,
        scTwo: 0,
        endGame: false,
      },
      {
        teamone: "",
        teamtwo: "",
        scOne: 0,
        scTwo: 0,
        endGame: false,
      },
      {
        teamone: "",
        teamtwo: "",
        scOne: 0,
        scTwo: 0,
        endGame: false,
      },
      {
        teamone: "",
        teamtwo: "",
        scOne: 0,
        scTwo: 0,
        endGame: false,
      },
      {
        teamone: "",
        teamtwo: "",
        scOne: 0,
        scTwo: 0,
        endGame: false,
      },
      {
        teamone: "",
        teamtwo: "",
        scOne: 0,
        scTwo: 0,
        endGame: false,
      },
]

const shedule4 = [
    {
        teamone: "",
        teamtwo: "",
        scOne: 0,
        scTwo: 0,
        endGame: false,
      },
      {
        teamone: "",
        teamtwo: "",
        scOne: 0,
        scTwo: 0,
        endGame: false,
      },
      {
        teamone: "",
        teamtwo: "",
        scOne: 0,
        scTwo: 0,
        endGame: false,
      },
      {
        teamone: "",
        teamtwo: "",
        scOne: 0,
        scTwo: 0,
        endGame: false,
      },
]

const shedule2 = [
    {
        teamone: "",
        teamtwo: "",
        scOne: 0,
        scTwo: 0,
        endGame: false,
      },
      {
        teamone: "",
        teamtwo: "",
        scOne: 0,
        scTwo: 0,
        endGame: false,
      },

]

const sheduleThird = [
    {
        teamone: "",
        teamtwo: "",
        scOne: 0,
        scTwo: 0,
        endGame: false,
      },

]

const sheduleFinal = [
    {
        teamone: "",
        teamtwo: "",
        scOne: 0,
        scTwo: 0,
        endGame: false,
      },
]

const eighth = []
const quaterfinal = []
const semifinal = []
const third = []
const final = []

const playoffState = {
    eighth, quaterfinal, semifinal, third, final, shedule8, shedule4, shedule2, sheduleThird, sheduleFinal
}

export const playoffWCReducer = (state = playoffState, action) => {
    const ans = action.payload
    switch(action.type) {
        case "EIGHTH" :
            return {...state, eighth: ans}
        case "SHEDULE_EIGHTH" :
            return {...state, shedule8: [
                {...state.shedule8[0], teamone: ans[0], teamtwo: ans[3]}, 
                {...state.shedule8[1], teamone: ans[2], teamtwo: ans[1]}, 
                {...state.shedule8[2], teamone: ans[4], teamtwo: ans[7]}, 
                {...state.shedule8[3], teamone: ans[6], teamtwo: ans[5]}, 
                {...state.shedule8[4], teamone: ans[8], teamtwo: ans[11]}, 
                {...state.shedule8[5], teamone: ans[10], teamtwo: ans[9]}, 
                {...state.shedule8[6], teamone: ans[12], teamtwo: ans[15]}, 
                {...state.shedule8[7], teamone: ans[14], teamtwo: ans[13]}]} 
        case "QUATER": 
            return {...state, quaterfinal: [...state.quaterfinal, ans]}
        case "SHEDULE_QUATER": 
            return {...state, shedule4: [
                {...state.shedule4[0], teamone: ans[0], teamtwo: ans[1]}, 
                {...state.shedule4[1], teamone: ans[4], teamtwo: ans[5]}, 
                {...state.shedule4[2], teamone: ans[2], teamtwo: ans[3]}, 
                {...state.shedule4[3], teamone: ans[6], teamtwo: ans[7]}, 
            ]} 
        case "SEMI": 
            return {...state, semifinal: [...state.semifinal, ans]}
        case "SHEDULE_SEMIFINAL": 
            return {...state, shedule2: [
                {...state.shedule2[0], teamone: ans[0], teamtwo: ans[1]}, 
                {...state.shedule2[1], teamone: ans[2], teamtwo: ans[3]}, 
            ]} 
        case "FINAL": 
            return {...state, final: [...state.final, ans]}
        case "SHEDULE_FINAL": 
            return {...state, sheduleFinal: [
                {...state.sheduleFinal[0], teamone: ans[0], teamtwo: ans[1]}, 
            ]} 
        case "THIRD": 
            return {...state, third: [...state.third, ans]}
        case "SHEDULE_THIRD": 
            return {...state, sheduleThird: [
                {...state.sheduleThird[0], teamone: ans[0], teamtwo: ans[1]}, 
            ]}                         
        default: 
            return state    
    }
}