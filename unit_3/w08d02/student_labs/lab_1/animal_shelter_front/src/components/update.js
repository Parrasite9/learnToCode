import {useState, useEffect} from 'react'
import axios from 'axios'

const Update = (props) => {
    const [updateHandleNewName, setUpdateHandleNewName] = useState()
    const [updateHandleNewSpecies, setUpdateHandleNewSpecies] = useState()
    const [updateHandleNewImage, setUpdatHandleNewImage] = useState()
    const [updateHandleNewReservedForAdoption, setUpdateHandleNewReservedForAdoption] = useState(false) 
    
    const handleUpdateDescription = (animalData) => {
        axios.put(`http://localhost:3000/animal/${animalData._id}`,
        {
          name: updateHandleNewName,
          species: updateHandleNewSpecies,
          image: updateHandleNewImage,
          reservedForAdoption: updateHandleNewReservedForAdoption
        }).then((response) => {
          axios.get('http://localhost:3000/animal').then((response) => {
            props.setNewAnimal(response.data)
          })
        })
      }

      const updateName = (e) => {
        setUpdateHandleNewName(e.target.value)
      }

      const updateSpecies = (e) => {
        setUpdateHandleNewSpecies(e.target.value)
      }

      const updatedImage = (e) => {
        setUpdatHandleNewImage(e.target.value)
      }

      const updateAdoption = (e) => {
        setUpdateHandleNewReservedForAdoption(e.target.checked)
      }

    return (
        <>
            <form onSubmit={() => {
            handleUpdateDescription(props.animal)}}>
            <input placeholder='Name' onChange={updateName} defaultValue={props.animal.name}/> <br />


            <input placeholder='Species' onChange={updateSpecies} defaultValue={props.animal.species}/> <br />


            <input placeholder='Image' onChange={updatedImage} defaultValue={props.animal.image}/> <br />


            Reserved For Adoption: <input type="checkbox" onChange={updateAdoption} defaultChecked={props.animal.reservedForAdoption}/> <br />


            <input type="submit" value="Update Animal" />
          </form>
        
        
        <li onClick={() => {
            props.handleToggleComplete(props.animal)
          }}>            


            {props.animal.reservedForAdoption ? (
              <h1>First part of turn</h1>
            ) : (
              <>
              {/* <div className='grid-container'> */}
                <h2>{props.animal.reservedForAdoption}</h2><br />
                <h3>{props.animal.name}</h3><br />
                <p>{props.animal.species}</p><br />
                <img src={props.animal.image} /><br />
              {/* </div> */}

              </>
            )}


            <button onClick={(e) => {
              props.handleDelete(props.animal)
            }}>DELETE</button>


            <button onClick={(e) => {
              props.reservedForAdoption(true)
            }}>Found Home</button>
          </li>
          </>
    )
}

export default Update