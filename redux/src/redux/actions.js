export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const RESET = 'RESET'

export function reset(value=0){
    return{
        type: RESET,
        value
    }
}

export function increment(amount){
    return{
        type: INCREMENT,
        amount
    }
}

export function decrement(amount){
    return{
        type: DECREMENT,
        amount
    }
}