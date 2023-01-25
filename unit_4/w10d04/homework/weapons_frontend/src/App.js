import {useState, useEffect} from 'react'
import axios from 'axios'
import Add from './components/Add.js'
import Edit from './components/Edit.js'

const App = () => {
  let [weapons, setWeapons] = useState([])

  // READ FUNCTION
  const getWeapons = () => {
    axios.get('http://localhost:8000/api/weapons').then((response) =>
    setWeapons(response.data), (err) => 
    console.log(err))
  }

  // CREATE FUNCTION 
  const handleCreate = (addWeapon) => {
    axios.post('http://localhost:8000/api/weapons', addWeapon).then((response) => {
        console.log(response);
        // READ FUNCTION 
        getWeapons()
    })
}

const handleUpdate = (editWeapon) => {
  console.log(editWeapon);
  axios.put('http://localhost:8000/api/contacts/' + editWeapon.id, editWeapon).then((response) => {
    getWeapons()
  })
}

  // DELETE FUNCTION 
  const handleDelete = (e) => {
    axios.delete('http://localhost:8000/api/weapons/' + e.target.value).then((response) => {
      getWeapons()
    })
  }

  useEffect(() => {
    getWeapons()
  }, [])

  return (
    <>
      <Add handleCreate={handleCreate} />

      <div className='weapons'>
        {weapons.map((weapon) => {
          return (
            <div className='weapon' key={weapon.id}>
              <h4>Name: {weapon.name} </h4>
              <h5>Century: {weapon.century}</h5>
              <h5>Gender Specific: {weapon.gender_specific} </h5>
              <Edit handleUpdate={handleUpdate} value={weapon.id} />
              <button onClick={handleDelete} value={weapon.id} >x</button>
            </div>
          )
        })}

      </div>
    </>
  )
}

export default App