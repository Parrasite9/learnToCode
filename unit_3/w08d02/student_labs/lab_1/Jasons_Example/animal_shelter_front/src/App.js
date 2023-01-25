import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Animal from './components/Animal';
import Add from './components/Add';


const App = () => {

  const [animals, setAnimals] = useState([])
  const [add, setAdd] = useState(false)


  //---------------------------------------------
  //        ADD ANIMAL TOGGLE (CREATE)
  //---------------------------------------------
  const addAnimal = () => {
    setAdd(!add)
  }

  //---------------------------------------------
  //        GET ANIMALS (READ)
  //---------------------------------------------
  const getAnimals = () => {
    axios.get('http://localhost:3000/animals')
      .then((response) => {
        setAnimals(response.data)
      })
  }
  //---------------------------------------------
  //        DELETE FUNCTION
  //---------------------------------------------
  const handleDelete = (animalData) => {
    axios.delete(`http://localhost:3000/animals/${animalData._id}`)
      .then(() => {
        axios.get('http://localhost:3000/animals')
          .then((response) => {
            setAnimals(response.data)

          })
      })
  }

  //---------------------------------------------
  //        EDIT FUNCTION (UPDATE)
  //---------------------------------------------
  // const handleReserveUpdate = (animalData) => {
  //   axios.put(`http://localhost:3000/animals/${animalData._id}`,{
  //       name: animalData.name,
  //       species: animalData.species,
  //       image: animalData.image,
  //       reservedForAdoption: animalData.reserve
  //     }).then(() => {
  //     axios.get('http://localhost:3000/animals')
  //       .then((response) => {
  //         setAnimals(response.data)
  //       })
  //   })
  // }


  useEffect(() => {
    getAnimals()
  }, [])

  return (
    <main>
      <div className='background'>
        <h1>Sunny Animal Shelter</h1>
        {add ? 
          <>
            <button className='blue' onClick={addAnimal}>GO BACK</button>
            <Add setAdd={setAdd} getAnimals={getAnimals} />
          </>
          : 
          <>
            <button className='blue' onClick={addAnimal}>ADD ANIMAL</button>
            <h2>Curent Pets Looking for a Home:</h2>
            <div className='cardContainer'>
              {animals.map((animal, index) => {
                return (
                  animal.reservedForAdoption ?  
                    <></> 
                    : 
                    <Animal key={index}  
                      animal={animal} 
                      handleDelete={handleDelete} 
                      setAnimals={setAnimals} 
                      getAnimals={getAnimals} 
                    />
                )
              })}
            </div>
            <h2>Pets That Have Found a Home:</h2>
            <div className='cardContainer'>
              {animals.map((animal, index) => {
                  return (
                    animal.reservedForAdoption ?  
                      <Animal key={index} 
                        animal={animal} 
                        handleDelete={handleDelete} 
                        setAnimals={setAnimals} 
                        getAnimals={getAnimals} 
                      /> 
                      : 
                      <></>
                  )
              })}
            </div> 
          </>}
      </div>
    </main>
  )
}

export default App;
