import { CHANGE_SCREEN } from "../todo/types"

const handlers = {
    [CHANGE_SCREEN]: (state, payload) => payload,
    DEFAULT: state => state
}

export const screanReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action.payload)
}