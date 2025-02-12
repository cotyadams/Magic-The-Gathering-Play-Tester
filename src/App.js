import './styles/App.css';
import axios from 'axios';

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import cardObjCreator from './functions/CardObjCreator';
import shuffleDeck from './functions/shuffleDeck';

import { useDispatch, useSelector } from "react-redux";
import { updateState } from "./store";

function App() {
  const dispatch = useDispatch();
  const sharedState = useSelector((state) => state.sharedState.value)
  
  const [inputValue, setInputValue] = useState('');

  const navigate = useNavigate();

  const handleRequest = (card) => {

    let response = axios.get(`https://api.magicthegathering.io/v1/cards?name=${card.name}&number=${card.number}`)

    return response
    }
  
  const onSubmit = async (inputString) => {
    // ensure the loop starts with an empty deck
    let tempDeck = []

    const cardInputArray = inputString.split('\n')
    // loop through array
    for (let i = 0; i < cardInputArray.length; i++) {
      const cardObj = cardObjCreator(cardInputArray[i])
      // loop through duplicate cards at array node
      for (let j = 1; j <= cardObj.quantity; j++) {
        const cardResponse = await handleRequest(cardObj);
        tempDeck.push(cardResponse.data.cards[0]);
      }
    }
    dispatch(updateState({commander: tempDeck.shift(), deck: tempDeck}))
    console.log(sharedState)
    }

  
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => navigate('/play')} className='button'>play</button>
      </header>
      <form action={() => onSubmit(inputValue)} className='form'>
          <textarea
            type='text'
            value={inputValue}
            onChange={(e) => { setInputValue(e.target.value) }}
            className='text-box'
          />
          <button type='submit'>Submit</button>
        <button
          type='button'
          onClick={() => shuffleDeck(sharedState, dispatch)}
        >shuffle</button>
        <button
          type='button'
          onClick={() => console.log(sharedState)}
        >check Deck</button>
        </form>
    </div>
  );
}

export default App;
