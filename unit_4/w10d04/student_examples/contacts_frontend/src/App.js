import {useState, useEffect} from 'react'
import axios from 'axios'

import Add from './components/Add.js'
import Edit from './components/Edit.js'

const App = () => {

  let [people, setPeople] = useState([])

  const handleDelete = (e) => {
    axios.delete('http://localhost:8000/api/contacts/' + e.target.value).then((response) => {
      console.log(response);
      getPeople()
    })
  }

  const handleCreate = (addPerson) => {
    axios.post('http://localhost:8000/api/contacts', addPerson).then((response) => {
      console.log(response);
      getPeople()
    })
  }


  const getPeople = () => {
    axios.get('http://localhost:8000/api/contacts').then((response) => 
    setPeople(response.data), (err) => console.error(err)
      )
   }

   const handleUpdate = (editPerson) => {
    axios.put('http://localhost:8000/api/contacts/' + editPerson.id, editPerson).then((response) => {
      getPeople()
    })
   }



  useEffect (() => {
    getPeople()
  }, [])
  return (
    <>
      <h1>Hello World</h1>
      <Add handleCreate={handleCreate}/>
      <div className='people'>
        {
          people.map((person) => {
            return (
              <div className='person' key={(person.id)}>
                <h4>Name: {person.name}</h4>
                <h5>Age: {person.age}</h5>
                <Edit handleUpdate={handleUpdate} person={person}/>
                <button onClick={handleDelete} value={person.id}>x</button>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default App