import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateState } from "../store";
import backofcard from '../mtg-card-back.webp'
import drawCard from "../functions/drawCard";

function Play() {
    const dispatch = useDispatch();
    const sharedState = useSelector((state) => state.sharedState.value)
    
    
    return (
        <div className="hand">
            <img src={backofcard} alt="library" onClick={() => drawCard(sharedState, dispatch)}/>
            <img src={'s'} alt="log shared state" onClick={() => console.log(sharedState)} />
            {/* {sharedState.hand.map((card, index) => {
                return <img src={card.imageUrl} key={index} />
            })} */}
        </div>
    )
}

export default Play