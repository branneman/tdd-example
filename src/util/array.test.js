import { remove } from './array'

describe('remove()', () => {
  it('will remove items from index 0', () => {
    const xs = ['a', 'b', 'c', 'd', 'e']
    const ys = remove(0, 1, xs)
    expect(ys).toEqual(['b', 'c', 'd', 'e'])
  })

  it('will remove items from index 2', () => {
    const xs = ['a', 'b', 'c', 'd', 'e']
    const ys = remove(2, 2, xs)
    expect(ys).toEqual(['a', 'b', 'e'])
  })

  it('always returns a new array', () => {
    const xs = ['a', 'b', 'c', 'd', 'e']
    const ys = remove(0, 0, xs)
    expect(ys).not.toBe(xs)
  })

  it('removes the end if count is too large', () => {
    const xs = ['a', 'b', 'c', 'd', 'e']
    const ys = remove(3, 3, xs)
    expect(ys).toEqual(['a', 'b', 'c'])
  })

  it('retains the entire list if start is too large', () => {
    const xs = ['a', 'b', 'c', 'd', 'e']
    const ys = remove(10, 3, xs)
    expect(ys).toEqual(['a', 'b', 'c', 'd', 'e'])
  })
})
