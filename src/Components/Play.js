import React from "react";

import { useNavigate } from "react-router-dom";

import '../styles/Play.css'

import { useDispatch, useSelector } from "react-redux";

// information and functions
import backofcard from '../mtg-card-back.webp'
import drawCard from "../functions/drawCard";

// components
import CardInHand from "./CardInHand";
import CardArray from "./CardArray";

function Play() {
    const dispatch = useDispatch();
    const sharedState = useSelector((state) => state.sharedState.value)
    
    const navigate = useNavigate();
    
    return (
        <div className="board">
            <div className={sharedState.boardState?.creatures ? 'creatures' : 'creatures-no-cards'}>
                {
                    sharedState.boardState?.creatures ? (sharedState.boardState.creatures.map((cardArray, key) => (
                        <CardArray
                            cardArray={[cardArray]}
                            key={key}
                        />
                    ))) : <p>no creatures</p>
                }
            </div>
            <div className={sharedState.boardState?.nonCreatures ? 'non-creatures' : 'non-creatures-no-cards'}>
                {
                    sharedState.boardState?.nonCreatures ? (sharedState.boardState.nonCreatures.map((cardArray, key) => (
                        <CardArray cardArray={[cardArray]} key={key} />
                    ))) : <p>no non-creatures</p>
                }
            </div>
            <div className="bottom-row">
                <div className={sharedState.boardState?.lands ? 'lands' : 'lands-no-cards'}>
                {
                    sharedState.boardState?.lands ? (sharedState.boardState.lands.map((cardArray, key) => (
                        <CardArray cardArray={[cardArray]} key={key} />
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
            <div>
                <button onClick={() => console.log(sharedState)}>Log State</button>
                <button onClick={() => navigate('/graveyard')}>View Graveyard</button>
                <button onClick={() => navigate('/exile')}>View Exile</button>
            </div>
        </div>
        
    )
}

export default Play