import { updateState } from "../store"

function CardLeavingBattlefield(card, destination, dispatch, sharedState) {
    const cardType = card.type;
    // pull a copy of state
    let tempState = sharedState
    // set desired Location object
        let endLocation = [
            card,
            ...(tempState[destination] || [])
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
                }
            }
        dispatch(updateState({...tempState, [destination]:endLocation}))

    }

export default CardLeavingBattlefield