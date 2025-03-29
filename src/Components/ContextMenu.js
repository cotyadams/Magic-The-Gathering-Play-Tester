import '../styles/ContextMenu.css'

import { useDispatch, useSelector } from 'react-redux'

import CardLeavingBattlefield from '../functions/CardLeavingBattlefield';
import CardIntoLibrary from '../functions/CardIntoLibrary';

function ContextMenu({card, isOpen, setIsOpen, setIsStatsReplaced, isStatsReplaced}) {
    const dispatch = useDispatch();
    const sharedState = useSelector((state) => state.sharedState.value)

    
    return (
        <div className="dropdown">
            <div className="dropdown-content">
                <button onClick={() => {
                    setIsOpen(!isOpen)
                    CardLeavingBattlefield(card, 'graveyard', dispatch, sharedState)
                }}>Move To Graveyard</button>
                <button onClick={() => {
                    setIsOpen(!isOpen)
                    CardLeavingBattlefield(card, 'exile', dispatch, sharedState)
                }}>Move To Exile</button>
                <button onClick={() => {
                    setIsOpen(!isOpen)
                    CardIntoLibrary(card, dispatch, sharedState)
                }}>Shuffle Into Library</button>
                {card.type === 'creatures' ?
                    (isStatsReplaced ? <button onClick={() => {
                    setIsOpen(!isOpen)
                    setIsStatsReplaced(!isStatsReplaced)
                    console.log(card)
                }}>Turn Off Stat Replacement</button>
                    :
                <button onClick={() => {
                    setIsOpen(!isOpen)
                    setIsStatsReplaced(!isStatsReplaced)
                }}>Turn On Stat Replacement</button>) : <></>}
            </div>
        </div>
    )
}
export default ContextMenu