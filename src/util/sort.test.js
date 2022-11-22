import { sort } from './sort'

describe('sort()', () => {
  it('sorts by state, done last', () => {
    const state = [
      { name: 'a', done: false },
      { name: 'b', done: true },
      { name: 'c', done: false },
    ]

    const newState = sort(state)

    expect(newState).toEqual([
      { name: 'a', done: false },
      { name: 'c', done: false },
      { name: 'b', done: true },
    ])
  })

  it('leave existing sorting (false)', () => {
    const state = [
      { name: 'a', done: false },
      { name: 'b', done: false },
      { name: 'c', done: false },
    ]
    const newState = sort(state)
    expect(newState).toEqual([
      { name: 'a', done: false },
      { name: 'b', done: false },
      { name: 'c', done: false },
    ])
  })

  it('leave existing sorting (true)', () => {
    const state = [
      { name: 'a', done: true },
      { name: 'c', done: true },
      { name: 'b', done: true },
    ]
    const newState = sort(state)
    expect(newState).toEqual([
      { name: 'a', done: true },
      { name: 'c', done: true },
      { name: 'b', done: true },
    ])
  })

  it('defaults to done:false without done', () => {
    const state = [
      { name: 'a', done: false },
      { name: 'b', done: true },
      { name: 'c' },
    ]

    const newState = sort(state)

    expect(newState).toEqual([
      { name: 'a', done: false },
      { name: 'c' },
      { name: 'b', done: true },
    ])
  })
})
