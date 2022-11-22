import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import App from 'components/App'

describe('Removing a todo', () => {
  const state = [
    {
      name: 'todo #1',
    },
    {
      name: 'todo #2',
    },
    {
      name: 'todo #3',
    },
    {
      name: 'todo #4',
    },
  ]

  it('removes a todo item by clicking the delete button', async () => {
    render(<App initialState={state} />)
    const btn = await screen.queryAllByTestId('todoitem-delete')
    expect(btn.length).toBe(state.length)

    // Remove 'todo #2', leave the rest
    fireEvent.click(btn[1])

    const itemNames = await screen.queryAllByTestId('todoitem-name')
    itemNames.map((itemName) => {
      expect(itemName).not.toEqual('todo #2')
    })
  })
})
