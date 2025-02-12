import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { updateState } from "../store";

import PutCardOntoBattlefield from "../functions/PutCardOntoBattlefield";

function CardInSecondaryZone({ card, zone }) {

    const dispatch = useDispatch();
    const sharedState = useSelector((state) => state.sharedState.value)

    
    return ( 
        <img src={card.card.imageUrl} alt={card.card.name} onClick={() => PutCardOntoBattlefield(card, dispatch, sharedState, updateState, zone)}/>     
    )
}
export default CardInSecondaryZone