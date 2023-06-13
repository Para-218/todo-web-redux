import logo from './assets/images/logo.svg'
import { Counter } from './features/counter/Counter'
import './assets/styles/app.css'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <Counter />
      </header>
    </div>
  )
}

export default App
