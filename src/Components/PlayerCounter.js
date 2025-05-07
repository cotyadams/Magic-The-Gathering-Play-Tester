import '../styles/PlayerCounter.css'

import { useDispatch, useSelector } from "react-redux";

import { updateState } from "../store";

function PlayerCounter({counter}) {
    // create copy of state for easy writing
    const sharedState = useSelector((state) => state.sharedState.value)
    const dispatch = useDispatch()

    let PC = structuredClone(sharedState.playerCounters);

    const add = () => {
        for (let i = 0; i < PC.length; i++) {
            if (PC[i].name === counter.name) {
                PC[i].count++
            }
        }
        dispatch(updateState({
            ...sharedState,
            playerCounters: PC
        }))
    }

    const subtract = () => {
        for (let i = 0; i < PC.length; i++) {
            if (PC[i].name === counter.name) {
                PC[i].count--
                if (PC[i].count <= 1) {
                    PC = PC.filter((c) => (
                        c.name !== counter.name
                    ))
                }
            }
        }
        dispatch(updateState({
            ...sharedState,
            playerCounters: PC
        }))
    }

    return (
        <div className='single-counter-container'>
        <h3>{counter.name}: {counter.count}</h3>
            <button
                className="counter-button"
                onClick={add}
            >+</button>
            <button
                className="counter-button"
                onClick={subtract}
            >-</button>
        </div>
    )
}
export default PlayerCounter