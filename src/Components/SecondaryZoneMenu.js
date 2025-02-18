
import PutCardOntoBattlefield from "../functions/PutCardOntoBattlefield"
import CardLeavingSecondaryZone from "../functions/CardLeavingSecondaryZone";

import { updateState } from "../store"

import { useDispatch, useSelector } from "react-redux"
function SecondaryZoneMenu({ card, zone, isOpen, setIsOpen }) {
    
    const dispatch = useDispatch();
    const sharedState = useSelector((state) => state.sharedState.value)
    
    return (
        <div className="secondary-dropdown">
            <div className="secondary-dropdown-content">
                <button onClick={() => {
                    setIsOpen(!isOpen)
                    PutCardOntoBattlefield(card, dispatch, sharedState, updateState, zone)
                }}>Return To Battlefield</button>
                {
                    zone === 'graveyard' ?
                        // if graveyard display card Leaving Graveyard
                        <button
                            onClick={() => {
                                setIsOpen(!isOpen)
                                CardLeavingSecondaryZone(card, 'exile', zone, dispatch, sharedState)
                            }}
                        >Move To Exile</button> :
                        // if not graveyard, card leaving exile
                         <button
                            onClick={() => {
                                setIsOpen(!isOpen)
                                CardLeavingSecondaryZone(card, 'graveyard', zone, dispatch, sharedState)
                            }}
                        >Move To Graveyard</button>
                }
                <button onClick={() => {
                    setIsOpen(!isOpen)
                    PutCardOntoBattlefield(card, dispatch, sharedState, updateState, zone)
                }}>click</button>
            </div>

        </div>
    )
}

export default SecondaryZoneMenu