import {useState, useEffect} from 'react'
import axios from 'axios'

import Character from './components/Character'

const App = () => {
  let [characters, setCharacters] = useState([])

  const getCharacters = () => {
    axios.get('https://api.disneyapi.dev/characters').then((response) => {
      setCharacters(response.data.data)
    })
  }

  useEffect(() => {
    getCharacters()
  }, [])

  return (
    <div>
      {characters.map((character) => {
        return (
          <div key={character._id}>
            <Character character={character}/>
          </div>
        )
      })}
    </div>
  )
}

export default App;


/*const App = () => {
  let [characters, setCharacters] = useState([{name: 'snow white', inMovie: true}, {name: 'stitch', inMovie: false}, {name: 'moana', inMovie: true}])

  return (
    <div>
      <h1>App Component</h1>
      <ul>
        {characters.map((character) => {
          return (
            <>
              {character.inMovie ? <li>Is in movie: {character.name}</li> : <li>Not in movie: {character.name}</li>}
            </>
          )
        })}
      </ul>
    </div>
  )
}
*/
