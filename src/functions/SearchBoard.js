function SearchBoard(
    tempState,
    targetCard
) {
    const boardSection = structuredClone(tempState.boardState[targetCard.type])
    for (let i = 0; i < boardSection.length; i++) {

        // loop through each earray from within the boardState type
        for (let j = 0; j < boardSection[i].length; j++) {
            // if a card in the array shares a key with target card
            if (boardSection[i][j].key === targetCard.key) {
                return {
                    cardGroup: boardSection[i],
                    singleCard: boardSection[i][j],
                    groupIndex: i,
                    cardIndex: j
                }
            }
        }
    }
    return null;
}

export default SearchBoard