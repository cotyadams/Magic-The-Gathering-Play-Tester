function ExpandedCard({card, setIsExpanded}) {
    return (
        <div className="expanded-card-container">
            <button onClick={() => {
                setIsExpanded(false)
            }}>X</button>
            <img src={card.card.imageUrl} alt="expanded card"/>
        </div>
    )
}

export default ExpandedCard