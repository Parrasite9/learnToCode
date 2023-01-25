import React, {useState, useEffect} from 'react'
// AXIOS IS USED TO PULL API'S
import axios from 'axios'


const App = () => {
  
  // THESE ARE CALLED HOOKS
  // const [variableName, hookName] = useState(currentState)
  // useState IS USED TO DETERMINE IT'S CURRENT POSITION
  const [questions, setQuestions] = useState([])
  const [category, setCategory] = useState()

  const [score, setScore] = useState(0)
  const [show, notShow] = useState(false)


  const getQuestions = () => {
    // AXIOS.GET('API URL').THEN((RESPONSE) => {})        AFTER API IS PULLED THEN DO THIS FUNCTION
    axios.get('http://jservice.io/api/random').then((response) => {
      setQuestions(response.data[0])
      setCategory(response.data[0].category.title)
      notShow(false)

    }) 
  }

  useEffect(() => {
    getQuestions()
  }, []) 

  const increase = () => {
    setScore(questions.value + score) 
  }

  const decrease = () => {
    setScore(score - questions.value)
  }

  const reset = () => {
    setScore(0)
  }

  const reveal = () => {
    notShow(true)
  }

  return (
    <div>
      <h1>Welcome to Jeapordy!</h1>
      <h3>Score: <span>{score}</span></h3>
      <div className='top-buttons'>
        {/* 'DECREASE' IS PULLED FORM THE FUNCTION NAME 'DECREASE' FROM LINE 36 */}
        <button className='decrease-button' onClick={decrease}>Decrease</button>
        {/* 'INCREASE' IS PULLED FORM THE FUNCTION NAME 'INCREASE' FROM LINE 32 */}
        <button className='increase-button' onClick={increase}>Increase</button>
        {/* 'RESET' IS PULLED FORM THE FUNCTION NAME 'RESET' FROM LINE 40 */}
        <button className='reset-button' onClick={reset}>Reset</button>
      </div>


      <h2>Lets Play!</h2>
      <div className='get-question-div'>
        <button className='get-question-button' onClick={getQuestions}>Get Question</button>
      </div>
      <h3>Category: <span>{category}</span> </h3>
      <h4>Points: <span>{questions.value}</span> </h4>
      <h4>Answer: <span>{questions.answer}</span> </h4>

      <div className='reveal-button-div'>
        <button className='reveal-question-button' onClick={reveal}>Click to Reveal Question</button>
      </div>

      {
        show ? <h3>Question: <span>{questions.question}</span></h3> 
        :
        null
      }


    </div>

  )
}

export default App