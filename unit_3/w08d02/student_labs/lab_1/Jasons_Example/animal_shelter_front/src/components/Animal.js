import React from "react";
import { useState } from 'react';
import Edit from './Edit';

const Animal = (props) => {
  const [edit, setEdit] = useState(false)

  const toggleEdit = () => {
    setEdit(!edit)
  }

  return (
    <div>
      {edit ?
        <Edit 
          toggleEdit={toggleEdit} 
          setEdit={setEdit}
          animal={props.animal} 
          handleDelete={props.handleDelete} 
          getAnimals={props.getAnimals} 
        />
        :
        <>
          <div key={props.animal._id} className='card'>
            <h2>{props.animal.name}</h2>
            <h5>{props.animal.species}</h5>
            <img className='cardPic' src={props.animal.image} alt={props.animal.image} />
            <hr />
            <button className='purple' onClick={() => { toggleEdit() }}>EDIT</button>
          </div>
        </>}
    </div>

  )
}

export default Animal;
