import { reducer } from 'reducers/todo'

describe('todo reducer', () => {
  describe('action: add', () => {
    it('adds an item to the beginning of the list', () => {
      const state = []
      const action = { type: 'add', payload: 'foo' }

      const newState = reducer(state, action)

      expect(newState).toStrictEqual([{ name: 'foo' }])
    })

    it('leaves the existing items as-is', () => {
      const state = [{ name: 'bar' }, { name: 'baz', really: 'yes' }]
      const action = { type: 'add', payload: 'foo' }

      const newState = reducer(state, action)

      expect(newState).toStrictEqual([
        { name: 'foo' },
        { name: 'bar' },
        { name: 'baz', really: 'yes' },
      ])
    })

    it('doesnt add items with empty names', () => {
      const state = [{ name: 'foo' }]
      const action = { type: 'add', payload: '' }

      const newState = reducer(state, action)

      expect(newState).toStrictEqual([{ name: 'foo' }])
    })
  })

  describe('action: remove', () => {
    it('removes an item from the list', () => {
      const state = [
        { name: 'foo' },
        { name: 'bar' },
        { name: 'baz', really: 'yes' },
      ]
      const action = { type: 'remove', payload: 1 }

      const newState = reducer(state, action)

      expect(newState).toStrictEqual([
        { name: 'foo' },
        { name: 'baz', really: 'yes' },
      ])
    })
  })
})
