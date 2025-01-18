import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, {useState} from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
    
    const handleRequest = async (card) => {
      return await axios.get(`https://api.magicthegathering.io/v1/cards?name=${card}`).then((result) => {
      console.log(result)
      })
    }
// Ancestor's Chosen
  const onSubmit = (inputString) => {
    const cardObj = {
      name: '',
      number: 0,
      quantity: 0,
      foil: false
    }
    let splitArray = inputString.split(' ')
    let splitLength = splitArray.length
    cardObj.quantity = splitArray[0]
    // test for foil in text
    if (splitArray[splitLength - 1][0] == '*') {
      cardObj.foil = true;
      cardObj.number = splitArray[splitLength - 2];
      for (let i = 1; i < splitArray.length - 3; i++) {
        cardObj.name += splitArray[i]
        if (i < splitArray.length - 4) {
          cardObj.name += ' '
        }
      }
    } else {
      // if foil is not present
      for (let i = 1; i < splitArray.length - 2; i++) {
      cardObj.name += splitArray[i]
      if (i < splitArray.length - 3) {
        cardObj.name += ' '
      }
    }
      cardObj.number = splitArray[splitLength - 1]
    }
    
    console.log(cardObj)
    }

  const array = []
  return (
    <div className="App">
      <header className="App-header">
        <form action={() => onSubmit(inputValue)}>
          <input
            type='text'
            value={inputValue}
            onChange={(e) => {setInputValue(e.target.value)}}
          />
          <button type='submit'>Submit</button>
        </form>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
