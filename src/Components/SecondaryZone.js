import { useSelector } from "react-redux"

import CardInSecondaryZone from "./CardInSecondaryZone"

import '../styles/SecondaryZone.css'

function SecondaryZone({zone}) {
    const sharedState = useSelector((state) => state.sharedState.value)
    return (
    <div className="secondary-zone">
            
            {
                    sharedState[zone] ? (sharedState[zone].map((card, key) => (
                        <CardInSecondaryZone card={card} key={key} zone={zone} />
                    ))) : <p>no {zone}</p>
            }
    </div>
    )
}

export default SecondaryZone