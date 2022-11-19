import React, { useReducer } from 'react'
import { reducer, initialState as defaultInitialState } from 'reducers/todo'
import TodoList from 'components/TodoList'
import AddTodo from 'components/AddTodo'
import './index.css'

export default function App(props) {
  const initialState =
    Array.isArray(props.initialState) && props.initialState.length
      ? props.initialState
      : defaultInitialState
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <React.StrictMode>
      <main className='outer'>
        <header className='header'>
          <h1>todos</h1>
        </header>
        <section className='main'>
          <AddTodo dispatch={dispatch} />
        </section>
        <section className='main'>
          <TodoList state={state} dispatch={dispatch} />
        </section>
      </main>
    </React.StrictMode>
  )
}
