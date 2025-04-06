import '../styles/ExpandedCard.css'

function ExpandedCard({ card, setIsExpanded }) {
    return (
        <div className="expanded-card-container">
            <button
                className='close-expanded-card-button'
                onClick={() => {
                setIsExpanded(false)
            }}>X</button>
            <img
                src={card.card.imageUrl}
                alt="expanded card"
                className="expanded-card"
            />
        </div>
    )
}

export default ExpandedCard