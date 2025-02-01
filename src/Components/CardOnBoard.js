import react, {useState, useEffect, useRef} from "react"

import { useDispatch, useSelector } from "react-redux";
import { updateState } from "../store";

function CardOnBoard({ card }) {
    const [rotation, setRotation] = useState(0);
    const [dimensions, setDimensions] = useState({ width: 23, height: 32 });

    
    const handleTap = () => {
        if (rotation === 0) setRotation(90);
        else setRotation(0);
    }

    useEffect(() => {
        rotation === 90 ? setDimensions({ width: 32, height: 23 }) : setDimensions({ width: 23, height: 32 });
    }, [rotation])
    return ( 
        <div
            className="card-on-board-container"
            style={{
                width: `${dimensions.width}vh`
            }}
        >   
            <img
                src={card.imageUrl}
                alt={card.name}
                className="card-on-board"
                onClick={handleTap}
                style={{
                    transform: `rotate(${rotation}deg)`
                }}
            />   
        </div>
    )
}
export default CardOnBoard