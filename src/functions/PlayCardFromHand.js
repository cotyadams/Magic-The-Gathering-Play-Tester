const PlayCardFromHand = (card, dispatch, sharedState, updateState) => {
        let indexOfCard = -1;
    let tempState = sharedState
    const date = new Date()

        // search for card index from hand
        for (let i = 0; i < sharedState.hand.length; i++) {
            if (sharedState.hand[i].name === card.name) {
                indexOfCard = i;
                break;
            }
        }
        // handle playing a creature card
    if (card.types.includes('Creature')) {
            // pre-defining the creature array
        let creatures = [
                // or statement to take care of boardState being undefined
                ...(tempState.boardState?.creatures || []),
                        {card, key: date.getTime(), type: 'creatures'}
            ]
            // update temp state to move card from hand to boardState.creatures
            tempState = {
                ...tempState,
                boardState: {
                    ...tempState.boardState,
                    creatures
                },
                hand: tempState.hand.filter((card, index) => index !== indexOfCard)
            }
    } else if (card.types.includes('Land') && !card.types.includes('Creature')) {
        // for lands
        let lands = [
                // or statement to take care of boardState being undefined
                ...(tempState.boardState?.lands || []),
                        {card, key: date.getTime(), type: 'lands'}
        ]
        tempState = {
                ...tempState,
                boardState: {
                    ...tempState.boardState,
                    lands
                },
                hand: tempState.hand.filter((card, index) => index !== indexOfCard)
            }
    } else { //for non-creature non-land cards
        // pre-define nonCreatures array
            let nonCreatures = [
                ...(tempState.boardState?.nonCreatures || []),
                {card, key: date.getTime(), type: 'nonCreatures'}
            ]
        // edit the temporary state
            tempState = {
                ...tempState,
                boardState: {
                    ...tempState.boardState,
                    nonCreatures
                },
                hand: tempState.hand.filter((card, index) => index !== indexOfCard)
            }
    }
    // update state with tempState object
        dispatch(updateState({...tempState}))

}

export default PlayCardFromHand