import { updateState } from "../store";


async function shuffleDeck(sharedState, dispatch) {
    let temp = [...sharedState.deck]

    let newPosition = 0
    for (let i = 0; i < temp.length; i++) {
        newPosition = Math.floor(Math.random() * (temp.length - 1));
        [temp[i], temp[newPosition]] = [temp[newPosition], temp[i]]
    }
    return dispatch(updateState({...sharedState, deck: temp}))
}
  
export default shuffleDeck