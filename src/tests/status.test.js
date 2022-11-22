import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import App from 'components/App'

describe('Mark as done', () => {
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

  it('items marked as done are displayed visually distinct', async () => {
    render(<App />)
    const elementsBefore = await screen.queryAllByTestId('todoitem-name')

    const element = elementsBefore[2]
    fireEvent.click(element)

    const elementAfter = await screen.queryAllByTestId('todoitem-name')
    elementAfter.map((element) => {
      if (element.textContent === 'todo #3') {
        expect(element).toHaveAttribute('todoitem-state', 'done')
      }
    })
  })

  it('items marked as done are sorted below the items marked as todo', async () => {
    render(<App initialState={state} />)
    const elementsBefore = await screen.queryAllByTestId('todoitem-name')

    const element = elementsBefore[2]
    fireEvent.click(element)

    const elementsAfter = await screen.queryAllByTestId('todoitem-name')
    const namesAfter = elementsAfter.map((x) => x.textContent)
    expect(namesAfter).toEqual(['todo #1', 'todo #2', 'todo #4', 'todo #3'])
  })
})
