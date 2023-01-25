# Intermediate React

## Objectives

- Use a map to render multiple elements out of an array piece of state.
- User ternary operators to conditionally render elements.
- Pull from a third party api using AJAX (axios).
- Use multiple components.
- Pass props down into lower level components.

## Setup

https://media.git.generalassemb.ly/user/1611/files/9d094a43-93cb-445a-9043-b4c390ba3579

- npx create-react-app intermediate-react
- Delete all starter code in App.js
- npm start to get the app running

## Basic App.js Setup

https://media.git.generalassemb.ly/user/1611/files/f79d2e12-0419-4eb1-b765-c8c9ca94a520

```js
import React, { useState } from 'react'

const App = () => {
  return (
    <div>
      <h1>App</h1>
    </div>
  )
}

export default App
```

## Map over state to create multiple elements

https://media.git.generalassemb.ly/user/1611/files/59cac082-dd19-41a0-83b2-6bbd6cdfaba9

- Lets dynamically create multiple elements based on our state which we will just set as an array of characters for now.
- Basic map syntax:

```js
somearray.map((element) => {
  return something
})
```

https://media.git.generalassemb.ly/user/1611/files/6799fffd-e2ea-4e21-844a-a331b091475e

- Lets add state to our component so we have something to map over:

```js
let [characters, setCharacters] = useState(['snow white', 'stitch', 'moana'])
```

- Then lets map over that array to create an unordered list inside of our return statement:

```js
<ul>
  {characters.map((character) => {
    return <li>{character}</li>
  })}
</ul>
```

### Ternary Operators

https://media.git.generalassemb.ly/user/1611/files/b55f7490-967b-46c3-82e5-7821ddb1045e

- Quick review of ternary operators:

```js
const name = 'brendan'
//if name is 'brendan' result = 'Name is brendan' else result = 'Name is not brendan'
const result = name === 'brendan' ? 'Name is brendan' : 'Name is not brendan'
console.log(result)
```

https://media.git.generalassemb.ly/user/1611/files/948e31bc-1145-4ac7-a426-fb8c399106f4

- Lets incorporate ternary operators into our code. First lets add a piece of state to use as our conditional in the ternary:

```js
let [inMovie, setInMovie] = useState(true)
```

- Next lets adjust our map a bit so that if inStock is true we will have some in stock text if not some out of stock text:

```js
{
  characters.map((character) => {
    return (
      <div>
        {inMovie ? <li>Is in movie: {character}</li> : <li>Not in movie: {character}</li>}
      </div>
    )
  })
}
```

## AJAX and React

https://media.git.generalassemb.ly/user/1611/files/4cd41f7b-12a2-4125-aebc-7c1d963674f2

- Lets start with a barebones React App for our AJAX example.
- We're going to be using an npm package called axios to make all of our requests within react, lets run `npm i axios` and then in App.js under where we pull in react lets add:

```js
import axios from 'axios'
```

- Next we're going to need another hook called useEffect, which will only run once when the application loads.

```js
import React, { useState, useEffect } from 'react'
```

https://media.git.generalassemb.ly/user/1611/files/d5004449-28c6-4ecf-a079-9f3c392494ba

- Now we can make our axios request:

```js
const getCharacters = () => {
  axios.get('https://api.disneyapi.dev/characters').then((response) => {
    setCharacters(response.data.data)
  })
}

// passing an empty array as the second argument will prevent an infinite loop by mounting and then unmounting after it has run once
useEffect(() => {
  getCharacters()
}, [])
```

https://media.git.generalassemb.ly/user/1611/files/e4fec219-d8f6-412e-a431-9d55fd09769e

- Lets render a character name and image inside the map:

```js
return (
  <div>
    <hr/>
    <p>{character.name}</p>
    <img src={character.imageUrl} />
  </div>
)
```

- Complete App.js: 
```js
import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'

const App = () => {

  const [characters, setCharacters] = useState([])

  const getCharacters = () => {
     axios.get('https://api.disneyapi.dev/characters').then((response) => {
        setCharacters(response.data.data)
     })
  }

  useEffect(() => {
     getCharacters()
  }, [])

  return (
    <>
      <h1>Disney Characters</h1>
      {characters.map((character) => {
        return (
          <div>
            <hr/>
            <p>{character.name}</p>
            <img src={character.imageUrl}/>
          </div>
        )
      })}
    </>
  )
}

export default App;
```

## Multiple Components with Props

https://media.git.generalassemb.ly/user/1611/files/919ccfd8-5a3d-4155-9f79-eb3ef0a1c928

- Sometimes our applications will get too big to keep everything in one component, lets refactor our app so that we can have two components.
- First lets mkdir src/components
- Then touch src/components/Character.js
- Lets move our div with the p tag and img tag to the new Character component:

```js
import React from 'react'

const Character = (props) => {
  return (
    <div>
      <hr>
      <p>{props.character.name}</p>
      <img src={props.character.imageUrl} />
    </div>
  )
}

export default Character
```

- Next we need to import our Character component into our App componet:

```js
import Character from './components/Character'
```

https://media.git.generalassemb.ly/user/1611/files/be916201-ce17-4d92-835c-1da63a08cd77

- Lets render the Character component and pass in a character value (Inside of the curly braces. The value comes from state)  as the prop character (the left side of the equal sign. What the prop will be called in the component it is being passed into) into the Character component:

```js
return (
  <div>
    {characters.map((character) => {
        return (
          <div>
            <Character character={character} />
          </div>
        )
      })}
    
  </div>
)
```

https://media.git.generalassemb.ly/user/1611/files/3e0fdb39-be4f-4f22-8e36-7952dc56a6e6

- Lastly we can get rid of that warning we are getting by giving each item in the map a unique key, lucky for us the API we are pulling from provides an id value for us to use: 

```js
return (
  <div>
    {characters.map((character) => {
        return (
          <div>
            <Character character={character} key={character._id}/>
          </div>
        )
      })}
    
  </div>
)
```
