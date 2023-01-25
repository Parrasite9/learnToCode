import React from "react";
import { useState } from 'react';
import axios from 'axios';



const Add = (props) => {

  const [name, setName] = useState()
  const [species, setSpecies] = useState()
  const [image, setImage] = useState()

  //-----------------------------------------------
  //      NEW ANIMAL
  //-----------------------------------------------
  //  LISTEN FOR NAME AND UPDATE STATE
  const handleName = (event) => {
    setName(event.target.value)
  }
  //  LISTEN FOR SPECIES AND UPDATE STATE
  const handleSpecies = (event) => {
    setSpecies(event.target.value)
  }
  //  LISTEN FOR IMAGE AND UPDATE STATE
  const handleImage = (event) => {
    setImage(event.target.value)
  }
  //  SEND STATES TO DATABASE WHEN SUBMITTING FORM
  const handleAddAnimal = (event) => {
    event.preventDefault()
    axios.post(`http://localhost:3000/animals/`,{
        name: name,
        species: species,
        image: image
      }).then(() => {
      props.setAdd(false)
      props.getAnimals()
    })
  }

  return (
    <>
      <h2>Add New Animal Looking for a Home:</h2>
      <form onSubmit={handleAddAnimal}>
        <input type='text' name='name' placeholder='name' required onChange={handleName} /><br />
        <input type='text' name='species' placeholder='species' required onChange={handleSpecies} /><br />
        <input type='text' name='image' placeholder='img url' required onChange={handleImage} /><br />
        <input type='submit' class='blue' value='SUBMIT' />
      </form>
    </>

  )
}

export default Add;
