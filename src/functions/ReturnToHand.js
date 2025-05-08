function ReturnToHand(
    sharedState,
    dispatch,
    updateState,
    searchResults
) {
    let tempState = structuredClone(sharedState);
    tempState.boardState[searchResults.type][searchResults.groupIndex] = tempState.boardState[searchResults.type][searchResults.groupIndex].filter((c) => (
        c.key !== searchResults.singleCard.key
    ))
    tempState.hand.push(searchResults.singleCard.card)
    console.log('state', tempState)
    dispatch(updateState(tempState))
}

export default ReturnToHand