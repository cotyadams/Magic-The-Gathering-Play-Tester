import shuffleDeck from "./shuffleDeck";

function CardIntoLibrary(card, dispatch, sharedState) {
    const cardType = card.type;
    // pull a copy of state
    let tempState = sharedState
    // set desired Location object
        let newDeck = [
            card.card,
            ...(tempState.deck || [])
        ]
    // update tempState
            tempState = {
                ...tempState,
                boardState: {
                    ...tempState.boardState,
                    [cardType]: [
                        ...tempState.boardState[cardType].filter(
                            (node) => node.key !== card.key
                        )
                        ]
                },
                deck: newDeck
            }

        shuffleDeck(tempState, dispatch)

}
    
export default CardIntoLibrary