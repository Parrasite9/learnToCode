import React, {useState, useEffect} from 'react'
// NPM I --SAVE REACT-AUDIO-PLAYER
// https://www.npmjs.com/package/react-audio-player
import ReactAudioPlayer from 'react-audio-player'
// YOU MUST IMPORT THE AUDIO FILE AS WELL LIKE BELOW
import mainMusic from './audio/mainMusic.mp3'
import water from './audio/water.mp3'

const App = () => {

  // ======================================
  //                 HOOKS
  // ======================================

  const [score, setScore] = useState(0)
  const [showEZBake, setShowEZBake] = useState(false)
  const [showToasterOven, setShowToasterOven] = useState(false)
  const [showConvectionOven, setShowConvectionOven] = useState(false)
  const [showSmallFactory, setShowSmallFactory] = useState(false)
  const [showAudioControl, setShowAudioControl] = useState(false)
  const [counter, setCounter] = useState(score)
  // const [interval, setInterval] = useState()

  setScore(counter)



  // ======================================
  //               FUNCTIONS
  // ======================================

  const winCondition = () => {
    if (score >= 100000) {
      return (
        <h1>YOURE A WINNER!!</h1>
      )
    }
  }

  // EARN REVENUE FUNCTIONS
  const earn1 = () => {
    <ReactAudioPlayer src={water} controls/>
    setScore(score + 1)
    winCondition()
  }

  const earn5 = () => {
    setScore(score + 5)
    winCondition()
  }

  const earn25 = () => {
    setScore(score + 25)
    winCondition()
  }

  const earn50 = () => {
    setScore(score + 50)
    winCondition()
  }

  const earn250 = () => {
    setScore(score + 250)
    winCondition()
  }

  // PURCHASE ITEMS FUNCTIONS

  const buyEZOven = () => {
    setScore(score - 25)
  }

  const buyToasterOven = () => {
    setScore(score - 250)
  }

  const buyConvectionOven = () => {
    setScore(score - 1000)
  }

  const buySmallFactory = () => {
    setScore(score - 15000)
  }




  // THIS IS AN EXAMPLE OF HOW TO FORCE TEXT ONTO A PAGE
  // const reveal = () => {
  //   // If the score is greater than or equal to 5, return the <h1> element
  //   if (score >= 5) {
  //     return (
  //       <h1>TEST</h1>
  //     )
  //   } else {
  //     // Otherwise, return null
  //     return null
  //   }
  // }



  const upgradeEZOven = () => {
    if (score >= 25) {
      setShowEZBake(true)
      buyEZOven()
    }
  }

  const upgradeToasterOven = () => {
    if (score >= 250 ) {
      setShowToasterOven(true)
      buyToasterOven()
    }
  }

  const upgradeConvectionOven = () => {
    if (score >= 1000) {
      setShowConvectionOven(true)
      buyConvectionOven()
    }
  }

  const upgradeSmallFactory = () => {
    if (score >= 15000) {
      setShowSmallFactory(true)
      buySmallFactory()
    }
  }

useEffect(() => {
  const timer = setInterval(() => {
    setCounter((prevCounter) => prevCounter + 1)
  }, 1000)
  console.log(counter);
  return () => clearTimeout(timer);

}, [counter, setCounter])


// const audioControlClose = () => {
//   return (
//     <ReactAudioPlayer 
//     src={mainMusic}
//     autoPlay
//     volume={.3}
//     loop
//     />
//   )
// }

// const audioControlOpen = () => {
//   if (setShowAudioControl(false)) {
//     return (
//       <h1>test</h1>

//     )
//   }
// }


  // ======================================
  //               DISPLAY
  // ======================================

  return (
    <div>

      <ReactAudioPlayer 
      src={mainMusic} 
      autoPlay
      controls
      volume={.3}
      loop
      />

      <div className='title-container'>
        <img src="https://i.imgur.com/RZ5tjfS.png" />
      </div>

      {/* THIS TURNARY DOES NOT WORKING.
      ATTEMPTED TO SHOW AND HIDE ReactAudioPlayer
      {showAudioControl ? (
          <button onClick={audioControlClose}>CLOSE</button>
        ) : (
          <button onClick={audioControlOpen}>OPEN</button>
      )} */}


      <div className='header-grid-container'>
        <h2>Revenue <span>${score}</span> </h2>
        <h2>Goal: <span>$100,000</span></h2>
      </div>



      <div className='grid-container'>

        {/* NO BAKE PUDDING  */}
        <img className='gameButton' src="https://i.imgur.com/gDIbzJa.png" onClick={earn1} />

        {/* EZ BAKE OVEN  */}
        {showEZBake ? (
          <img className='gameButton' src="https://i.imgur.com/NQ0vFjF.png" onClick={earn5} />
        ) : (
          <img className='imglock gameButton' onClick={upgradeEZOven} src="https://i.imgur.com/mwp9tL5.png" />
        )}

        {/* TOASTER OVEN  */}
        {showToasterOven ? (
          <img className='gameButton' src='https://i.imgur.com/k5m7lCM.png' onClick={earn25} />
        ) : (
          <img className='imglock gameButton' src='https://i.imgur.com/hg12R4H.png' onClick={upgradeToasterOven} />
        )}

        {/* CONVECTION OVEN */}
        {showConvectionOven ? (
          <img className='gameButton' src='https://i.imgur.com/JEzQkHL.png' onClick={earn50} />
        ) : (
          <img className='imglock gameButton' src='https://i.imgur.com/x7i3ZeE.png' onClick={upgradeConvectionOven} />
        )}

      </div>

      <div className='grid-container2'>
        {showSmallFactory ? (
          <img className='factory' src='https://i.imgur.com/HugCDVu.png' onClick={earn250} />
        ) : (
          <img className='factory imglock' src='https://i.imgur.com/HLsiH2r.png' onClick={upgradeSmallFactory} />
        )}

        {/* WIN CONDITION */}
        {
          winCondition()
        }

        {/* THIS IS AN EXAMPLE OF HOW TO CALL A FUNCTION
        {
          reveal()
        } */}

      </div>

      <footer>
        © 2022 Isaiah Johnson
      </footer>





    </div>
  )
}
export default App