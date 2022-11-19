import { useRef } from 'react'
import './index.css'

export default function AddTodo(props) {
  const { dispatch } = props

  const name = useRef(null)

  const submit = (evt) => {
    evt.preventDefault()
    dispatch({ type: 'add', payload: name.current.value })
    name.current.value = ''
  }

  return (
    <form onSubmit={submit} className='addtodo__form'>
      <input
        ref={name}
        type='text'
        className='addtodo__input'
        data-testid='addtodo-input'
        placeholder='buy milk'
      />
    </form>
  )
}
