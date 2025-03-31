import '../styles/ContextMenu.css'

import { useDispatch, useSelector } from 'react-redux'

import CardLeavingBattlefield from '../functions/CardLeavingBattlefield';
import CardIntoLibrary from '../functions/CardIntoLibrary';

function ContextMenu({
    card,
    isOpen,
    setIsOpen,
    setIsStatsReplaced,
    isStatsReplaced,
    setIsFormOn,
    isFormOn,
    isExpanded,
    setIsExpanded
}) {
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
                <button onClick={() => {
                    setIsOpen(!isOpen)
                    setIsExpanded(true)
                }}>Expand Card</button>
                {card.type === 'creatures' ?
                (
                    isStatsReplaced ?
                        <button onClick={() => {
                            setIsOpen(!isOpen)
                            setIsStatsReplaced(false)
                        }}>Turn Off Stat Replacement</button>
                    :
                        <button onClick={() => {
                            setIsOpen(!isOpen)
                            setIsStatsReplaced(true)
                            setIsFormOn(!isFormOn)            
                        }}>Turn On Stat Replacement</button>
                )
                :
                <></>}
            </div>
        </div>
    )
}
export default ContextMenu