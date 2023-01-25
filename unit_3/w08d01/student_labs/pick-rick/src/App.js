import React, { useState, useEffect } from 'react'
import './index.css'

import axios from "axios"

// ===================================
//                  APP START
// ===================================

let page = 1;
let numPages = 0;
let showingEpisodes = false;

const App = () => {

  // ===================================
  //                  HOOKS
  // ===================================

  const [characters, setCharacters] = useState([])
  const [episodes, setEpisodes] = useState([])
  const [displayChar, setDisplayChar] = useState(true)
  const [displayEpisodes, setDisplayEpisodes] = useState(false)

  // ===================================
  //                 FUNCTIONS
  // ===================================

  const getCharacters = () => {
    axios.get('https://rickandmortyapi.com/api/character/?page=' + page).then((characterData) => {
      setCharacters(characterData.data.results)
      numPages = characterData.data.info.pages
    })
  }

  const getEpisodes = () => {
    axios.get('https://rickandmortyapi.com/api/episode?page=' + page).then((episodeData) => {
      setEpisodes(episodeData.data.results)
      numPages = episodeData.data.info.pages
    })
  }

  useEffect(() => {
    getCharacters()
  }, [])

  const listEpisodes = episodes.map((ep) => {
    return (
      <div className='episode-card'>
        <p>Episode Name: {ep.name}</p>
        <p>Air Date: {ep.air_date}</p>
        <p>Episode: {ep.air_date}</p>
      </div>
    )
  })

  const listCharacters = characters.map((char) => {
    return (
      <div className='card' key={char.id}>
        <img src={char.image} ></img>
        <p>Name: {char.name}</p>
        <p>Species: {char.species}</p>
        <p>Status: {char.status}</p>
      </div>
    )
  })

  const revealCharacter = () => {
    page = 1
    getCharacters()
    setDisplayChar(true)
    setDisplayEpisodes(false)
    showingEpisodes = false
  }

  const revealEpisodes = () => {
    page = 1
    getEpisodes();
    setDisplayEpisodes(true)
    setDisplayChar(false)
    showingEpisodes = true
  }

  const nextPage = () => {
    if (page < numPages) {
      page++
      if (!showingEpisodes) {
        getCharacters();
      } else {
        getEpisodes();
      }
    } else {
      alert("No more pages!")
    }
  }

  const previousPage = () => {
    if (page > 1) {
      page--
      if (!showingEpisodes) {
        getCharacters();
      } else {
        getEpisodes();
      }
    } else {
      alert("No previous page!")
    }
  }

  // ===================================
  //                  DISPLAY
  // ===================================

  return (
    <div>
      <h1>Rick and Morty</h1>
      <div className='button-div'>
      </div>

      {displayChar ? (
        <>
          <div className='button-div'>
            <button className='top-buttons' onClick={previousPage}><span>Previous</span></button>
            <button className='top-buttons' onClick={revealEpisodes}>Episodes</button>
            <button className='top-buttons' onClick={nextPage}><span>Next</span></button>
          </div>
          <div className='grid-container'>{listCharacters}</div>
        </>
      ) : (
        <>
          <div className='button-div'>
            <button className='top-buttons' onClick={previousPage}><span>Previous</span></button>
            <button className='top-buttons' onClick={revealCharacter}>Characters</button>
            <button className='top-buttons' onClick={nextPage}><span>Next</span></button>
          </div>
          <div className='grid-container-episodes'>{listEpisodes}</div>
        </>
      )}

    </div>



  )
}

export default App