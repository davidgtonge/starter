import {is, always, T, cond, reduce} from "ramda"

const createReducer = (initialState, spec) => {
  return (state = initialState, action) => {
    return cond([
      [is(Array), reduce((_state, fn) => fn(_state, action), state)],
      [is(Function), fn => fn(state, action)],
      [T, always(state)],
    ])(spec[action.type])
  }
}

export default createReducer
