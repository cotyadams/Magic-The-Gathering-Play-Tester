import { updateState } from "../store"

import { useDispatch, useSelector } from "react-redux"

import CardInSecondaryZone from "./CardInSecondaryZone"

function SecondaryZone({zone}) {
    const dispatch = useDispatch()
    const sharedState = useSelector((state) => state.sharedState.value)
    return (
    <div>
            
            {
                    sharedState[zone] ? (sharedState[zone].map((card, key) => (
                        <CardInSecondaryZone card={card} key={key} zone={zone} />
                    ))) : <p>no {zone}</p>
            }
    </div>
    )
}

export default SecondaryZone