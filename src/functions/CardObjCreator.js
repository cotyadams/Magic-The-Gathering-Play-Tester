
const cardObjCreator = (inputString) => {
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
    if (splitArray[splitLength - 1] === '*F*') {
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
    return cardObj;
}
export default cardObjCreator;
