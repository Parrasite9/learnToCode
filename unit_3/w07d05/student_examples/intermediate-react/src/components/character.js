import React from 'react'

const Character = (props) => {
    console.log(props.character);
    return (

        <div>
            <hr></hr>
            <p> {props.character.name} </p>
            <img src={props.character.imageUrl} />
        </div>
    )
}

export default Character 