import React, {useState} from "react";

import { useNavigate } from "react-router-dom";

import '../styles/Play.css'

import { useDispatch, useSelector } from "react-redux";

import { updateState } from "../store";

// information and functions
import backofcard from '../mtg-card-back.webp'
import drawCard from "../functions/drawCard";

// components
import CardInHand from "./CardInHand";
import CardArray from "./CardArray";
import PlayerCounter from "./PlayerCounter";

function Play() {
    const dispatch = useDispatch();
    const sharedState = useSelector((state) => state.sharedState.value)

    const [playerCounterInputValue, setPlayerCounterInputValue] = useState('')
    
    const navigate = useNavigate();
    
    return (
        <div className="board">
            <div className={sharedState.boardState?.creatures ? 'creatures' : 'creatures-no-cards'}>
                {
                    sharedState.boardState?.creatures ? (sharedState.boardState.creatures.map((card, key) => (
                        <CardArray
                            cardArray={card}
                            key={key}
                        />
                    ))) : <p className="placeholder-text">no creatures</p>
                }
            </div>
            <div className={sharedState.boardState?.nonCreatures ? 'non-creatures' : 'non-creatures-no-cards'}>
                {
                    sharedState.boardState?.nonCreatures ? (sharedState.boardState.nonCreatures.map((card, key) => (
                        <CardArray cardArray={card} key={key} />
                    ))) : <p className="placeholder-text">no non-creatures</p>
                }
            </div>
            <div className="bottom-row">
                <div className={sharedState.boardState?.lands ? 'lands' : 'lands-no-cards'}>
                {
                    sharedState.boardState?.lands ? (sharedState.boardState.lands.map((card, key) => (
                        <CardArray cardArray={card} key={key} />
                    ))) : <p className="placeholder-text">no lands</p>
                }
                </div>
                <div className="hand">
                    {
                    sharedState.hand ? (sharedState.hand.map((card, key) => (
                        <CardInHand card={card} key={key} />
                    ))) : <p className="placeholder-text">no hand</p>
                    }
                </div>
                <div className="library-container">
                    <p className='library-text'>Click Below To Draw</p>
                    <img
                        src={backofcard}
                        alt="library"
                        className='library'
                        onClick={() => drawCard(sharedState, dispatch)}
                    />
                </div>
            </div>
            <div>
                <div className="player-counters">
                    {
                        sharedState.playerCounters?.length > 0 ? (sharedState.playerCounters.map((counter, key) => (
                            <PlayerCounter
                                counter={counter}
                                key={key}
                            />
                        ))) : <p className="placeholder-text">No Counters</p>
                    }
                </div>
                <button onClick={() => console.log(sharedState)}>Log State</button>
                <button onClick={() => navigate('/graveyard')}>View Graveyard</button>
                <button onClick={() => navigate('/exile')}>View Exile</button>
            </div>
            <input
                placeholder="Enter Counter Name"
                onChange={(e) => setPlayerCounterInputValue(e.target.value)} value={playerCounterInputValue}
            />
            <button type="submit" onClick={() => {
                dispatch(updateState({
                ...sharedState,
                playerCounters: [
                    ...sharedState.playerCounters || [],
                    { name: playerCounterInputValue, count: 1 }
                ]
            }))
                setPlayerCounterInputValue('')
            }}>Submit</button>
        </div>
        
    )
}

export default Play