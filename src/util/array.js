export const remove = (index, count, list) => {
  const newList = []
  for (const [key, value] of list.entries()) {
    if (key < index || key >= index + count) newList.push(value)
  }
  return newList
}
