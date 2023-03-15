const groups = [[], [], [], [], [], [], [], []]

const groupsState = {
    groups
}

export const groupsWCReducer = (state = groupsState, action) => {
    switch(action.type) {
        case "DRAW_WC1": 
            return {...state, groups: [[...state.groups[0], action.payload[0] ? action.payload[0] : []], [...state.groups[1], action.payload[1] ? action.payload[1] : []], [...state.groups[2], action.payload[2] ? action.payload[2] : []],  [...state.groups[3], action.payload[3] ? action.payload[3] : []], [...state.groups[4], action.payload[4] ? action.payload[4] : []], [...state.groups[5], action.payload[5] ? action.payload[5] : []], [...state.groups[6], action.payload[6] ? action.payload[6] : []], [...state.groups[7], action.payload[7] ? action.payload[7] : []]]}
        case "DRAW_WC2": 
            return {...state, groups: [[...state.groups[0], action.payload[0] ? action.payload[0] : []], [...state.groups[1], action.payload[1] ? action.payload[1] : []], [...state.groups[2], action.payload[2] ? action.payload[2] : []],  [...state.groups[3], action.payload[3] ? action.payload[3] : []], [...state.groups[4], action.payload[4] ? action.payload[4] : []], [...state.groups[5], action.payload[5] ? action.payload[5] : []], [...state.groups[6], action.payload[6] ? action.payload[6] : []], [...state.groups[7], action.payload[7] ? action.payload[7] : []]]}
        case "DRAW_WC3":
            return {...state, groups: [[...state.groups[0], action.payload[0] ? action.payload[0] : []], [...state.groups[1], action.payload[1] ? action.payload[1] : []], [...state.groups[2], action.payload[2] ? action.payload[2] : []],  [...state.groups[3], action.payload[3] ? action.payload[3] : []], [...state.groups[4], action.payload[4] ? action.payload[4] : []], [...state.groups[5], action.payload[5] ? action.payload[5] : []], [...state.groups[6], action.payload[6] ? action.payload[6] : []], [...state.groups[7], action.payload[7] ? action.payload[7] : []]]}
        case "DRAW_WC4":
            return {...state, groups: [[...state.groups[0], action.payload[0] ? action.payload[0] : []], [...state.groups[1], action.payload[1] ? action.payload[1] : []], [...state.groups[2], action.payload[2] ? action.payload[2] : []],  [...state.groups[3], action.payload[3] ? action.payload[3] : []], [...state.groups[4], action.payload[4] ? action.payload[4] : []], [...state.groups[5], action.payload[5] ? action.payload[5] : []], [...state.groups[6], action.payload[6] ? action.payload[6] : []], [...state.groups[7], action.payload[7] ? action.payload[7] : []]]}
        
        default:
            return state    
    }
}