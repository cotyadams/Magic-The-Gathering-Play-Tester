function SearchBoard(
    tempState,
    targetCard
) {
    let boardState = structuredClone(tempState.boardState)

    for (let key in boardState) {
        for (let i = 0; i < boardState[key].length; i++) {
        // loop through each earray from within the boardState type
        for (let j = 0; j < boardState[key][i].length; j++) {
            // if a card in the array shares a key with target card
            if (boardState[key][i][j].key === targetCard.key) {
                return {
                    cardGroup: boardState[key][i],
                    singleCard: boardState[key][i][j],
                    groupIndex: i,
                    cardIndex: j,
                    type: key
                }
            }
        }
    }
    }
    return null;
}

export default SearchBoard