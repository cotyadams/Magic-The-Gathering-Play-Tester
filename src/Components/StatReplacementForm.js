import '../styles/StatReplacementForm.css'

import { useState } from 'react'

function StatReplacementForm({ setIsFormOn, isFormOn, setReplacementStats }) {
    const [stats, setStats] = useState('');
    return (
        <div className='stat-replacement-form'>
            <input
                type="text"
                placeholder="power/toughness"
                onChange={(e) => setStats(e.target.value)}
            >
            </input>
            <button
                type='submit'
                form='stat-replacement-form'
                onClick={() => {
                    setIsFormOn(false)
                    setReplacementStats(stats)
                }}
            >submit</button>
        </div>
        
    )
}

export default StatReplacementForm