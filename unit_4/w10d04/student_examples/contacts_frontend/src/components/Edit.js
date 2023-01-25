import {useState, useEffect} from 'react'

const Edit = (props) => {

    let emptyPerson = {name: '', age: ''}
    const [person, setPerson] = useState({...props.person})

    const handleChange = (e) => {
        setPerson({...person, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.handleUpdate(person)
    }

    return(
        <>
            <details>
                <summary>Edit Person</summary>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='name'>Name: </label>
                    <input type = 'text' name = 'name' value = {person.name} onChange={handleChange}/>
                    <br />
                    <br />
                    <label htmlFor='age'>Age: </label>
                    <input type='number' name='age' value={person.age} onChange={handleChange} />
                    <input type='submit' />
                </form>
            </details>
        </>
    )
}

export default Edit