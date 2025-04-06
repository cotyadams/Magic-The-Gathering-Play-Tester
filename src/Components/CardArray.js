import CardOnBoard from "./CardOnBoard"
import { useState } from "react"

function CardArray({ cardArray }) { 

    const [isAttaching, setIsAttaching] = useState(false);
    const [cardBeingAttached, setCardBeingAttached] = useState({});

    return (
        <div className="card-array-container">
            {cardArray.map((card, key) => (
                <CardOnBoard
                    card={card}
                    key={key}
                    setIsAttaching={setIsAttaching}
                    setCardBeingAttached={setCardBeingAttached}
                />
            ))}
        </div>
    )
}

export default CardArray