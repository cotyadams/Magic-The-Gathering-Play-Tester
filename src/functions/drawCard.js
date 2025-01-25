import { updateState } from "../store"

const drawCard = (sharedState, dispatch) => {
        if (!sharedState.hand) {
            dispatch(updateState({
                ...sharedState,
                // update hand for first draw
                hand: sharedState.deck.slice(0, 1),
                // take card out of deck
                deck: sharedState.deck.slice(1)
            }))
        } else {
            // pull new draw
            const newDraw = sharedState.deck.slice(0, 1)
            dispatch(updateState({
                ...sharedState,
                // add to hand
                hand: [...sharedState.hand, ...newDraw],
                // remove top card of deck
                deck: sharedState.deck.slice(1)
            }))
        }
}
export default drawCard