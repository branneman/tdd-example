import './index.css'

export default function TodoList(props) {
  const { state, dispatch } = props

  const remove = (index) => () => dispatch({ type: 'remove', payload: index })

  return (
    <ol className='todo__list'>
      {state.map((item, index) => (
        <li key={index} className='todo__item'>
          <p data-testid='todoitem-name'>{item.name}</p>
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
