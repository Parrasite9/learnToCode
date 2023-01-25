import logo from './logo.svg';
import './App.css';
import {useState} from 'react'


const App = () => {
  const [name, setName] = useState('Brendan')

  const changeName = (event) => {
    setName(event.target.value)
  }

  return(
    <div>
      <h1>My First React App</h1>
      <h3>{name}</h3>
      <input type='text' onChange={changeName}/>
    </div>
  )
}

export default App
