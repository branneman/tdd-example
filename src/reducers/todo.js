function reducer(state, action) {
  switch (action.type) {
    case 'add':
      if (action.payload === '') return state
      const newItem = { name: action.payload }
      return [newItem].concat(state)

    case 'remove':
      const newState = state.slice() // clone because splice() mutates
      newState.splice(action.payload, 1) // splice() returns the removed elements
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
