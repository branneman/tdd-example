import { sort } from 'util/sort'
import './index.css'

export default function TodoList(props) {
  const { state, dispatch } = props

  const remove = (index) => () => dispatch({ type: 'remove', payload: index })
  const toggle = (index) => () => dispatch({ type: 'toggle', payload: index })

  const sortedState = sort(state)

  return (
    <ol className='todo__list'>
      {sortedState.map((item, index) => (
        <li key={index} className='todo__item'>
          <p
            onClick={toggle(index)}
            data-testid='todoitem-name'
            todoitem-state={item.done ? 'done' : 'todo'}
            className={item.done ? 'todo__item--done' : 'todo__item--todo'}
          >
            {item.name}
          </p>
          <button
            onClick={remove(index)}
            className='todo__remove'
            data-testid='todoitem-delete'
          >
            🗑️
          </button>
        </li>
      ))}
    </ol>
  )
}
