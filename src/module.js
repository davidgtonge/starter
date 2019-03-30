import {always} from "ramda"
import createReducer from "./helpers/create-reducer"

// Types
const RESET = "RESET"

// Action Creators
export const reset = always({type: RESET, payload: {}})

// Reducer
const initialState = {}

const handleReset = always(initialState)

export const reducer = createReducer(initialState, {
  [RESET]: handleReset,
})
