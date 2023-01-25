import {useState, useEffect} from 'react'

const Add = (props) => {
    let emptyPerson = {name: '', age: ''}
    const [person, setPerson] = useState(emptyPerson)

    const handleChange = (e) => {
        setPerson({...person, [e.target.name]: e.target.value})
        // THE CODE ABOVE REPLACES CODE BELOW 
        // setPerson({name: person.name, age: person.age})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.handleCreate(person)
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Name: </label>
                <input type='text' value={person.name} name='name' onChange={handleChange}/>
                <br />
                <br />
                <label htmlFor='age'>Age: </label>
                <input type='number' name='age' value={person.age} onChange={handleChange}/>
                <br />
                <br />
                <input type='submit' />
            </form>
        </>
    )

}

export default Add