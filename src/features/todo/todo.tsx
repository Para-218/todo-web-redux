/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { selectItems, addTodo, deleteTodo, editTodo, TodoState } from './reducer'
import styles from './Todo.module.css'

export function Todo() {
  const items = useAppSelector(selectItems)
  const dispatch = useAppDispatch()
  const [message, setMessage] = useState('')
  const [targetDate, setTargetDate] = useState('')

  function onAddTodo() {
    dispatch(addTodo(message, new Date(targetDate)))
    setMessage('')
  }

  function onDeleteTodo(index: number) {
    dispatch(deleteTodo(index))
    setMessage('')
  }

  function onEditTodo(index: number) {
    dispatch(addTodo(message, new Date(targetDate)))
    dispatch(deleteTodo(index))
    setMessage('')
  }

  const mmm = items.map((value, index) => {
    return (
      <tr key={index}>
        <td>
          <input className={styles.textbox} defaultValue={value.title} />
        </td>
        <td>
          <input className={styles.textbox} defaultValue={value.date} />
        </td>
        <td>
          <input className={styles.textbox} defaultValue={value.completed ? 'completed' : 'uncompleted'} />
        </td>
        <td>
          <button className={styles.button} onClick={() => onDeleteTodo(index)}>
            Delete
          </button>
          <button className={styles.button} onClick={() => onEditTodo(index)}>
            Edit
          </button>
        </td>
        <td></td>
      </tr>
    )
  })

  return (
    <div>
      <h3>Mini Todo App</h3>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label='Set todo title'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder='description'
        />
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          type='date'
          value={targetDate}
          onChange={(e) => setTargetDate(e.target.value)}
        />
      </div>
      <div className={styles.row}>
        <button className={styles.button} onClick={() => onAddTodo()}>
          Add task
        </button>
        {/* <button className={styles.asyncButton} onClick={() => dispatch(incrementSaga(incrementValue))}>
          Add Async Saga
        </button> */}
      </div>
      <div className={styles.row}>
        <table>
          <thead>
            <tr>
              <th>Description</th>
              <th>Target Date</th>
              <th>Completed</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>{mmm}</tbody>
        </table>
      </div>
    </div>
  )
}

// export class TodoList extends React.Component {
//   constructor(props: TodoState) {
//     super(props)
//     this.state = {items: []}
//   }

//   onDeleteTodo = (index: number) => {
//     const items = useAppSelector(selectItems)
//     const dispatch = useAppDispatch()
//     dispatch(deleteTodo(index))
//   }

//   render() {
//     const items: JSX.Element[] = []

//     const mmm = this.state.items.map((value, index) => {
//       return (
//         <tr key={index}>
//           <td>
//             <input className={styles.textbox} defaultValue={value.title} />
//           </td>
//           <td>
//             <input className={styles.textbox} defaultValue={value.date} />
//           </td>
//           <td>
//             <input className={styles.textbox} defaultValue={value.completed ? 'completed' : 'uncompleted'} />
//           </td>
//           <td>
//             <button className={styles.button} onClick={() => this.onDeleteTodo(index)}>
//               Delete
//             </button>
//             <button className={styles.button} onClick={() => this.onDeleteTodo(index)}>
//               Edit
//             </button>
//           </td>
//           <td></td>
//         </tr>
//       )
//     })

//     return (
//       <table>
//         <tbody>{mmm}</tbody>
//       </table>
//     )
//   }
// }
