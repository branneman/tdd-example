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

  it('newly created items are not marked as done by default', async () => {
    const txt = 'added todo #1'
    render(<App />)
    const input = await screen.getByTestId('addtodo-input')

    fireEvent.change(input, { target: { value: txt } })
    fireEvent.submit(input)

    const element = await screen.findByText(txt)
    expect(element).toHaveAttribute('todoitem-state', 'todo')
  })

  it('disallows adding an empty todo item', async () => {
    render(<App />)
    const input = await screen.getByTestId('addtodo-input')

    fireEvent.change(input, { target: { value: '' } })
    fireEvent.submit(input)

    const elementsAfter = await screen.queryAllByTestId('todoitem-name')
    elementsAfter.map((itemName) => expect(itemName).not.toBeEmptyDOMElement())
  })
})
