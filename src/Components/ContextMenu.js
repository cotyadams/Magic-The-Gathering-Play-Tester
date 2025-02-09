import '../styles/ContextMenu.css'

import { useDispatch, useSelector } from 'react-redux'

import { updateState } from '../store'

function ContextMenu({card}) {
    const dispatch = useDispatch();
    const sharedState = useSelector((state) => state.sharedState.value)

    function CardToGraveyard(e) {
        console.log('card', card)
        let tempState = sharedState;
        let graveyard = {
            ...(tempState.graveyard || []),
            card
        }

    }
    return (
        <div className="dropdown">
            <div className="dropdown-content">
                <button onClick={(e) => CardToGraveyard(e)}>move to graveyard</button>
                <button onClick={() => console.log('graveyard')}>move to graveyard</button>
                <button onClick={() => console.log('graveyard')}>move to graveyard</button>
            </div>
        </div>
    )
}
export default ContextMenu