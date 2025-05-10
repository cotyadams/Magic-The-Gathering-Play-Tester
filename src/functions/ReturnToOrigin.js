function ReturnToOrigin(
    searchResults,
    sharedState,
    card,
    dispatch,
    updateState
) {
    let tempState = structuredClone(sharedState);

    tempState.boardState[searchResults.type][searchResults.groupIndex] = tempState.boardState[searchResults.type][searchResults.groupIndex].filter((c) => {
       return c.key !== searchResults.singleCard.key;
    })
    tempState.boardState[card.type].push([card])
    console.log(tempState)
    dispatch(updateState(tempState))
}

export default ReturnToOrigin