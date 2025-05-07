import shuffleDeck from "./shuffleDeck";
import SearchBoard from "./SearchBoard";

function CardIntoLibrary(card, dispatch, sharedState) {
    const searchResults = SearchBoard(sharedState, card);
    console.log(searchResults)
    const cardType = searchResults.type;
    // pull a copy of state
    let tempState = structuredClone(sharedState)
    // set desired Location object
        let newDeck = [
            card.card,
            ...(tempState.deck || [])
        ]
    let newCardArray = tempState.boardState[cardType][searchResults.groupIndex].filter(
        (node) => node.key !== card.key
    )
    tempState.boardState[cardType][searchResults.groupIndex] = newCardArray;

    tempState.deck = newDeck;

        shuffleDeck(tempState, dispatch)
}
    
export default CardIntoLibrary