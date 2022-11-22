export const sort = (state) => {
  const comp = (a, b) => {
    return Boolean(a.done) - Boolean(b.done)
  }
  return state.sort(comp)
}
