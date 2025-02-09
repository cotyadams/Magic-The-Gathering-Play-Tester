import React from "react";

import '../styles/Play.css'

import { useDispatch, useSelector } from "react-redux";

// information and functions
import backofcard from '../mtg-card-back.webp'
import drawCard from "../functions/drawCard";

// components
import CardInHand from "./CardInHand";
import CardOnBoard from "./CardOnBoard";

function Play() {
    const dispatch = useDispatch();
    const sharedState = useSelector((state) => state.sharedState.value)
    
    return (
        <div className="board">
            <div className="creatures">
                {
                    sharedState.boardState?.creatures ? (sharedState.boardState.creatures.map((card, key) => (
                        <CardOnBoard card={card} key={key} />
                    ))) : <p>no creatures</p>
                }
            </div>
            <div className="non-creatures">
                {
                    sharedState.boardState?.nonCreatures ? (sharedState.boardState.nonCreatures.map((card) => (
                        <CardOnBoard card={card} key={card.key} />
                    ))) : <p>no non-creatures</p>
                }
            </div>
            <div className="bottom-row">
                <div className="lands">
                {
                    sharedState.boardState?.lands ? (sharedState.boardState.lands.map((card, key) => (
                        <CardOnBoard card={card} key={key} />
                    ))) : <p>no lands</p>
                }
                </div>
                <div className="hand">
                    {
                    sharedState.hand ? (sharedState.hand.map((card, key) => (
                        <CardInHand card={card} key={key} />
                    ))) : <p>no hand</p>
                    }
                </div>
                <img
                    src={backofcard}
                    alt="library"
                    className='library'
                    onClick={() => drawCard(sharedState, dispatch)}
                />
            </div>
            <button onClick={() => console.log(sharedState)}>Log State</button>
        </div>
        
    )
}

export default Play