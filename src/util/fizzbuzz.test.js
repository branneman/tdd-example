import { fizzbuzz } from './fizzbuzz'

describe('fizzbuzz', () => {
  it('number in, string out', () => {
    const r = fizzbuzz(2)
    expect(r).toEqual('2')
  })

  it('multiples of 3: return Fizz', () => {
    const r = fizzbuzz(9)
    expect(r).toEqual('Fizz')
  })

  it('multiples of 5: return Buzz', () => {
    const r = fizzbuzz(10)
    expect(r).toEqual('Buzz')
  })

  it('multiples of 3 and 5: return FizzBuzz', () => {
    const r = fizzbuzz(15)
    expect(r).toEqual('FizzBuzz')
  })
})
