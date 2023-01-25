import React from "react";
import { useState } from 'react';
import axios from 'axios';

const Edit = (props) => {
    const [newName, setNewName] = useState(props.animal.name)
    const [newSpecies, setNewSpecies] = useState(props.animal.species)
    const [newImage, setNewImage] = useState(props.animal.image)
    const [reserve, setReserve] = useState(props.animal.reservedForAdoption)
    
    const handleNameUpdate = (event) => {
        setNewName(event.target.value)
    }
    const handleSpeciesUpdate = (event) => {
        setNewSpecies(event.target.value)
    }
    const handleImageUpdate = (event) => {
        setNewImage(event.target.value)
    }
    const handleReserve = () => {
        setReserve(!reserve)
    }
    const handleEdit = (event) => {
        event.preventDefault()
        axios.put(`http://localhost:3000/animals/${props.animal._id}`,
            {
                name: newName,
                species: newSpecies,
                image: newImage,
                reservedForAdoption: reserve
            }
        ).then(() => {
            props.setEdit(false)
            props.getAnimals()
        })
    }

    return (
        <div className='editCard card'>
            <form id='editForm' onSubmit={handleEdit}>
                <label>Name:</label><br /><input type='text' name='name' placeholder={props.animal.name} onChange={handleNameUpdate} /><br />
                <label>Species:</label> <br /><input type='text' name='species' placeholder={props.animal.species} onChange={handleSpeciesUpdate} /><br />
                <label>Image Url:</label> <br /><input type='text' name='image' placeholder={props.animal.image} onChange={handleImageUpdate} /><br />
                {props.animal.reservedForAdoption ? 
                    <>
                        <label>Reserved for adoption?</label> <input type='checkbox' onChange={handleReserve} defaultChecked /> 
                    </> 
                    : 
                    <> 
                        <label>Reserved for adoption?</label> <input type='checkbox' onChange={handleReserve} /> 
                    </>}
            </form>
            <img className='cardPic' src={props.animal.image} alt={props.animal.image} />
            <hr />
            <button type='submit' form='editForm' className='green' >UPADTE</button>

            <button className='red' onClick={() => { props.handleDelete(props.animal) }}>DELETE</button><br />
            <button className='purple' onClick={() => { props.toggleEdit() }}>CANCEL</button>
        </div>
    )


}

export default Edit