import { updateState } from "../store"

import SearchBoard from "./SearchBoard";

function CardLeavingBattlefield(card, destination, dispatch, sharedState) {
    const cardType = card.type;
    // pull a copy of state
    let tempState = structuredClone(sharedState)

    // remove card
    const result = SearchBoard(tempState, card);
    tempState.boardState[result.type][result.groupIndex] = tempState.boardState[result.type][result.groupIndex].filter((node) => (
            node.key !== card.key
    ))
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