export const fizzbuzz = (s) => {
  if (s % 3 === 0 && s % 5 === 0) return 'FizzBuzz'
  if (s % 3 === 0) return 'Fizz'
  if (s % 5 === 0) return 'Buzz'
  return String(s)
}
