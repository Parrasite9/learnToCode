### Setup

https://media.git.generalassemb.ly/user/1611/files/fd8da420-a063-4dc4-ba79-29545932bc7f

1. Get the Django API that's in todays student_examples up and running.
1. Make a new project via create react app in today's student_examples directory
   `npx create-react-app contacts_frontend`.
1. Delete templete code in `App.js` and replace with:

    ```js
    import React, { useState, useEffect } from 'react'

    const App = () => {
      return (
        <>
          <h1>App</h1>
        </>
      )
    }

    export default App
    ```

### Read

https://media.git.generalassemb.ly/user/1611/files/905042aa-7988-4cde-a579-2b66cae2d908

1. Add state to the `App` component:

    ```js
    let [people, setPeople] = useState([])
    ```

1. Add axios `npm i axios`.
1. Import axios `import axios from 'axios'`.
1. Fetch and log people using axios and useEffect:

    ```js
    const getPeople = () => {
     axios
       .get('http://localhost:8000/api/contacts')
       .then(
         (response) => setPeople(response.data),
         (err) => console.error(err)
       )
       .catch((error) => console.error(error))
    }

    useEffect(() => {
     getPeople()
    }, [])
    ```

1. Check react dev tools to see if state was set properly.
  <br/>![devtools](https://i.imgur.com/qwb9RyR.png)

https://media.git.generalassemb.ly/user/1611/files/5e3ddea6-6561-4e90-8f59-956716a5ed8e

1. Add our map functionality to display values on the page:

    ```js
    <div className="people">
     {people.map((person) => {
       return (
         <div className="person" key={person.id}>
           <h4>Name: {person.name}</h4>
           <h5>Age: {person.age}</h5>
         </div>
       )
     })}
    </div>
    ```

### Create

https://media.git.generalassemb.ly/user/1611/files/e457374e-72da-45e2-a8b7-8ad9cd427581

- `mkdir src/components`
- `touch src/components/Add.js`

1. Create our basic `Add` form component with pieces of state for each value we need to pass up to ("lift" up to)`App.js`.

    ```js
    import React, { useState, useEffect } from 'react'

    //only need props as a param if we are passing in props to this component (we are going to here).
    const Add = (props) => {
      let emptyPerson = { name: '', age: '' }
      const [person, setPerson] = useState(emptyPerson)
      return (
        <>
          <form>
            <label htmlFor="name">Name: </label>
            <input type="text" name="name" />
            <br />
            <br />
            <label htmlFor="age">Age: </label>
            <input type="number" name="age" />
            <input type="submit"/>
          </form>
        </>
      )
    }

    export default Add
    ```

1. Write our create functions (handleSubmit/handleChange):

https://media.git.generalassemb.ly/user/1611/files/be5aa171-cd13-48fa-86bc-05e803fbad1b

 ```js
 const handleChange = (event) => {
   setPerson({ ...person, [event.target.name]: event.target.value })
 }

 const handleSubmit = (event) => {
   event.preventDefault()
   props.handleCreate(person)
 }
 ```

1. Update our form with the proper properties and functions attached:

https://media.git.generalassemb.ly/user/1611/files/0fea51a4-241e-470e-9583-93915a96deb0

 ```js
 <form onSubmit={handleSubmit}>
   <label htmlFor="name">Name: </label>
   <input type="text" name="name" value={person.name} onChange={handleChange} />
   <br />
   <br />
   <label htmlFor="age">Age: </label>
   <input type="number" name="age" value={person.age} onChange={handleChange} />
   <input type="submit" />
 </form>
 ```

1. In `App.js`, write our function for handling the creation of the new person after lifting state from the `Add` component:

https://media.git.generalassemb.ly/user/1611/files/393bfa91-840b-4175-a482-b2f2aed7b68c

 ```js
 const handleCreate = (addPerson) => {
   axios
     .post('http://localhost:8000/api/contacts', addPerson)
     .then((response) => {
       console.log(response)
       getPeople()
     })
 }
 ```

1. Render `Add` in `App.js` and pass in handleCreate as a prop:

    ```js
    <>
      <Add handleCreate={handleCreate} />
      <div className="people">
        {people.map((person) => {
          return (
            <div className="person" key={person.id}>
              <h4>Name: {person.name}</h4>
              <h5>Age: {person.age}</h5>
            </div>
          )
        })}
      </div>
    </>
    ```

### Delete

https://media.git.generalassemb.ly/user/1611/files/ff96a407-f12a-4c37-98f4-789b724a011d

1. Create our delete function:

    ```js
    const handleDelete = (event) => {
      axios
        .delete('http://localhost:8000/api/contacts/' + event.target.value)
        .then((response) => {
          getPeople()
        })
    }
    ```

1. Create our delete button:

    ```js
    <button onClick={handleDelete} value={person.id}>
      X
    </button>
    ```

### Update

https://media.git.generalassemb.ly/user/1611/files/015dd460-85a8-48cb-ac4c-523d4fbb9592

- `touch src/components/Edit.js`

1. Create our `Edit` component:

    ```js
    import React, { useState } from 'react'

    const Edit = (props) => {
      let emptyPerson = { name: '', age: '' }
      const [person, setPerson] = useState(emptyPerson)

      return (
        <>
          <details>
            <summary>Edit Person</summary>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Name: </label>
              <input
                type="text"
                name="name"
                value={person.name}
                onChange={handleChange}
              />
              <br />
              <br />
              <label htmlFor="age">Age: </label>
              <input
                type="number"
                name="age"
                value={person.age}
                onChange={handleChange}
              />
              <input type="submit" />
            </form>
          </details>
        </>
      )
    }

    export default Edit
    ```

1. And then in Edit.js:

https://media.git.generalassemb.ly/user/1611/files/4280afc1-a176-47b3-9b10-b1579e864de6

 ```js
 const handleChange = (event) => {
   setPerson({ ...person, [event.target.name]: event.target.value })
 }

 const handleSubmit = (event) => {
   event.preventDefault()
   props.handleUpdate(person)
 }
 ```

1. Create our functions for update in `App.js` first:

https://media.git.generalassemb.ly/user/1611/files/7847583c-ea08-4802-8bba-3cf911a306ac

 ```js
 const handleUpdate = (editPerson) => {
   console.log(editPerson)
   axios
     .put('http://localhost:8000/api/contacts/' + editPerson.id, editPerson)
     .then((response) => {
       getPeople()
     })
 }
 ```

1. Next, let's render `Edit` in `App.js` and pass in our handleUpdate function. We are also going to need the id of the person to pass into the edited person:

    ```js
    <div className="person" key={person.id}>
      <h4>Name: {person.name}</h4>
      <h5>Age: {person.age}</h5>
      <Edit handleUpdate={handleUpdate} person={person} />
      <button onClick={handleDelete} value={person.id}>
        X
      </button>
    </div>
    ```

1. Lastly, let's update the initial state of `Edit` to include the id of the person that we passed in:

    ```js
    const [person, setPerson] = useState({...props.person})
    ```
