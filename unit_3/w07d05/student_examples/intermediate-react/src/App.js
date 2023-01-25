import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Character from './components/character'

const App = () => {

  const [characters, setCharacters] = useState(['snow white', 'stitch', 'mona'])
  const [inMovie, setInMovie] = useState(true)

  const getCharacters = () => {
    axios.get('https://api.disneyapi.dev/characters').then((response) => {
      setCharacters(response.data.data);
    }) 
  }

  useEffect(() => {
    getCharacters()
  }, []) 


  return (
    <div>
      <h1>App</h1>
      <ul>
        {characters.map((characterParam, index) => {
          return (
            <Character character={characterParam} key={characterParam._id} />
            )
        })}
      </ul>
    </div>
  )

}

export default App