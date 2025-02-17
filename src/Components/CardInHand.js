import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { updateState } from "../store";

import PutCardOntoBattlefield from "../functions/PutCardOntoBattlefield";

function CardInHand({ card }) {

    const dispatch = useDispatch();
    const sharedState = useSelector((state) => state.sharedState.value)

    
    return ( 
        <img src={card.imageUrl} alt={card.name} onClick={() => PutCardOntoBattlefield(card, dispatch, sharedState, updateState, 'hand')}/>     
    )
}
export default CardInHand;