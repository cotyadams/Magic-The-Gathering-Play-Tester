import { updateState } from "../store"

function CardLeavingSecondaryZone(card, destination, zone, dispatch, sharedState) {
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
                [zone]: [
                     ...tempState[zone].filter(
                            (node) => node.key !== card.key
                        )
                ],
                [destination]: [
                    ...endLocation
                ]

            }
        dispatch(updateState({...tempState}))

    }

export default CardLeavingSecondaryZone