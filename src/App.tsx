/* eslint-disable no-debugger */
/* eslint-disable @typescript-eslint/no-unused-vars */
import './assets/styles/app.css'
import CounterConnect, { Counter, CounterClass } from './features/counter/Counter'
import { Todo } from './features/todo/todo'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <CounterConnect />
        <Todo />
      </header>
    </div>
  )
}

export default App
