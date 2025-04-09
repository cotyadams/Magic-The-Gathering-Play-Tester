import { useState, useEffect } from "react"

import { useDispatch, useSelector } from "react-redux";
import { updateState } from "../store";

// component imports
import ContextMenu from "./ContextMenu";
import StatReplacement from "./StatReplacement";
import StatReplacementForm from "./StatReplacementForm";
import ExpandedCard from "./ExpandedCard";

// function imports
import SearchBoard from "../functions/SearchBoard";

// styles import
import '../styles/CardOnBoard.css'

function CardOnBoard({ card }) {
    const dispatch = useDispatch();
    const sharedState = useSelector((state) => state.sharedState.value)

    const [rotation, setRotation] = useState(0);
    const [dimensions, setDimensions] = useState({ width: 23, height: 32 });
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isStatsReplaced, setIsStatsReplaced] = useState(false);
    const [isFormOn, setIsFormOn] = useState(false);
    const [replacementStats, setReplacementStats] = useState('')
    const [isExpanded, setIsExpanded] = useState(false);
    const [cardArrayState, setCardArrayState] = useState([]);

    
    const handleSingleClick = () => {
        const targetCard = card
        // if attaching
        if (sharedState.attachState?.isAttaching) {
            //pull a deep copy of shared state to freely edit
            let tempState = structuredClone(sharedState);

            // search board for correct card
            const searchBoardResults = SearchBoard(tempState, targetCard)

            // replace that cards array with the new attached array
            tempState.boardState[targetCard.type][searchBoardResults.groupIndex]
            =
            [...searchBoardResults.cardGroup, ...tempState.attachState.cardBeingAttached];

            // set cardArrayState to the array for passing down
            setCardArrayState(searchBoardResults.cardGroup) 

            const cardBeingAttached = sharedState.attachState.cardBeingAttached

            // remove cardBeingAttached from the board
                let results = SearchBoard(sharedState, cardBeingAttached[0])
                tempState.boardState[results.singleCard.type][results.groupIndex].splice(results.cardIndex , cardBeingAttached.length)
            
            // reset attachState
            tempState = {
                ...tempState,
                attachState: {
                    isAttaching: false,
                    cardBeingAttached: []
                }
            }
            // Dispatch the new state
            dispatch(updateState(tempState));

        }
        else if (rotation === 0) setRotation(90);
        else setRotation(0);
    }

    useEffect(() => {
        rotation === 90 ? setDimensions({ width: 32, height: 23 }) : setDimensions({ width: 23, height: 32 });
    }, [rotation])
    return ( <>
        <div
            className="card-on-board-container"
            style={{
                width: `${dimensions.width}vh`,
                height: `${dimensions.height}vh`
            }}
        >   
            <img
                src={card.card.imageUrl}
                alt={card.card.name}
                type={card.card.type}
                id={card.card.key}
                className="card-on-board"
                onClick={(e) => handleSingleClick(e)}
                onContextMenu={(e) => {
                    e.preventDefault();
                    setIsMenuOpen(!isMenuOpen);
                }}
                style={{
                    transform: `rotate(${rotation}deg)`
                }}
            />   
            {isMenuOpen &&
                <ContextMenu
                    card={card}
                    cardArray={cardArrayState}
                    isOpen={isMenuOpen}
                    setIsOpen={setIsMenuOpen}
                    isStatsReplaced={isStatsReplaced}
                    setIsStatsReplaced={setIsStatsReplaced}
                    setIsFormOn={setIsFormOn}
                    isFormOn={isFormOn}
                    isExpanded={isExpanded}
                    setIsExpanded={setIsExpanded}
                />}
            {isFormOn && <StatReplacementForm
                setIsFormOn={setIsFormOn}
                isFormOn={isFormOn}
                setReplacementStats={setReplacementStats}
            />}
            {isStatsReplaced && <StatReplacement
                replacementStats={replacementStats}
                rotation={rotation}
            />}
        </div>
        {isExpanded && <ExpandedCard
                card={card}
                setIsExpanded={setIsExpanded}
        />}
    </>
    )
}
export default CardOnBoard