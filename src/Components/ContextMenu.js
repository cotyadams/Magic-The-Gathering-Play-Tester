import '../styles/ContextMenu.css'

import { useDispatch, useSelector } from 'react-redux'

import { updateState } from '../store';

import CardLeavingBattlefield from '../functions/CardLeavingBattlefield';
import CardIntoLibrary from '../functions/CardIntoLibrary';
import SearchBoard from '../functions/SearchBoard';
import ReturnToOrigin from '../functions/ReturnToOrigin';
import ReturnToHand from '../functions/ReturnToHand';

function ContextMenu({
    card,
    isOpen,
    setIsOpen,
    setIsStatsReplaced,
    isStatsReplaced,
    setIsFormOn,
    isFormOn,
    setIsExpanded,
}) {
    const dispatch = useDispatch();
    const sharedState = useSelector((state) => state.sharedState.value)

    const searchResults = SearchBoard(sharedState, card)
    return (
        <div className="dropdown">
            <div className="dropdown-content">
                <button onClick={() => {
                    setIsOpen(!isOpen)
                    CardLeavingBattlefield(
                        card,
                        'graveyard',
                        dispatch,
                        sharedState
                    )
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
                <button onClick={() => {
                    setIsOpen(!isOpen)
                    dispatch(updateState({
                        ...sharedState,
                        attachState:
                        {isAttaching: true,
                            cardBeingAttached: searchResults.cardGroup}
                        }))
                }}>Attach Group to Another Card</button>
                <button onClick={() => {
                    setIsOpen(!isOpen)
                    dispatch(updateState({
                        ...sharedState,
                        attachState:
                        {isAttaching: true,
                            cardBeingAttached: [searchResults.singleCard]}
                        }))
                }}>Attach Card to Another Card</button>
                <button
                    onClick={() => {
                        setIsOpen(!isOpen)
                        ReturnToHand(
                            sharedState,
                            dispatch,
                            updateState,
                            searchResults
                        )
                    }}
                >Return To Hand</button>
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
                {
                    searchResults.type !== card.type ? 
                        <button
                            onClick={() => {
                                setIsOpen(!isOpen)
                                ReturnToOrigin(
                                    searchResults,
                                    sharedState,
                                    card,
                                    dispatch,
                                    updateState
                                )
                            }}
                        >Return To Origin</button>
                        :
                        <></>
                }
            </div>
        </div>
    )
}
export default ContextMenu