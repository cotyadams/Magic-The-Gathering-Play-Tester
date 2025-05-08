import CardOnBoard from "./CardOnBoard"

function CardArray({ cardArray }) { 
    return (
        <div className="card-array-container">
            { cardArray.map((card, key) => (
                <CardOnBoard
                    card={card}
                    key={key}
                />
            ))}
        </div>
    )
}

export default CardArray