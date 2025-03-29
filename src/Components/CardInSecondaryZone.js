import React, {useState, useEffect} from "react";

import '../styles/CardInSecondaryZone.css'

import SecondaryZoneMenu from "./SecondaryZoneMenu";

function CardInSecondaryZone({ card, zone }) {

    const [dimensions, setDimensions] = useState({ width: 23, height: 32 });
    const [isOpen, setIsOpen] = useState(false)
    const [rotation, setRotation] = useState(false)

    const handleTap = () => {
        if (rotation === 0) setRotation(90);
        else setRotation(0);
    }

    useEffect(() => {
        rotation === 90 ? setDimensions({ width: 32, height: 23 }) : setDimensions({ width: 23, height: 32 });
    }, [rotation])

    return ( 
        <div
            className="card-in-secondary-zone-container"
            style={{
                width: `${dimensions.width}vh`
            }}
        >
            <img
            src={card.card.imageUrl}
            alt={card.card.name}
            onClick={handleTap}
            onContextMenu={(e) => {
                e.preventDefault();
                setIsOpen(!isOpen)
            }}
            style={{
                transform: `rotate(${rotation}deg)`
            }}
            />     
            {isOpen && <SecondaryZoneMenu card={card} zone={zone} isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
    )
}
export default CardInSecondaryZone