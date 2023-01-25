import React, {useState} from 'react'

const App = () => {
  const [name, setName] = useState('Brandon')

  let sayHello = () => {
    alert('Hello')
  }

  let changeName = () => {
    setName('Isaiah')
  }


  return (
    <div>
      <h1>My First React App</h1>
      <h3>{name}</h3>
      <input type='text' onChange={changeName} />      
      {/* <ComponentTwo /> */}
    </div>
  )
}

// const ComponentTwo = () => {
//   return (
//     <div>
//       <h1>Second Component</h1>
//     </div>
//   )
// }

export default App;