const cart = [[],[],[],[]]

const cartState = {
    cart
}

export const drawWCReducer = (state = cartState, action) => {
    switch(action.type) {
        case "WC_CART1": 
            return {...state, cart: {...state.cart, "0": [...state.cart[0], action.payload]}}
        case "WC_CART2": 
            return {...state, cart: {...state.cart, "1": [...state.cart[1], action.payload]}}
        case "WC_CART3": 
            return {...state, cart: {...state.cart, "2": [...state.cart[2], action.payload]}}
        case "WC_CART4": 
            return {...state, cart: {...state.cart, "3": [...state.cart[3], action.payload]}}
        default:
            return state    
    }
}