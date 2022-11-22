import { remove } from 'util/array'

function reducer(state, action) {
  switch (action.type) {
    case 'add':
      if (action.payload === '') return state
      const newItem = { name: action.payload }
      return [newItem].concat(state)

    case 'remove':
      return remove(action.payload, 1, state)

    case 'toggle':
      const newState = state.slice()
      newState[action.payload].done = !newState[action.payload].done
      return newState

    default:
      throw new Error(`Unknown action.type: ${action.type}`)
  }
}

const initialState = [
  {
    name: 'make example app',
  },
  {
    name: 'turn on screen recording',
  },
  {
    name: 'add a feature, tdd-style',
  },
  {
    name: 'upload video to youtube',
  },
]

export { reducer, initialState }
