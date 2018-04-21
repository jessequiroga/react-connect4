import {
  TOGGLE_INTRODUCTION,
} from '../constants/ActionTypes'

const initialState = {
    show: false
}

export default function introduction (state = initialState, action) {
  switch (action.type) {
    case TOGGLE_INTRODUCTION:
        return Object.assign({}, introduction, {
            show: !state.show
        })

    default:
      return state
  }
}
