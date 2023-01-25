import {useState, useEffect} from 'react'
import axios from 'axios'

import Title from './components/title.js'
import Update from './components/update.js'

const App = () => {

  // ======================================
  //                 HOOK
  // ======================================

  const [reservedForAdoption, setReservedForAdoption] = useState(false)
  const [newName, setNewName] = useState('')
  const [newSpecies, setNewSpecies] = useState('')
  const [newImage, setNewImage] = useState('')
  const [newAnimal, setNewAnimal] = useState([])
  const [adoptionReady, setAdoptionReady] = useState(true)
  const [adoptionCompleted, setAdoptionCompleted] = useState(false)

  
  // e is short for event. This is a paramater name and can be anything (e.g. XYZ)
  // THIS ACCEPTS NEW NAME VALUE
  const handleNewName = (e) => {
    // console.log(e.target.value);
    setNewName(e.target.value)
    // console.log(newName);
  }

  // THIS ACCEPTS SPECIES NAME VALUE
  const handleNewSpecies = (e) => {
    setNewSpecies(e.target.value)
  }

  // THIS ACCEPTS IMAGE VALUE
  const handleNewImage = (e) => {
    setNewImage(e.target.value)
  }

  const handleNewReservedForAdoption = (e) => {
    setReservedForAdoption(e.target.checked)
  }

  const handleDelete = (animalData) => {
    axios.delete(`http://localhost:3000/animal/${animalData._id}`).then(() => {
      axios.get('http://localhost:3000/animal').then((response) => {
        setNewAnimal(response.data)
      })
    })
  }

  const handleUpdateDescription = (animalData) => {
    axios.put(`http://localhost:3000/animal/${animalData._id}`,
    {
      name: newName,
      species: newSpecies,
      image: newImage,
      reservedForAdoption: reservedForAdoption
    }).then((response) => {
      axios.get('http://localhost:3000/animal').then((response) => {
        setNewAnimal(response.data)
      })
    })
  }

  // THIS IS FORM SUBMITTION ACTION
  const handleNewAnimalFormSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3000/animal',
    {
      name: newName,
      species: newSpecies,
      image: newImage,
      reservedForAdoption: reservedForAdoption
    }).then(() => {
      axios.get('http://localhost:3000,animal').then((response) => {
        setNewAnimal(response.data)
      })
    })
  }

  const handleToggleComplete = (animalData) => {
    axios.put(`http://localhost:3000,animal/${animalData._id}`,
    {
      name: animalData.name,
      species: animalData.species,
      image: animalData.image,
      reservedForAdoption: animalData.reservedForAdoption
    }.then(() => {
      axios.get('http://localhost:3000/animal').then((response) => {
        setNewAnimal.apply(response.data)
      })
    }))
  }

  const showAdoptedList = () => {
    setAdoptionCompleted(true)
  }

  useEffect(() => {
    axios.get('http://localhost:3000/animal').then((response) => {
      setNewAnimal(response.data)
    })
  }, [])


  return (
    <>
      <Title />
      
      <form onSubmit={handleNewAnimalFormSubmit}>
        <input placeholder='Name' onChange={handleNewName}/> <br />
        <input placeholder='Species' onChange={handleNewSpecies}/> <br />
        <input placeholder='Image' onChange={handleNewImage}/> <br />
        Reserved For Adoption: <input type="checkbox" onChange={handleNewReservedForAdoption}/> <br />
        <input type="submit" value="Create Animal" />
      </form>

      <section>
        <h2>Animals</h2>
        
        {adoptionReady ? (
          <>
          <div>
            <button onClick={showAdoptedList}>SHOW PREVIOUSLY ADOPTED</button>
          </div>
          </>
        ) : (
          <>
          <button>SHOW ADOPTION AVAILABILITY</button>
          </>
        )}


        <ul>
          {
            newAnimal.map((animal) => {
              return (
              <Update handleToggleComplete={handleToggleComplete} handleDelete={handleDelete} 
              reservedForAdoption={reservedForAdoption} animal={animal} 
              setNewAnimal={setNewAnimal}/>
            )})
          }
        </ul>
      </section>


    {/* {
      animal.reservedForAdoption ? :
    } */}
    </>

  )
}

export default App;
