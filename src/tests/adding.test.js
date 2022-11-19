import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import App from 'components/App'

describe('Adding a todo', () => {
  it('add a todo item by typing and pressing enter', async () => {
    const txt = 'added todo #1'
    render(<App />)
    const input = await screen.getByTestId('addtodo-input')

    fireEvent.change(input, { target: { value: txt } })
    fireEvent.submit(input)

    expect(await screen.findByText(txt)).toBeVisible()
  })

  it('disallows adding an empty todo item', async () => {
    render(<App />)
    const input = await screen.getByTestId('addtodo-input')

    fireEvent.change(input, { target: { value: '' } })
    fireEvent.submit(input)

    const itemNames = await screen.queryAllByTestId('todoitem-name')
    itemNames.map((itemName) => expect(itemName).not.toBeEmptyDOMElement())
  })
})
