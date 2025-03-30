import '../styles/StatReplacement.css'

function StatReplacement({replacementStats, rotation}) {
    return (
        <h3
            className={rotation === 0 ? "stat-replacement-verticle" : "stat-replacement-horizontal"}
        >{replacementStats}</h3>
    );
}

export default StatReplacement;