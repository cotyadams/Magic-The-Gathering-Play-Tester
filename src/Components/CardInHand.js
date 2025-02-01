import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { updateState } from "../store";

import PlayCardFromHand from "../functions/PlayCardFromHand";

function CardInHand({ card }) {

    const dispatch = useDispatch();
    const sharedState = useSelector((state) => state.sharedState.value)

    
    return ( 
        <img src={card.imageUrl} alt={card.name} onClick={() => PlayCardFromHand(card, dispatch, sharedState, updateState)}/>     
    )
}
export default CardInHand;